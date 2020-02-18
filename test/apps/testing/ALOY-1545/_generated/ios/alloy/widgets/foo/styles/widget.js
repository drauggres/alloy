module.exports = [];function WPATH(s) {
  var index = s.lastIndexOf('/');
  var path = index === -1 ?
  'foo/' + s :
  s.substring(0, index) + '/foo/' + s.substring(index + 1);

  return path.indexOf('/') !== 0 ? '/' + path : path;
}