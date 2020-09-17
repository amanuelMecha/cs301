let input = require('prompt-sync')();
let x= parseFloat(input("Enter the first number: "));
let y = parseFloat(input("Enter the second number: "));

let subtract = Math.abs(x-y);
console.log(subtract);
