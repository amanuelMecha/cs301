// let x=5;
// let y=2;
// let a=7;
// let b=3;
// function foo(a,b){
// let x=a+b;
// y=a-b;
// console.log(a,b,x,y)
// }
// console.log(a,b,x,y)
// foo(4,4)
// console.log(a,b,x,y)
// [2,3, -1,-4,3,2,1]
// function findMin(arr){
// let min=arr[0];

// }

// Use array filter method to filter out strings that contains "_" from a string array
// Original array
// Filtered array
let arr = ["this", "that", "Hi_there", "How_are_you"]
// ["this", "that"]

//console.log(arr.filter(n=>n.indexOf("_") === -1));
// console.log(arr.filter(n=>n[0] === "H"))
function filterr(arr){
    let output=[];
for(let i of arr){
   
    if(i.indexOf("_") ===-1){
        output.push(i);
    }
}
return output;
    
}
console.log(filterr(arr));