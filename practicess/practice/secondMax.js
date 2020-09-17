function secondMax(arr){
    let max1 =-1;
    let max2 =-1;
for(let i=0;i<arr.length;i++){
    if(arr[i]>max1){
        max2 = max1;
        max1 = arr[i];
    }else if(arr[i] !== max1    && arr[i]>max2){
        max2=arr[i]
    }

}
return max2;

}

console.log(secondMax([1,2,5,8,7,6]))
