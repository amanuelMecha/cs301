function sumOddIndicesValues(arr){
    let sum=0;
    for(let i=1;i<arr.length;i+=2){
        sum +=arr[i]
    }
    return sum;
}

let output = sumOddIndicesValues([1,3,4,6,4,7,2]) 
console.log(output)