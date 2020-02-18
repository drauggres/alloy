var Alloy = require('/alloy'),
_ = require("/alloy/underscore")._,
model,collection;

exports.definition = {
  config: {
    columns: {
      id: 'INTEGER PRIMARY KEY AUTOINCREMENT',
      name: 'TEXT' },

    adapter: {
      type: 'sql',
      db_name: 'name',
      collection_name: 'name',
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


model = Alloy.M('name',
exports.definition,
[]);


collection = Alloy.C('name',
exports.definition,
model);


exports.Model = model;
exports.Collection = collection;