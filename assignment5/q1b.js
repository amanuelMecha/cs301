function checkPrime(n){
    let count = 0;
        for(let i=2;i<n;i++){
            if(n%i === 0){
                count++;
            }
        }
        console.log(count === 0);
    }
   
    function input(){
        let prompt = require('prompt-sync')();
        let number = parseFloat(prompt("Enter a number :"));

        checkPrime(number);
    }
    input();
