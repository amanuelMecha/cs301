'use strict';
function checkPrime(n) {
    let count = 0;
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            count++;
        }
    }
    return count === 0;
}

let prompt = require('prompt-sync')();
let number = parseFloat(prompt("Enter a number :"));

console.log(checkPrime(number));


