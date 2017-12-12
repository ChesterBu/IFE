// var sub_curry = function (fn) {
//     var args = [].slice.call(arguments, 1);
//     return function () {
//         return fn.apply(this, args.concat([].slice.arguments));
//     }
// }
//
// function curry(fn, length) {
//     length = length || fn.length;
//     var slice = Array.prototype.slice;
//     return function () {
//         if (arguments.length < length) {
//             var combined = [fn].concat(slice.call(arguments));
//             return curry(sub_curry.apply(this, combined), length - arguments.length);
//         } else {
//             return fn.apply(this, arguments);
//         }
//     }
// }


function curry(fn, args) {
    var length = fn.length;
    args = args || [];
    return function () {
        var _args = args.slice();
        for(var i=0;i<arguments.length;i++){
            _args.push(arguments[i])
        }
        if(_args.length<length){   //fn的参数还没有全部输入
            return curry.call(this,fn,_args)
        } else {
            return fn.apply(this,_args)
        }
    }
}