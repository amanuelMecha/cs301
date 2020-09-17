// function isDivisible(arr,n){
//     let output =1;
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]%n !==0){
//             output =0;
//             break;
//         }
//     }
//     return output;
// }
// console.log(isDivisible([1,2,4,5],2))
// console.log(isDivisible([2,4,18],2))
// let x =["hi", "Hello", "bYe"]

// let X = ["hi", "Hello", "bYe"].map(n=>n.toLocaleUpperCase())
// console.log(X)
// console.log(X.filter(n=>n[0]==="H"))
function isDivisible(arr,divisor){
    for(let i=0;i<arr.length;i++){
        if(arr[i]%divisor===0){
            return 1;
        }else{
            return 0;
        }
    }
}
console.log(isDivisible([2,4,6,9,8],2))