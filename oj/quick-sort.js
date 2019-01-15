//手写快排
function quicksort(arr)
{
    if(arr.length<=1)
        return arr;
    var mid=Math.floor((arr.length-1)/2);
    var midval=arr.splice(mid,1);//注意这里返回数组中间值的同时，又把中间值拿出去
    var left=[];
    var right=[];
    for(var i=0;i<arr.length;i++)
    {
        if(arr[i]<midval)
            left.push(arr[i]);
        else
            right.push(arr[i]);
    }
    return quicksort(left).concat(midval,quicksort(right));//递归求解
}

arr=[1,2,3,5,56,2,2,4,5,6,7,4,2,7,9];
var res=quicksort(arr);
console.log(res);
//以下是算法导论上的代码，我转的js
function Partition(arr,p,r){
      let x = arr[r];
      let i = p-1;
      for(let j =p;j<r;j++){
          if(arr[j]<=x){
            i++;
            [arr[i],arr[j]]=[arr[j],arr[i]];
          }
      }
      [arr[i+1],arr[r]]=[arr[r],arr[i+1]];
      return i+1;
}
function quickSort(arr,p,r){
      let q = 0;
      if(p<r){
        q = Partition(arr,p,r);
        quickSort(arr,p,q-1);
        quickSort(arr,q+1,r);
      }
}
//以下是传说中优雅的es 6 写法
var arr =[7,3,4,2,5,6,6,8,100,20,-5];
var quickSort = function(arr){
  if(!arr.length){
    return [];
  }
  const [pivot,...rest] = arr;
  return [
      ...quickSort(rest.filter((x) => x<pivot)),
      pivot,
      ...quickSort(rest.filter((x) => x>=pivot))
  ];
}
console.log(quickSort(arr));