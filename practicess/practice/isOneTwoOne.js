// function isOneTwoOne(arr){
//     let count=0;
//     if(arr[0]===1 && arr[arr.length-1]===1){
//         for(let i=1;i<arr.length-1;i++){
//             if(arr[i] !==2){
//                 count++;
//             }
//         }
//     }
//     return count ===0;
// }


// let output = isOneTwoOne([1,2,2,2,3,3,1])

// console.log(output)

function findMin(x,y,z){
    let output;
    if(x<=y && x<=z){
            output=x
    }else if(y<=x && y<=z){
        output =y;
    }else {
        output =z
    }
    return output 
}
console.log(findMin(3,3,6))