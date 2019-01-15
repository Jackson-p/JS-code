// 手写map(个人实现版)
var arr = [1, 3, 5, 7, 9];
// var ans = arr.map(function(s){
//     return 2*s;
// });
// console.log(ans);
Array.prototype.mapp = function(callback, thisargs){
    var o = Object(this);
    var len = o.length;
    var A = [];
    var T;
    if(thisargs){
        T = thisargs;
    }
    for(var i in o){
        if(o.hasOwnProperty(i)){
            A[i] = callback.call(T,o[i],i,o);
        }
    }
    return A;
}
var ans = arr.mapp(function(s,index){
    console.log(index);
    return 2*s;
});
console.log(ans);
//https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/map