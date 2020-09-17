// function sub(x,y){
//     return x-y;
// }

// console.log(sub(5,3));

// function mult(x,y){
//     return x*y;
// }

// console.log(mult(5,3));
let input = require('prompt-sync')();
let x = parseFloat(input("Enter the first number: "));
let y = parseFloat(input("Enter the second number: "));
let operator = parseFloat(input("Enter operator exapmle + / * -: "));
function calculator(operator){
    if(operator === "+"){
       console.log( x+y) ;
    }
    else if(operator === "-"){
        console.log( x-y); 
    }
    else if(operator === "*"){
        console.log( x*y); 
    }
    else if(operator === "/"){
        console.log( x/y); 
    }
}
calculator(operator);