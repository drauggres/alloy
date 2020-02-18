module.exports = [{ "isId": true, "priority": 100000.0002, "key": "helloButton", "style": { backgroundImage: WPATH('hello.png'), height: 135, width: 233 } }];function WPATH(s) {
  var index = s.lastIndexOf('/');
  var path = index === -1 ?
  'com.test.hellobutton/' + s :
  s.substring(0, index) + '/com.test.hellobutton/' + s.substring(index + 1);

  return path.indexOf('/') !== 0 ? '/' + path : path;
}