module.exports = [{ "isApi": true, "priority": 1000.0001, "key": "Window", "style": { backgroundColor: "#fff" } }, { "isApi": true, "priority": 1000.0002, "key": "Button", "style": { top: 200, width: 200, height: 50 } }, { "isId": true, "priority": 100000.0003, "key": "loading", "style": { height: 20, width: 20 } }];function WPATH(s) {
  var index = s.lastIndexOf('/');
  var path = index === -1 ?
  'test/' + s :
  s.substring(0, index) + '/test/' + s.substring(index + 1);

  return path.indexOf('/') !== 0 ? '/' + path : path;
}