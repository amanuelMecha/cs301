let input = require('prompt-sync')();
let x = parseFloat(input("Enter the first number: "));
let y = parseFloat(input("Enter the second number: "));
let operator = input("choose operator +,-,*,/: ");
let result = parseFloat(input("what's the output? :"));
let output ;
if(operator === "+"){
    if(x+y === result){
        output = "Correct! Good job.";
    }
    else{
        output= "Incorrect. Try again!";
    }
}
else if (operator === "-"){
    if(x-y === result){
        output = "Correct! Good job.";
    }
    else{
        output= "Incorrect. Try again!";
    }
}
else if (operator === "*"){
    if(x*y === result){
        output = "Correct! Good job.";
    }
    else{
        output= "Incorrect. Try again!";
    }

}
else if (operator === "/"){
    if(x/y === result){
        output = "Correct! Good job.";
    }
    else{
        output= "Incorrect. Try again!";
    }
}
console.log(output);