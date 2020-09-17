// function isSumsafe(arr){    
//     let sum=0;
//     for(let i=0;i<arr.length;i++){
//         sum +=arr[i];
//     }
// return sum;
// }
// function sumn(arr){  
// let y = isSumsafe(arr)
//     for(let n of arr){
//         if(y === n){
//             return false;           
//         }
//     }
//     return true;
// }
// console.log(sumn([5,-3,20]))
// // //console.log(isSumsafe([]))
// function oneTwoOne(arr){
//     let output=0;
//     if(arr[0] ===1  && arr[arr.length-1]===1){        
//         for(let i=1;i<arr.length-1;i++){
//             if(arr[i] ===2){
//                 output ++;                
//             }
//         }
//     }
//     return output===(arr.length-2);
// }
// console.log(oneTwoOne([1,2,2,1]))
// console.log(oneTwoOne([1,2,2,2,2,2]))
// console.log(oneTwoOne([1,2,2,3,2,1]))
// console.log(oneTwoOne([]))


//console.log(Math.min(60, -4, 20));

function check(x,y,z){
    if(x<=y && x<=z){
        return x;
    }else if(y<=x && y<=z){
        return y;
    }else{
        return z
    }
}
console.log(check(-19,-19,-4))

// console.log(["this","that","Hi_there","How_are_you"].filter(n=>n.indexOf("_")===-1))
// console.log(["this","that","Hi_there","How_are_you"].filter(n=>!n.includes("_")))
//["this","that","Hi_there","How_are_you"].filter(n=>n.indexOf("_")===-1)