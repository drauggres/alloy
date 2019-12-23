'use strict';

const path = require('path');
const spawn = require('child_process').spawn;

function copyResultSync(afs, source, destination, opts) {
	const moveLevelUp = opts.moveLevelUp;
	const ignoreFiles = opts.ignoreFiles;
	const logger = opts.logger;

	afs.copyDirSyncRecursive(source, destination, {
		preserve: true,
		ignoreDirs: moveLevelUp,
		ignoreFiles: ignoreFiles,
		logger: logger
	});
	// TODO: fix "sources" path in source maps
	moveLevelUp.forEach(dir => {
		const src = path.resolve(source, dir);
		if (!afs.exists(src)) {
			return;
		}
		afs.copyDirSyncRecursive(src, destination, {
			preserve: true,
			ignoreFiles: ignoreFiles,
			logger: logger
		});
	});
}

exports.id = 'ti.typescript';
exports.init = (logger, config, cli, appc) => {
	cli.on('build.pre.compile', {
		priority: 2200, // explicitly lower priority to make sure this hooks runs after the Alloy compiler
		post: (builder, callback) => {
			let sourceMaps = builder['sourceMaps'];
			const tscPath = path.resolve(__dirname, '..', 'node_modules', '.bin', 'tsc');
			const args = [tscPath, '-p', 'tsconfig.json', '--listEmittedFiles'];
			if (sourceMaps) {
				args.push('--sourceMap');
				args.push('true');
				args.push('--inlineSources');
				args.push('true');
			}
			logger.info('Compiling TypeScript files');
			logger.trace(`Executing: node ${args.join(' ')}`);
			const child = spawn('node', args, {
				stdio: 'inherit',
				cwd: cli.argv['project-dir']
			});
			child.on('close', code => {
				if (code === 0) {
					try {
						const tscConfigPath = path.resolve(__dirname, '..', 'tsconfig.json');
						const tscConfig = require(tscConfigPath);
						const relativeOutDir = tscConfig['compilerOptions'] && tscConfig['compilerOptions']['outDir'] || './build/TypeScript';
						const absoluteOutDir = path.resolve(__dirname, path.relative(tscConfigPath, relativeOutDir));
						const Resources = path.resolve(__dirname, '..', 'Resources');
						const moveLevelUp = ['gen', 'lib', 'src'];

						copyResultSync(appc.fs, absoluteOutDir, Resources, {
							logger: logger.log,
							moveLevelUp: moveLevelUp,
						});
					} catch (e) {
						return callback(e);
					}
					callback();
				} else {
					const error = new Error(`TypeScript compiler with non-zero exit code ${code}`);
					error.code = code;
					callback(error);
				}
			});
		}
	});
};
