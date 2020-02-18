module.exports = [{ "isId": true, "priority": 100000.0001, "key": "t", "style": { textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT, width: Ti.UI.SIZE, height: Ti.UI.SIZE, text: "Click a button to display something", color: "red" } }, { "isId": true, "priority": 100000.0002, "key": "hl", "style": { layout: "horizontal", width: Ti.UI.FILL, height: "100" } }, { "isId": true, "priority": 100000.0003, "key": "a", "style": { title: "A", width: Ti.UI.SIZE, height: Ti.UI.SIZE } }, { "isId": true, "priority": 100000.0004, "key": "b", "style": { title: "B", width: Ti.UI.SIZE, height: Ti.UI.SIZE } }, { "isId": true, "priority": 100000.0005, "key": "c", "style": { title: "C", width: Ti.UI.SIZE, height: Ti.UI.SIZE } }];function WPATH(s) {
  var index = s.lastIndexOf('/');
  var path = index === -1 ?
  'com.foo.widget/' + s :
  s.substring(0, index) + '/com.foo.widget/' + s.substring(index + 1);

  return path.indexOf('/') !== 0 ? '/' + path : path;
}