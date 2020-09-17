'use strict';
// function arrayReverse(arr){
//     let y=[];
//     let j=0;
//     for(let i=arr.length-1; i>=0;i--){
//         y[j]= arr[i];
//         j++;
//     }
//     return y;
// }
// let x = [1,2,3,4,5,6]
// console.log(arrayReverse(x));

//let r ="i said hi to her and ishe said hi ", "hi", "hello"
//i said hello to her an d ishe said hello

function replaceAll(a,b,c){
    let word =a.toLowerCase();
    let bLower =b.toLowerCase();
    
    let words = word.split(" ");   
    for(let i =0; i<words.length;i++){
        if(words[i]=== bLower){
            words[i]=c;
        }
    }
    return words.join(" ");
}
let output =replaceAll(" hi all All", "All","fuck");
console.log(output);