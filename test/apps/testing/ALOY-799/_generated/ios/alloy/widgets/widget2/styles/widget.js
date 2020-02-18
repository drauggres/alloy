module.exports = [];function WPATH(s) {
  var index = s.lastIndexOf('/');
  var path = index === -1 ?
  'widget2/' + s :
  s.substring(0, index) + '/widget2/' + s.substring(index + 1);

  return path.indexOf('/') !== 0 ? '/' + path : path;
}