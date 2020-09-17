// function y(){
//     let prompt= require('prompt-sync')();
// let input = prompt("Eneter words having comma separator :");
//     let grrek='the first \u03b1 \u03b2 \u03b3'
//     console.log(grrek)

// console.log(input.replace(/for/g,"4"));
// }
// y();
function mac(){
    let x =100;
    let c =0;
    while(x<=103){
        x = .005*x+x;
        c++;
    }
    return c;
}
console.log(mac());