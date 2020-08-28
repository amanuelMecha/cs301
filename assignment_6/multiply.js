'use strict';
function multiply(list,multiplier){
let output=[];
    for(let i=0;i<list.length;i++){
        output.push(list[i]*multiplier);
    }
    return output;
}

let list =[17,8,9,5,20,80];
let products = multiply(list,3);
console.log(products);
//console.log(list.map(n=>n*3));