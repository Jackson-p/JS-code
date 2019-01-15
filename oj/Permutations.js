//js实现全排列
//这个思路是仿C++写的未涉及js强大函数式编程特性
var arr = [1, 2, 3, 4];
const len = arr.length;
var ans = [];

function allSort(n) { //n表示我开始走全排列的起点
    if (n == len) {
        //console.log(arr);之前涉及到的一个问题就是在所有递归过程中的函数，arr是浅拷贝的，已经进入到ans的arr数组也会遭到残忍的修改，所以最后当然都是一样的了。。。
        ans.push(JSON.parse(JSON.stringify(arr)));
        return;
    }
    for (var i = n; i < len; i++) {
        [arr[i], arr[n]] = [arr[n], arr[i]];
        allSort(n + 1);
        [arr[i], arr[n]] = [arr[n], arr[i]];
    }
}
allSort(0);
console.log(ans);

// 然后呢下面这个是大神的写法函数式编程，没咋看懂，收藏观赏，日后学习

function permutations(string) {
    return (string.length == 1) ? [string] : string.split('').map(
        (e, i) => permutations(string.slice(0, i) + string.slice(i + 1)).map((e2) => e + e2)
    ).reduce((r, e) => r.concat(e)).sort().filter((e, i, a) => (i == 0) || a[i - 1] != e);
}
console.log(permutations("1234"));