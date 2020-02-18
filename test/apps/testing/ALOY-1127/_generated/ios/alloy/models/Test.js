var Alloy = require('/alloy'),
_ = require("/alloy/underscore")._,
model,collection;

exports.definition = {
  config: {
    'columns': {
      'username': 'text' },

    adapter: {
      type: 'sql',
      collection_name: 'test' } },


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


model = Alloy.M('test',
exports.definition,
[]);


collection = Alloy.C('test',
exports.definition,
model);


exports.Model = model;
exports.Collection = collection;