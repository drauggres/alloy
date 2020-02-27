module.exports = [{ "isId": true, "priority": 100000.0001, "key": "theView", "style": { height: 200, width: 200, backgroundColor: "#888" } }];function WPATH(s) {
  var index = s.lastIndexOf('/');
  var path = index === -1 ?
  'optionDialog/' + s :
  s.substring(0, index) + '/optionDialog/' + s.substring(index + 1);

  return path.indexOf('/') !== 0 ? '/' + path : path;
}