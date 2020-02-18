var Alloy = require('/alloy'),
_ = require("/underscore")._,
model,collection;

exports.definition = {
  config: {
    'columns': {
      text: 'TEXT' },

    'adapter': {
      'type': 'sql',
      'collection_name': 'collection' } },


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


model = Alloy.M('collection',
exports.definition,
[function (migration) {
  migration.name = 'collection';
  migration.id = '201306200000000';
  migration.up = function (migrator) {
    migrator.createTable({
      columns: {
        text: 'TEXT' } });


    for (var i = 0; i < 20; i++) {
      migrator.insertRow({ text: 'label ' + (i + 1) });
    }
  };

  migration.down = function (migrator) {
    migrator.dropTable('collection');
  };
}]);


collection = Alloy.C('collection',
exports.definition,
model);


exports.Model = model;
exports.Collection = collection;