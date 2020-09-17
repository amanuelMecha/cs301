// let arr=[1,3,4,6,4,7,2];
// function sumOddIndicesValues(arr){
//     let sum =0;
//     for(let i=1;i<arr.length;i=i+2){
//         sum += arr[i];
//     }
//     return sum;
// }
// console.log(sumOddIndicesValues(arr))

// function sumArrays(arr,num){
//     let sum =[];
//     for(let i=0;i<arr.length;i++){
//         sum.push(arr[i]+num[i]);

//     }
//     return sum;
// }
// let x =[1,2,3,4,5] ,y= [5,4,3,2,1]
// console.log(sumArrays(x,y));



// Input
// Result Array
// let arr = ["Bye", "Hello", "Hi", "Test", "Ho", "he"];
// ["Bye", "Hello", "invlaid", "Test", "invlaid", "invlaid"],
// Return value will be 3
// function test(arr){
//     let y= arr;
//     let x=[];
//     let z =["invalid"]
//     for(let i=0;i<y.length; y++){
//     if(y[0] === 'h'  && y.length<3){        
//             x.push("invalid");        
//     }else{
//         x.push(y[i]);
//     }}
//     return x;
// }
// console.log(test(arr));

// function testPrime(arr){
//     let isPrime=true;
//     for(let i=2;i<arr;i++){
//         if(arr%i === 0){
//             isPrime=false;
//             break;
//         }
//     }
//     return isPrime;
// }

// let input =require('prompt-sync')();
// let n = parseFloat(input("Enter a number: "))
// console.log(testPrime(n))
let str =["this", "that", "Hi_there", "How_are_you"]
console.log(str.filter(f=> f.indexOf("_") ===-1 ));




