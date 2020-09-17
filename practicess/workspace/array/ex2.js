//function findAverage(arr,x,start,end)
function findAverage(arr){
   //console.log(scores);
   let sum =0;
   
   for(let i=0;i<10;i++){
    arr[i]=i;
    sum += arr[i];}
   let average =sum/arr.length;
   return average;
}
let scores = [10,20,30,40,50];
let average =findAverage(scores);
console.log(average);
scores= [];
for(let i=0;i<10;i++){
    scores[i]=Math.ceil(Math.random()*10);
    
}
console.log("the second score "+scores);
average =findAverage(scores);
console.log(average);