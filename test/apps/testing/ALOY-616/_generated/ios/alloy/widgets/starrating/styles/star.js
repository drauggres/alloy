module.exports = [{ "isClass": true, "priority": 10000.0001, "key": "star", "style": { height: "24dp", width: "24dp", left: "5dp" } }];function WPATH(s) {
  var index = s.lastIndexOf('/');
  var path = index === -1 ?
  'starrating/' + s :
  s.substring(0, index) + '/starrating/' + s.substring(index + 1);

  return path.indexOf('/') !== 0 ? '/' + path : path;
}