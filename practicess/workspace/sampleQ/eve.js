// function isEven(arr){
//     let even =[];
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]%2 ===0){
//             even.push(arr[i]);
//         }
//     }
//     return even;
// }

// console.log(isEven([1,2,3,4,5,6]));
// function Sumnumber(n){
//     let sum =0;
//     if(n>0){
//         for(let i=1;i<=n;i++){
//             sum +=i;
//         }
//     }
//     return sum;
// }
// console.log(Sumnumber(3));
// function noZero(arr,n){
//     for(let i=0; i<arr.length;i++){
//         if(arr[i]===n){
//             return true;
//         }
//         }
//         return false;
//     }
    

// let array = [1,4,5,10];
// console.log(noZero(array, 5));

function repeat(arr,n,x){

    let output=[];
    for(let i=0;i<arr.length;i++){
        if(arr[i]===n){
            for(let j=0;j<x;j++){
                output.push(n);
            }
        }else{

            output.push(arr[i]);
        }
        
    }
    return output
}
console.log(repeat([1,2,3,4,5],3,2));