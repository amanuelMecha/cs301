let x = require('prompt-sync')();
let volume_quarts = parseFloat(x("Enter volume in quarts: "));
console.log(typeof volume_quarts);
let volume_liters = volume_quarts * 0.946352946;

console.log(volume_quarts + " quarts is equal to " + volume_liters + " liters" );



