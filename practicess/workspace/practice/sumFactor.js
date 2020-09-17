// // let sum =0;
// // let count=0;
// // let arr =[]
// // for(let i=0;i<arr.length;i++){
// //         sum += arr[i];
// // }
// // for(let n of arr){
// //     if(sum ===n){
// //         count++;
// //     }
// // }

// // console.log(count);
// function sumArr(arr){
//     let sum =0;
//     for(let i=0;i<arr.length;i++){
//         sum += arr[i]
//     }
//     return sum;
// }

// function isSumSafe(n){
//     isSum=true
//     let z = sumArr(n);
//     for(let i=0;i<n.length;i++){
//         if(z === n[i]){
//                 isSum =false;
//                 break
//         }
//     }
//     return isSum;

// }

// // console.log(isSumSafe([5,-5,0]))
// // console.log(isSumSafe([5,-2,1]))
// // console.log(isSumSafe([5,-10,3]))

// function maxMin(arr){
//     let min=arr[0];
//     let max =arr[0];
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]>max){
//             max =arr[i]
//         }
//         if(min>arr[i]){
//             min=arr[i]
//         }      

//     }  
//     return [max,min] 

// }
// console.log(maxMin([3,4,8,0,4,6]))

//console.log(["this","that","Hi_there","How_are_you"].filter(n=>(n.indexOf("_")===-1)))
// function secondMax(arr){
//     let max1=-1;
//     let max2=-1;
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]>max1){
//             max2 = max1;
//             max1= arr[i]
//         }else if(arr[i] !== max1  && arr[i]>max2){
//             max2 = arr[i]
//         }
//     }
//     return max2;
// }
// console.log(secondMax([-3,-5,1,-1]))
// console.log(secondMax([1,3,5,2,0]))
// console.log(secondMax([1,1,1,1]))

function rotation(arr){
    let temp =arr[0]
    for(let i=0;i<arr.length;i++){
        arr[i]=arr[i+1]
        }
        arr[arr.length-1]=temp
        return arr;
}
console.log(rotation([1,2,4,5,6]))