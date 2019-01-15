//求和为s的连续正数序列
function FindContinuousSequence(sum)
{
    var sta = 1,end = 2;
    var res = [];
    var temp = [];
    while(end <= sum){
        var cur = (sta+end)*(end-sta+1)/2;
        if(cur < sum){
            end++;
        }else if(cur == sum){
            for(var i = sta;i <= end;i++){
                temp.push(i);
            }
            res.push(temp);
            temp = [];
            sta++;
        }else{
            sta++;
            end = sta + 1;
        }
    }
    return res;
}