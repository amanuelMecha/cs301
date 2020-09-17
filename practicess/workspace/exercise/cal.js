// let input = require('prompt-sync')();
// let x = parseFloat(input("Enter the first number: "));
// let y = parseFloat(input("Enter the second number: "));
// let operator = input("choose operator +,-,*,/: ");
// let result = parseFloat(input("what's the output? :"));
// let output ;
// if(operator === "+"){
//     output=x+y;
// }
// else if (operator === "-"){
//     output=x-y;
// }
// else if (operator === "*"){
//     output=x*y;
// }
// else if (operator === "/"){
//     output=x/y;
// }
// console.log(output);
// let i=90;
// for(;i>=81;i--){
//     console.log(i);
//     if(i===81)
//     break;
// }
// console.log(i);

// function reverse(arr){
//     for(let i=0; i<arr.length/2;i++){

//         if(arr[i] !== arr[arr.length-i-1]){
//             return false;
//         }
//     }
//     return true;
// }

// console.log(reverse("animal"));

let max1=0;
let max2 =0;
let arr = [1,2,5,6,8,18]
for(let i=0;i<arr.length;i++){
    if(arr[i]>max1){
        max2=max1;
        max1 = arr[i];
    }else if(arr[i] !== max1 && arr[i]>max2){
        max2 =arr[i];
    }
}
console.log(max2);
