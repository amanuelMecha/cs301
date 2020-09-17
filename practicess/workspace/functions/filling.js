// const score =[];
// let  input = require('prompt-sync')();
// let sum =0;
// for(let i=0;i<10;i++){
//     score[i]= parseInt(input("Enter a number "));

//     sum += score[i];

// }
// console.log(sum);
// console.log(score);
// console.log(score.length);
// //console.log(typeof score);
let scores =[10,20,30,40,50];
function findAverage(arr){
    let sum=0;
    for(let i=0;i<arr.length;i++){
            sum += arr[i];
    }
    let avg =sum/arr.length;
    return avg;
}
console.log("first console "+scores);
scores =[];
for(let i=0;i<10;i++){
    scores[i]= Math.ceil(Math.random()*10);
    // console.log(scores);
    // findAverage(scores);
}
console.log(scores);
let average = findAverage(scores);
console.log(average);
