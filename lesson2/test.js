// // let prompt =require('prompt-sync')();
// // let tempInCelsius= prompt('Eneter value in celsius: ');
// // let tempInFahrenheit = 9/5*parseFloat(tempInCelsius)+ 32;
// // console.log(tempInFahrenheit); 

// let prompt =require('prompt-sync')();
// let tempInFahrenheit= prompt('Eneter value in Fahrenheit: ');
// let tempInCelsius = 5/9*(parseFloat(tempInFahrenheit)- 32);
// console.log(tempInFahrenheit+" Fahrenheit "+ " is equal to "+tempInCelsius+" Celsius"); 

let prompt =require('prompt-sync')();
let radius= prompt('Enter value of radius: ');
let height = prompt('Enter value of height: ');
radius= parseFloat(radius);

console.log(typeof radius);
height=parseFloat(height);

let volumeCylinder = Math.PI*Math.pow(radius,2)*height;
console.log(volumeCylinder);

