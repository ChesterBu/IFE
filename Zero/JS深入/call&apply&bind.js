Function.prototype.myCall = function (context) {
    context = context || window;
    context.fn = this;
    let args = [];
    for (let i = 1; i < arguments.length; i++) {
        args.push('arguments[' + i + ']');
        //args.push(arguments[i])不行是因为在用eval时会将其内容解析为变量，而不是字符串
    }
    let result = eval('context.fn(' + args + ')');
    delete context.fn;
    return result;
};

Function.prototype.myApply = function (context, arr) {
    context = Object(context) || window;
    context.fn = this;
    let result;
    if (!arr) {
        return context.fn()
    } else {
        let args = [];
        for (let i = 0; i < arr.length; i++) {
            arr.push('arr[' + i + ']');
        }
        result = eval('context.fn(' + args + ')');
    }
    delete context.fn;
    return result;
};

Function.prototype.myBind = function (context) {
    let self = this;
    let args = Array.prototype.slice.call(arguments, 1);
    let fNOP = function () {
    };
    let fBound = function () {
        let bindArgs = Array.prototype.slice.call(arguments);
        return self.apply(this instanceof fBound ? this : context, args.concat(bindArgs))
    };

    fNOP.prototype = this.prototype;
    fBound.prototype = new fNOP;
    return fBound
};