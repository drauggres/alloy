module.exports = [];function WPATH(s) {
  var index = s.lastIndexOf('/');
  var path = index === -1 ?
  'alloy.window/' + s :
  s.substring(0, index) + '/alloy.window/' + s.substring(index + 1);

  return path.indexOf('/') !== 0 ? '/' + path : path;
}