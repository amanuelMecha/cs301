//[2,3, -1,-4,3,2,1]
function findMin(arr){
    let min =arr[0];
    for(let i=1;i<arr.length;i++){
        if(min>arr[i]){
            min=arr[i]
        }
    }
    return min;
}

let output =findMin([2,3, -1,-4,3,2,1])
console.log(output)