function findSumOfDigits(n){    
    let sum =0;       
    while(n>0){
        let y = n%10;
         n = Math.floor(n/10);
         sum +=y;
    }
    return sum;
}

let arr =[25,3,123,45];
console.log(arr.map(n =>findSumOfDigits(n)))