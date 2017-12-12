
function type(obj) {
    var classType={};
    "Boolean Number String Function Array Date RegExp Object Error Null Undefined".split(' ').map(function (item) {
        classType['[object '+item+']'] = item.toLowerCase();
    });
    return typeof obj === "object" || typeof obj === "function" ? classType[Object.prototype.toString.call(obj)]||'object':typeof obj;
}

