// // // for(let i=1;i<=20;i++){
// // //     if(i%2===0){
// // //         console.log(i);
// // //     }
// // // }

// // let i=1;
// // while(i++<=20){
// //     if(i%2===0){
// // console.log(i);


// //     }
    
// // }
// for (let i = 5 ; i >=1 ; i--){
//     let row="";
//     for(let j= 1 ; j<=i ; j++){
//         row += i; // +"\t";
//     }
//     console.log(row);
// }

// let count=0;
// let n=10;
// for(i=2;i<n;i++){
//     if(n%i===0){
//         count++;
//     }
// }
// console.log(count===0);

// function A(){
// console.log("A is called")
// console.log("Before B is called")
// B();
// console.log("After B is called")
// }
// function B(){
// console.log("B is called")
// console.log("Before C is called")
// C();
// console.log("After C is called")}
// function C(){
// console.log("C is called")}
// A();
// console.log("After A is called")
// function b(){
// function a(){
// console.log(x);
// }
// let x  = 10 ;
// a();
// console.log(x);
// }
// let x = 20 ;
// b();

function f() {
        let a = 1 , b = 20 , c;
        console.log(a + " "+ b + " "+ c); //1  20 undefined

        function g() {
        let b = 300 , c = 4000 ;
        console.log(a + " "+ b + " "+ c); //1 300 4000
        a = a + b + c;//4301
        console.log(a +" "+ b + " "+ c); //4301  300 4000
        }

        console.log(a +" "+ b + " "+ c); // 1 20 undefined 
        g();
        console.log(a +" "+ b + " "+ c); // 4301  20 unde
}
let x =f();
