export function getlocalStorage(key) {
    var storage = window.localStorage;
    if (!key) {
        console.warn('key is empty');
    }
    if (storage) {
        var v = storage.getItem(key);
        if (!v) {
            return;
        }
        if (v.indexOf('obj-') === 0) {
            v = v.slice(4);
            return JSON.parse(v);
        } else if (v.indexOf('str-') === 0) {
            return v.slice(4);
        }
    }
}

