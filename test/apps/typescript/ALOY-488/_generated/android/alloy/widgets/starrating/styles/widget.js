module.exports = [{ "isId": true, "priority": 100000.0003, "key": "starrating", "style": { layout: "horizontal", width: Ti.UI.SIZE, backgroundColor: "transparent" } }];function WPATH(s) {
  var index = s.lastIndexOf('/');
  var path = index === -1 ?
  'starrating/' + s :
  s.substring(0, index) + '/starrating/' + s.substring(index + 1);

  return path.indexOf('/') !== 0 ? '/' + path : path;
}