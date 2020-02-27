import * as Alloy from 'alloy';
import index from '/controllers/index';

var supported = false;
if (OS_IOS) {
    var major = Ti.Platform.version.split('.')[0];
    if (major && parseInt(major, 10) <= 6) {
        supported = true;
    }
}

new index();
