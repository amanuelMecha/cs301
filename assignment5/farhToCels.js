'use strict';

function farhToCels(fahrenheit) {
    let c;
    c = (5 / 9) * (fahrenheit - 32);

    console.log(c);
}

let prompt = require('prompt-sync')();
let number = parseFloat(prompt("Enter a temprature in fahrenheit: "));
farhToCels(number);


