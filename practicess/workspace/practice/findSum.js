// // 'use strict'
// // function findSumOfDigits(n){     
// //     let sum =0;       
// //     while(n>0){
// //         let y = n%10;
// //          n = Math.floor(n/10);
// //          sum +=y;
// //     }
// //     return sum;
// // }
// // console.log(findSumOfDigits(321310));
// // console.log(findSumOfDigits(90132));

// //let result =prefix("disaaable", "distasteful")
// function prefix(x,y){
//     let output=" ";
//     let j=y.length-1;
//     for(let i=x.length-1;i>=0;i--){
//         if(x[i]===y[j]){
//             output +=x[i];
//             j--
//         }
//     }
//     return output
// }
// console.log(prefix("disaaableing", "distastefuling"))


function switchCase(arr){
     let output="";
    let lower ="abcdefghijklmnopqrstuvwxyz";
    for(let i=0;i<arr.length;i++){
         let  c =arr[i];
        if(lower.includes(c)){
            output +=c.toUpperCase();
        }else{
            output += c.toLowerCase()
        }
    }
return output;
}
let result = switchCase("CaTch 22 ");
console.log(result)




