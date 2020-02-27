module.exports = [{ "isApi": true, "priority": 1000.0002, "key": "Label", "style": { top: 20 } }];function WPATH(s) {
  var index = s.lastIndexOf('/');
  var path = index === -1 ?
  'classic/' + s :
  s.substring(0, index) + '/classic/' + s.substring(index + 1);

  return path.indexOf('/') !== 0 ? '/' + path : path;
}