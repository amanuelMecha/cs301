function findSumOfDigits(n){
    let sum="";
    while(n>0){
        let y = n%10;
        n=Math.floor(n/10);
        sum +=y;
    }
    return sum;
} 
console.log(findSumOfDigits(32131))
console.log(findSumOfDigits(90132))

console.log([25,3,123,45].map(e=>findSumOfDigits(e)));