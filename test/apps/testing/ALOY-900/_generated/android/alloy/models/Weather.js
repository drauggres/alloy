var Alloy = require('/alloy'),
_ = require("/alloy/underscore")._,
model,collection;

exports.definition = {
  config: {
    'columns': {
      'city': 'text',
      'id': 'integer' },

    adapter: {
      type: 'sql',
      collection_name: 'cities',
      db_file: '/weather.sqlite',
      idAttribute: 'id' } },


  extendModel: function (Model) {
    _.extend(Model.prototype, {
      // extended functions and properties go here
    });

    return Model;
  },
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


model = Alloy.M('weather',
exports.definition,
[function (migration) {
  migration.name = 'weather';
  migration.id = '201403121234567';
  migration.up = function (migrator) {
    migrator.db.execute('CREATE TABLE IF NOT EXISTS weather (city TEXT, id INTEGER NOT NULL, bogusField TEXT);');
  };

  migration.down = function (db) {
    db.dropTable('weather');
  };
}]);


collection = Alloy.C('weather',
exports.definition,
model);


exports.Model = model;
exports.Collection = collection;