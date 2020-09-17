const arr = [1,4,2,3,7,8,8,9,12,3];

// function oddNumber(arr){
//     let temp_arr=[];
//     for(let i=0;i<arr.length;i++){
        
//             temp_arr[i]=(arr[i]%2 !==0)
        
//     }
//     return temp_arr;
// }
// console.log(oddNumber(arr));

function oddNumber(arr){
    let temp_arr=[];
    let j=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2 !==0){
            temp_arr[j]=arr[i];
            j =j+1;
        }
    }
    return temp_arr;
}
console.log(oddNumber(arr));