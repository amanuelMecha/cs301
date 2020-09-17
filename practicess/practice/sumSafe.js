function sumSafe(arr){
    let sum =0;
    for(let i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    return sum;
}
function check(arr){
    let output =true;
    if(arr.length===0){
        output=false;
    }
    let x =sumSafe(arr);
    for(let n of arr){
        if(n===x){
            output=false;
            break;
        }
    }
    return output;
}

let y =[-1,2,1]
let z=check(y)
console.log(z)


console.log([1,-2,-3,-4,8].map(n=>Math.abs(n)))
let zz= ["this","hi_there","hello_aman","peace"]

console.log(zz.filter(n=>n.indexOf("_")===-1))
console.log(zz.filter(m=>!m.includes("_")))


