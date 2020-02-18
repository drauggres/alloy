var Alloy = require('/alloy'),
_ = require("/underscore")._,
model,collection;

exports.definition = {
  config: {
    columns: {
      id: 'INTEGER PRIMARY KEY AUTOINCREMENT',
      title: 'TEXT',
      subtitle: 'TEXT',
      image: 'TEXT' },

    adapter: {
      type: 'sql',
      collection_name: 'info',
      idAttribute: 'id' } },


  extendCollection: function (Collection) {
    _.extend(Collection.prototype, {

      // For Backbone v1.1.2, uncomment this to override the fetch method
      /*
      fetch: function(options) {
      	options = options ? _.clone(options) : {};
      	options.reset = true;
      	return Backbone.Collection.prototype.fetch.call(this, options);
      },
      */});

    return Collection;
  } };


model = Alloy.M('info',
exports.definition,
[function (migration) {
  migration.name = 'info';
  migration.id = '201209301904312';
  migration.up = function (migrator) {
    migrator.createTable({
      columns: {
        id: 'INTEGER PRIMARY KEY AUTOINCREMENT',
        title: 'TEXT',
        subtitle: 'TEXT',
        image: 'TEXT' } });


  };

  migration.down = function (migrator) {
    migrator.dropTable('info');
  };
}, function (migration) {
  migration.name = 'info';
  migration.id = '201301161234567';
  var info = [];
  for (var i = 0; i < 500; i++) {
    if (i % 7 === 0) {
      info.push({
        title: 'This is the title',
        subtitle: 'This is the slightly more verbose subtitle',
        image: i % 2 ? '/appc.png' : '/alloy.png' });

    } else if (i % 2) {
      info.push({
        title: 'This is the title with subtitle',
        subtitle: 'This is the slightly more verbose subtitle' });

    } else {
      info.push({
        title: 'This is the lonely title' });

    }
  }

  migration.up = function (migrator) {
    for (var i = 0; i < info.length; i++) {
      migrator.insertRow(info[i]);
    }
  };

  migration.down = function (migrator) {
    for (var i = 0; i < info.length; i++) {
      migrator.deleteRow(info[i]);
    }
  };
}]);


collection = Alloy.C('info',
exports.definition,
model);


exports.Model = model;
exports.Collection = collection;