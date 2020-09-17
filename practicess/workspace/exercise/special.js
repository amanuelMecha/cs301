// // // let x;
// // // let y = 2;
// // // let z = 3;
// // // console.log(x); //________
// // // x = 1;
// // // z = x + y + z;
// // // console.log(x); //_______
// // // console.log(z); //_______
// // // x = z - y;
// // // y = y*2-1;
// // // z = x + y;
// // // console.log(x); //________
// // // console.log(y); //_______
// // // console.log(z); //_______
// // // console.log(5-3+2*4/2-2+8/2-2)
// // let x;
// // // let y = '5';
// // // console.log(x + y); // 'undefined5'_______
// //  let z = 2;
// // // console.log(y - z); // _______
// // x = 3;
// // //console.log(x + y); // _______
// // z = z + !x;

// // console.log(z); //










// let input  =require('prompt-sync')();
// let number = parseFloat(input("Enter a number: "));

// if(number%2 ===0){
//     console.log(number+" Even number");
// }
// else{
//     console.log(number+" Odd number");
// }

// for(let i=100;i>=0;i-=5){
//     console.log(i);
// }
let input = require('prompt-sync')();
let g;
const z=10;
let count =0;

do{
    g =parseInt(input("Guess any number: "));
    count++;
}while(z !==g)
if(count ===1){
    console.log("Awesome!");
}else if(count ===2){
    console.log("Not bad!");
}else if(count >=3){
    console.log("You got it correct after "+ count );
}
console.log(count);
console.log("you got it right");










