'use strict';
// function rotateLeft(list) {
//     let left = [];
//     let y = [list[0]];
//     let j = 0;
//     for (let i = 1; i < list.length; i++) {
//         left[j] = list[i];
//         j++;
//     }
//     return left.concat(y);
// }

// let list = [25, 17, 8, 9, 5, 20];
// console.log(rotateLeft(list));

//or
function rotate(arr){
    let temp =arr[0]
    for(let i=0;i<arr.length;i++){
        arr[i]= arr[i+1]
    }
    arr[arr.length-1] = temp;
    return arr;
}

let arr= [1,2,3,4,5]
rotate(arr)
console.log(arr)