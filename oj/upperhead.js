//实现一个英文字段，每个单词首字母大写
function upperHead(text){
    var arr = text.split(" ");
    for(var i in arr){
        arr[i] = arr[i].substring(0,1).toUpperCase()+arr[i].substring(1);
    }
    return arr.join(" ");
}
var text = "hello i'm liaoliao";
text[0] = text[0].toUpperCase();
console.log(text);
console.log(upperHead(text));

//正则+es6
//const upperHead = (text) => text.replace(/\b[a-z]/g,head => head.toUpperCase());
//console.log(upperHead("hello liaoliao"));