/* eslint-disable */
'use strict'
function fibonacy(n){
    let i=1;let j=0; let  count=0 ;let sum=0
    while(count<n){
        console.log(sum);
        sum =i+j;
        i=j;
        j=sum ;
        count++
    }
    return sum;
    
}


let input =require('prompt-sync')()
let n = parseFloat(input("enter a number to get fibonancy:  "))
console.log(fibonacy(n))