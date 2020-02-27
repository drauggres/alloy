module.exports = [];function WPATH(s) {
  var index = s.lastIndexOf('/');
  var path = index === -1 ?
  'tony.section/' + s :
  s.substring(0, index) + '/tony.section/' + s.substring(index + 1);

  return path.indexOf('/') !== 0 ? '/' + path : path;
}