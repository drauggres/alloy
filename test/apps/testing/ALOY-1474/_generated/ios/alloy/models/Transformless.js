var Alloy = require('/alloy'),
_ = require("/underscore")._,
model,collection;

exports.definition = {};


model = Alloy.M('transformless',
exports.definition,
[]);


collection = Alloy.C('transformless',
exports.definition,
model);


exports.Model = model;
exports.Collection = collection;