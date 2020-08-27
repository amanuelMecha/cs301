// C = 5/9 x (F - 32)

function farhToCels(fahrenheit){
    let c;
    c = (5/9)*(fahrenheit-32);
    
   console.log(c);
}

function input(){
    let prompt = require('prompt-sync')();
    let number = parseFloat(prompt("Enter a temprature in fahrenheit: "));

    farhToCels(number);
}
input();