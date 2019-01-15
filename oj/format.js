//格式化数字输出(从最后起每三个数字加个逗号)

var str = "12345678901";
function numSplit(str){
    var re = /(\d)(?=(\d{3})+$)/g;
    //(\d{3})+$ 的意思是连续匹配 3 个数字，且最后一次匹配以 3 个数字结尾。
    //要找到所有的单个字符，这些字符的后面跟随的字符的个数必须是3的倍数，并在符合条件的单个字符后面添加,
    return str.replace(re,'$1,');
}
console.log(numSplit(str));

// ----------------------------

//感觉自己写得更好点对于正则考虑了小数，确实是有些麻烦
function formalize(x){
    var cnt=0;
    var y=x.toString();
    var res=[];
    var start=y.indexOf('.')==-1?y.length-1:y.indexOf('.')-1;
    for(var i=start;i>=0;i--)
    {
        res.push(y[i]);
        cnt++;
        if(cnt==3&&i>0)
        {
            cnt=0;
            res.push(',');
        }
    }
    res.reverse();
    res=res.join("");
    res=y.indexOf('.')==-1?res:res+'.'+y.substring(y.indexOf('.')+1);
    console.log(res);
}
formalize(12345);
formalize(1234.123);

// ---------------

const toDecimalMark = num => num.toLocaleString('en-US');