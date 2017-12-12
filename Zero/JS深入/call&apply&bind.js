Function.prototype.myCall = function (context) {
    context = context || window;
    context.fn = this;
    var args = [];
    for(var i = 1;i<arguments.length;i++){
        args.push('arguments['+i+']');
        //args.push(arguments[i])不行是因为在用eval时会将其内容解析为变量，而不是字符串
    }
    var result = eval('context.fn('+args+')')
    delete context.fn;
    return result;
};

Function.prototype.myApply = function (context, arr) {
    context = Object(context) || window;
    context.fn = this;
    var result;
    if (!arr) {
        return context.fn()
    } else {
        var args = [];
        for (var i = 0; i < arr.length; i++) {
            arr.push('arr[' + i + ']');
        }
        result = eval('context.fn(' + args + ')');
    }
    delete context.fn;
    return result;
}

Function.prototype.myBind = function (context) {
    var self = this;
    var args = Array.prototype.slice.call(arguments,1);
    return function () {
        var bindArgs = Array.prototype.slice.call(arguments);
        return self.apply(context,args.concat(bindArgs))
    }
}