module.exports = [{ "isApi": true, "priority": 1000.0001, "key": "TableViewRow", "style": { color: "black", height: "50dp" } }, { "isApi": true, "priority": 1000.9001999999999, "key": "TableViewRow", "style": { color: "blue" } }, { "isClass": true, "priority": 10000.0003, "key": "star", "style": { height: "24dp", width: "24dp", left: "5dp" } }, { "isClass": true, "priority": 10000.9004, "key": "star", "style": { height: "32dp", width: "10dp", left: "8dp" } }, { "isClass": true, "priority": 10100.9005, "key": "star", "style": { backgroundColor: "#ffffcc" } }];function WPATH(s) {
  var index = s.lastIndexOf('/');
  var path = index === -1 ?
  'starrating/' + s :
  s.substring(0, index) + '/starrating/' + s.substring(index + 1);

  return path.indexOf('/') !== 0 ? '/' + path : path;
}