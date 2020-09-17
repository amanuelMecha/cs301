// function isSumSafe(arr){
//     let sum=0;
//     let output =true;
//     for(let n of arr){
//         sum +=n;
//     }
//     for(let y of arr){
//         if(sum === y){
//             output=false;
//             break;
//          }
//     }
//     return output;
// }
// console.log(isSumSafe([5,-5,0]));
// console.log(isSumSafe([5,-2,1]));

// console.log([-1,3,-4,5,6,9].map(n=>Math.abs(n)));
 // let arr=["this", "that", "Hi_there","_", "How_are_you"]
// function filter(arr){
//     let output=[];
//     let x =_;
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]!== x){
//             output.push(arr[i]);
//         }
//     }
//     return output;
// }

// let x= arr.filter(n=>filter(n));
// // console.log(x);

 function isOneTwoOne(arr){
     let count =0;
     if(arr[0]===1 && (arr[arr.length-1])===1){
         for(let i=1;i<arr.length-1;i++){
             if(arr[i] ===2){
                count++;                
             }
         }
     }
    return count === (arr.length-2);
}
console.log(isOneTwoOne([1,2,2,1]))
console.log(isOneTwoOne([1,2,2,2,2,2]))
console.log(isOneTwoOne([1,2,2,3,2,1]))   
    