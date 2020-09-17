let arr = [1, 2, 4, 5, 6, 8];
// function fill(arr){
//     let arr1=0;
//     //let h = arr.length-1;
//     for(let i=0;i< arr.length;i++){
//         arr1 +=arr[i];
//     }
//     return arr1;
// }

// console.log(fill(arr));

// //console.log(arr);
function find(arr, k) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === k) { 
        return i;
    }
}
return "none";
}
console.log(find(arr, 17));