module.exports = [{ "isApi": true, "priority": 1000.0003, "key": "Label", "style": { top: 20 } }];function WPATH(s) {
  var index = s.lastIndexOf('/');
  var path = index === -1 ?
  'npm/' + s :
  s.substring(0, index) + '/npm/' + s.substring(index + 1);

  return path.indexOf('/') !== 0 ? '/' + path : path;
}