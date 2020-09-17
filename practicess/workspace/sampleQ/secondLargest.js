function second(arr){
    let max1 =0;
    let max2 =0;
for(let i=0;i<arr.length;i++){
    if(arr[i]>max1){
        max2 =max1;
        max1 =arr[i];
    }else if (arr[i] !== max1 && arr[i]>max2 ){
        max2 =arr[i];
    }
}
return max2;
}
console.log(second([1,1,1,1,1]));

// function sum(arr){
//     let even =0;
//     let odd= 0;
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]%2===0){ 
//             even += arr[i];
//         }else {
//             odd += arr[i];
//         }
//     }
//     return  odd -even;
// }

// console.log(sum([3,3,4,4]));
// function string(arr){
//     let x = arr.length;
//     //arr.toLowerCase();
//     for(let i=0;i<x/2;i++){
//         if(arr[i] !== arr[x-1-i]){
//             return false;
//         }
//     }
//     return true;
// console.log(x);
// }
// console.log(string("amama"))

// function string(arr,x,y){
//     let string =arr.split(" ");
//     string.to
//     let output =[];
//     for(let i=0;i<string.length;i++){        
//     if(string[i] === x){
//         output.push(y);
//     }else {
//         output.push(string[i]);
//     }
//     }
//     return output.join(" ");

// }

// console.log(string(("He is my best and he is my friend too"),"he","she"));

// let title = " best of lucK  ";
// let r =""
// for(let i=title.length-1;i>=0;i--){
//     r += title[i];
// }()
// console.log(title.replace("of","Off"))
// console.log(title.trim(title.replace("of","Off")));


