//双重循环
var array = [1,1,'a','A',2,2,'2'];
var array2=[{value:1},{value:2}]
// function unique(array) {
//     var res=[];
//     for(var i=0;i<array.length;i++){
//         for(var j=0;j<res.length;j++){
//             if(array[i]===res[j]){
//                 break
//             }
//         }
//         if(j===res.length){
//             res.push(array[i])
//         }
//     }
//     return res;
// }


//indexOf优化
// function unique(array) {
//     var res=[];
//     for(var i=0;i<array.length;i++){
//         if(res.indexOf(array[i])===-1){
//             res.push(array[i])
//         }
//     }
//     return res
// }

//排序后去重
// function unique(array) {
//     var res = [];
//     var sortedArray = array.concat().sort();
//     var seen;
//     for (var i = 0; i < sortedArray.length; i++) {
//         if (!i || seen !== sortedArray[i]) {
//             res.push(sortedArray[i])
//         }
//         seen = sortedArray[i]
//     }
//     return res;
// }
// console.log(unique([1,1]))

//unique API
// function unique(array,isSorted) {
//     var res=[];
//     var seen;
//     for(var i=0;i<array.length;i++){
//         var val = array[i]
//         if(isSorted){
//             if (!i || seen !== val) {
//              res.push(val)
//             }
//          seen = val
//         } else if(res.indexOf(val)===-1){
//             res.push(val)
//         }
//     }
//     return res;
// }


//可传入函数处理数组以实现某种需求
// function unique(array,isSorted,iteratee) {
//     var res=[];
//     var seen=[];
//     for (var i=0;i<array.length;i++){
//         var value = array[i];
//         var computed = iteratee?iteratee(value,i,array):value
//         if(isSorted){
//             if(!i || seen !== computed){
//                 res.push(value)
//             }
//             seen = computed;
//         } else if(iteratee){
//             if(seen.indexOf(computed)===-1){
//                 seen.push(computed);
//                 res.push(value);
//             }
//         } else if(res.indexOf(value)===-1){
//             res.push(value);
//         }
//     }
//     return res
// }
//
// console.log(unique(array,false,function (item) {
//     return typeof item ==='string'?item.toLowerCase():item;
// }))
//
// console.log(unique(array2,false,function (item) {
//     return item.value;
// }))

//filter
// function unique(array) {
//     var res = array.filter(function (item,index,array) {
//         return array.indexOf(item)===index;
//     })
//     return res;
// }
//
// function unique(array) {
//     return array.concat().sort().filter(function (item,index,array) {
//             return !index||item !== array[index-1];
//         }
//     )
// }
// console.log(unique([1,1,1,2]))


//Object键值对
// function uniqur(array) {
//     var obj={};
//     return array.filter(function (item,index,array) {
//         return obj.hasOwnProperty(typeof item + JSON.stringify(item))? false : (obj[typeof item + JSON.stringify(item)]=true);
//     })
// }
// console.log(uniqur([{value:1},{value:1},{value:2}]))


//ES6
//var unique =(a)=>[...new Set(a)];

// 总结
//
// for循环     对象和NaN不去重
// indexOf循环     对象和NaN不去重
// sort          对象和NaN不去重
// filter +indexOf 对象不去重，NaN会被忽略
// filter + sort  对象和NaN不去重
//键值对   全去重
//set  对象不去重





