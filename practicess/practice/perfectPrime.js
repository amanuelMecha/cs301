// function prime(y){
//     isPrime = true;
//     for(let i=2;i<y;i++){
//         if(y%i === 0){
//             isPrime=false;
//             break;
//         }
//     }
//     return isPrime;
// }
//[1,3,5,5,6,7]
// console.log(prime(7))
// console.log(prime(9))
// console.log(prime(17))
// console.log(prime(11))
//console.log([1,3,5,5,6,7].map(a=>prime(a)))
function isPerfectPrimeArray(arr){
   // let isPrime=true           
     for(let i=1;i<arr.length;i=i+2){ 
    //         for(let j=2;j<arr[i];j++){
    //             if(arr[i]%j ===0){
    //                 isPrime= false;
    //                 break
    //             }
            }
    // }   
    // return isPrime;    
}
let arr =[2,7,6,7,8,8]
let output = isPerfectPrimeArray(arr);
console.log(output);