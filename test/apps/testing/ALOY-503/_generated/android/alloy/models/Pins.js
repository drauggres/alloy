var Alloy = require('/alloy'),
_ = require("/underscore")._,
model,collection;

exports.definition = {
  config: {
    'columns': {
      'title': 'text',
      'latitude': 'real',
      'longitude': 'real' },

    adapter: {
      type: 'sql',
      collection_name: 'pins' } },


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


model = Alloy.M('pins',
exports.definition,
[]);


collection = Alloy.C('pins',
exports.definition,
model);


exports.Model = model;
exports.Collection = collection;