
// function A(){
// console.log("A is called"); //1
// console.log("Before B is called"); //2
// B();
// console.log("After B is called");//7
// }
// function B(){
// console.log("B is called"); //3
// console.log("Before C is called");//4
// C();
// console.log("After C is called");//6
// }
// function C(){
// console.log("C is called");//5
// }
// A();
// console.log("After A is called");//8
function funA(a,n){
    let something;
    something = "something";
    funB(something ,n);
}

function funB(a,b){
    let thing;
    thing = "a thing";
    console.log("What is on the stack ")
}

function main(){

    let test;
    let n;
    test = "Hello";
    n = 5;
    funA(n , 10);
}
main();