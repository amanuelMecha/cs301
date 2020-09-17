
function sumFactor(arr){
    let sum =0, count =0;    
    for(let i=0;i<arr.length;i++){
        sum +=arr[i];
    }
    return sum;
    
}
function z(n){
    let count =0
    let arr = sumFactor(n);
    for(let x of n){
        if(arr === x){
            count++
        }
    }
    return count;
}
console.log(z([1, -1, 1, -1, 1, -1, 1]))
console.log(z([1, 2, 3, 4]))
console.log(z([]))