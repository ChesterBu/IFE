var isObject = function (data) {
    return Object.prototype.toString.call(data) === '[object Object]';
}
var extend = function (deep) {
    var sources = typeof deep === 'boolean'&& deep ?
        Array.prototype.slice.call(arguments,1):
        Array.prototype.slice.call(arguments);
    var i=0;
    var obj = {};
    for (;i<sources.length;i++){
        if(!isObject(sources[i])){
            console.error("Parmas must be Object")
            return false;
        }
        for (var key in sources[i]){
            //i=0时先将source【0】拷贝到obj；i=1时第一个if（）才有用来判断深拷贝
            if(deep===true && isObject(sources[i][key]) && obj[key]){
                obj[key] = extend(deep,obj[key],sources[i][key]);
                continue
            }
            if(sources[i].hasOwnProperty(key)){
                obj[key]=sources[i][key];
            }
        }
    }
    return obj;

}

var obj1 = {
    a:{a1:1,a2:2},
    b:{b1:1,b2:2}
}

var obj2 = {
    a:{a3:1,a4:2},
    b:{b3:4},
    c:4
}
console.log()

