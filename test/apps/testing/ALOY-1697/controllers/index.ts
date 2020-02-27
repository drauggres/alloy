import { indexAbstract } from '/controllers/indexAbstract';

const htmlText =
	'<!DOCTYPE html>\n' +
	'<html>\n' +
	'	<head>\n' +
	'		<meta name="viewport" content="width=device-width, initial-scale=1.0">\n' +
	'	</head>\n' +
	'	<body>\n' +
	'		<p>WebView "onlink" Test</p>\n' +
	'		<br/>\n' +
	'		<br/>\n' +
	'		<a href="mylink://show/alert">Show Alert</a>\n' +
	'	</body>\n' +
	'</html>\n';

export default class index extends indexAbstract {
	constructor() {
		super();

		this.webview.html = htmlText;
		this.index.open();
	}

	onLinkHandler(e: OnLinkURLResponse) {
		if (e.url === 'mylink://show/alert') {
			alert("The 'onLinkHandler' callback was invoked.");
			return false;
		}
		return true;
	}
}
