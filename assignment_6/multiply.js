'use strict';
function multiply(list,multiplier){
let output=[];
    // for(let i=0;i<list.length;i++){                          //this one also works  
    //     output.push(list[i]*multiplier);
    // }
    for(let n of list){
        output.push(n*multiplier);
    }
    return output;
}

let list =[17,8,9,5,20,80];
let products = multiply(list,2);
console.log(products);
//console.log(list.map(n=>n*3));