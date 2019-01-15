//数组去重
let arr = [];
function random(min,max){
    return Math.floor((max-min+1)*Math.random())+min;
}
for(let i = 0;i<10;i++){
    arr[i] = random(10,15);
}
console.log("之前",arr);
// 法一:
// arr.sort((x,y) => (x-y));
// arr = arr.filter((x,y) => arr.indexOf(x) === y);
// console.log("之后",arr);
//法二:
let hashT = {};
let ans = [];
for(var i of arr){
    if(!hashT[i]){
        hashT[i] = 1;
        ans.push(i);
    }else{
        hashT[i]++;
    }
}
console.log("之后",ans);
//法三是真的强。。
//const deleDupl  = (arr) => [...new Set(arr)];
//console.log(deleDupl([1,1,1,2,3,4,5,1]));