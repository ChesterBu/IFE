//浅copy
// var array = [1,2,3];
// var new_arr1 = array.concat();
// var new_arr2 = array.slice();
// //深copy
// var arr = ['old',1,true,['old1'],{old:1}]
// var new_arr = JSON.parse(JSON.stringify(arr)); //不能拷贝函数


var shallowCopy = function (obj) {
    if(typeof obj !== 'object')
        return;
    var newObj = obj instanceof Array ?[]:{};
    for(var key in obj){
        if(obj.hasOwnProperty(key)){
            newObj[key] = obj[key];
        }
    }
    return newObj;
}

var deepCopy = function (obj) {
    if(typeof obj !== 'object')
        return;
    var newObj = obj instanceof Array ?[]:{};
    for(var key in obj){
        if(obj.hasOwnProperty(key)){
            newObj[key] = typeof obj[key] === 'object' ? deepCopy(obj[key]):obj[key];
        }
    }
    return newObj;
}
