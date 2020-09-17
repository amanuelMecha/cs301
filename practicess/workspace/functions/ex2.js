// function a(){
//     console.log(x);
//     // consult Global for x and print 20 from Global
//     }
//     function b(){
//     let x = 10 ;
//     a();
//     // consult Global for a
//     console.log(x);
//     }
//     let x = 20 ;
//     b();

// function b(){
// function a(){
// console.log(x);
// }
// let x = 10 ;
// a();
// console.log(x);
// }
// let x = 20 ;
// b();
// b();// 10

// function f() {
// let a = 1 , b = 20 , c;
// console.log(a +" "+ b + " "+ c); // 1 20 undefined
// function g() {
// let b = 300 , c = 4000 ;// if we dont use let there will be a big different
// console.log(a +" "+ b + " "+ c); // 1 300 4000
// a = a + b + c;
// console.log(a +" "+ b + " "+ c); // 4301 300 4000
// }
// console.log(a +" "+ b + " "+ c); // 1 20 undefined
// g();
// console.log(a +" "+ b + " "+ c); // 4301 20 undefined
// }
// f();


let x = 10
function main() {
let x = 0;
console.log("x1 is "+x +" 0");
x =20
console.log("x2 is "+x+ " 20");
if(x > 0 ){

x =30
console.log("x3 is "+x+" 30")
}
console.log("x4 is "+x+" 30")
function f(x) {
console.log("x5 is "+x+" 30");
}
f(50);
console.log("x6 is "+x+" 3 0");
}
main();
console.log("x7 is "+x +" 10");