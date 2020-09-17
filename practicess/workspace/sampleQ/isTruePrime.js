function isTruePrim(arr){
    console.log(arr);
    let count=0;
    for(let i=1;i<arr.length;i=i+2){
        for(let j=2;j<arr[i];j++){
            if((arr[i])%j === 0){
                count++;
                j++;
            }
        }        
    }
    return count === 0;
}
console.log(isTruePrim([2,7,6,9]));