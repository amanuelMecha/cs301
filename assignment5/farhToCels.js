'use strict';

function farhToCels(fahrenheit) {
    let c;
    c = (5 / 9) * (fahrenheit - 32);

    return c;
}

let prompt = require('prompt-sync')();
let number = parseFloat(prompt("Enter a temprature in fahrenheit: "));
console.log(farhToCels(number));


