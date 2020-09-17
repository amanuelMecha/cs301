'use strict'
function maxMinPair(arr){
    let max = arr[0];
    let min = arr[0];
    let output =[]

    for(let i=1;i<arr.length;i++){
           if(max<arr[i]){
                    max =arr[i];                    
           } 
           if(min>arr[i]){
               min = arr[i];
           }
    }
    return [max,min];
}
console.log(maxMinPair([3,4,8,0,4,6]));
console.log(maxMinPair([3,-5,8,9,25,-7]))
console.log(maxMinPair([3,5,7,9,51,6,46]));

