module.exports = [{ "isApi": true, "priority": 1000.0004, "key": "Label", "style": { color: "#000", font: { fontSize: 18, fontWeight: "bold" }, height: Ti.UI.SIZE, width: Ti.UI.SIZE } }];function WPATH(s) {
  var index = s.lastIndexOf('/');
  var path = index === -1 ?
  'foo/' + s :
  s.substring(0, index) + '/foo/' + s.substring(index + 1);

  return path.indexOf('/') !== 0 ? '/' + path : path;
}