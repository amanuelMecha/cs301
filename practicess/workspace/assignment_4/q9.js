let input = require('prompt-sync')();
let n = parseFloat(input("Enter a number: "));

for(let i=1; i<=n;i++){
    console.log( i+"\t"+ i*2 +"\t" + i*3 +"\t" + i*i +"\t" + i*i*i );
    
}