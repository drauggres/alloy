var Alloy = require('/alloy'),
_ = require("/underscore")._,
model,collection;

exports.definition = {
  config: {
    'columns': {
      'username': 'text' },

    adapter: {
      type: 'sql',
      collection_name: 'test',
      db_file: function () {
        // You can process db file name
        return '/my_custom_db_file.sqlite';
      } } } };





model = Alloy.M('test',
exports.definition,
[]);


collection = Alloy.C('test',
exports.definition,
model);


exports.Model = model;
exports.Collection = collection;