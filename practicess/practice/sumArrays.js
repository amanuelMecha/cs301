function sumArrays(arr1,arr2){
    let output =[]

    for(let i=0;i<arr1.length;i++){
        output.push(arr1[i]+arr2[i])
    }

    return output;
}
let x = sumArrays([1,2,3,4,5] , [5,4,3,2,1])
console.log(x)