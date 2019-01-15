// 手写bind（个人版）
var name = "Brelly"
var test = {
    name:"liao",
    say:function(a) {
        console.log(this.name+a);
    }
}
var real = {
    name:"Brelly Liaoliao"
};
//test.say.apply(real,[2]);
test.say.bind(real,2)();
Function.prototype.bindPoly=function(othis){
    var args = [].slice.call(arguments, 1);
    var func = this;//this永远指向调用他的那个对象
    return function(){
        return func.apply(othis,args);
    }
}
test.say.bindPoly(real,2)();

//https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/bind