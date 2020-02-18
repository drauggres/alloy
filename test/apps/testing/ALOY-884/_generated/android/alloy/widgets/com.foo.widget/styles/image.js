module.exports = [];function WPATH(s) {
  var index = s.lastIndexOf('/');
  var path = index === -1 ?
  'com.foo.widget/' + s :
  s.substring(0, index) + '/com.foo.widget/' + s.substring(index + 1);

  return path.indexOf('/') !== 0 ? '/' + path : path;
}