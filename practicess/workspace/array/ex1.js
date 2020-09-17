// let degrees = [25.2,18.0,1];
// degrees = [];
// console.log(degrees)

// const ranges = [1,2,3,4,5];
// ranges[3]=72.6;
// console.log(ranges);
// const scores =[];
// for(let i=0;i<10;i++){
//     scores[i]= Math.ceil(Math.random()*100);
// }
// console.log(scores);
let scores = [10,20,30,40,50];
function findAverage(arr){
   //console.log(scores);
   let sum =0;
   
   for(let i=0;i<arr.length;i++){
       sum +=arr[i];
   }
   let average =sum/arr.length;
   return average;


}

scores= [];
for(let i=0;i<10;i++){
    scores[i]=Math.ceil(Math.random()*10);
    
}
console.log("the second score "+scores);
let average =findAverage(scores);
console.log(average);