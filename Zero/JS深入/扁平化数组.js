var arr = [1,[2,[3,4]]];
// function flatten(arr) {
//     var result = [];
//     for(var i=0;i<arr.length;i++){
//         if(Array.isArray(arr[i])){
//             result = result.concat(flatten(arr[i]))
//         } else {
//             result.push(arr[i])
//         }
//
//     }
//     return result
// }
// console.log(flatten(arr))

// function flatten(arr) {
//     return arr.toString().split(',').map(function (item) {
//         return +item;
//     })
// }
// console.log(flatten(arr));
//[1,'1',2,'2']会出错

// function flatten(arr) {
//     return arr.reduce(function (prev,next) {
//         return prev.concat(Array.isArray(next)?flatten(next):next);
//     },[])
// }
// console.log(flatten(arr))

// arr=[].concat(...arr);只能扁平一层；
// function flatten(arr) {
//     while(arr.some(item=>Array.isArray(item))){
//         arr=[].concat(...arr);
//     }
//     return arr;
// }
// console.log(flatten(arr))
/**
 * 数组扁平化
 * @param  {Array} input   要处理的数组
 * @param  {boolean} shallow 是否只扁平一层
 * @param  {boolean} strict  是否严格处理元素，下面有解释
 * @param  {Array} output  这是为了方便递归而传递的参数
 * 源码地址：https://github.com/jashkenas/underscore/blob/master/underscore.js#L528
 */
function flatten(input,shawllow,strict,output) {
    output = output || [];
    var idx = output.length;
    for (var i=0;i<input.length;i++){
        var value = input[i];
        if(Array.isArray(value)){
            if(shawllow){
                var j=0,len = value.length;
                while (j<len) output[idx++] = value[j++];
            } else {
                flatten(value,shawllow,strict,output);
                idx = output.length
            }
        } else if(!strict){
            output[idx++] = value; 
        }
    }
    return output
}

/*
 shallow true + strict false ：正常扁平一层
 shallow false + strict false ：正常扁平所有层
 shallow true + strict true ：去掉非数组元素
 shallow false + strict true ： 返回一个[]
*/