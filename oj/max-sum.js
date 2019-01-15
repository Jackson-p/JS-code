//连续子数组最大和
function FindGreatestSumOfSubArray(array)
{
    var res = array[0];
    var maxn = array[0];
    //end表示以end结尾的数组的最大连续子序列,状态转移方程如下
    //const getMax = (end) => end==0?array[end]:Math.max(getMax(end-1)+array[end],array[end]);
    for(var i = 1, len = array.length;i < len;i++){
        res = Math.max(res + array[i],array[i]);
        maxn = Math.max(maxn,res);
    }
    return maxn;
}