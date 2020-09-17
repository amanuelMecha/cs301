// function testPrime(n){
//     let count =0;
//     for(let i=2;i<n;i++){
//         if(n%i ===0){
//             count++;
//         }
//     }
//     return count ===0;
// }
// let x =[1,2,4,5,7,8]
// console.log(x.map(n=>testPrime(n)));
// function isEven(arr,num,x){  
//     let output=[];  
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]===num){
//             for(let j=0;j<x;j++){
//                     output.push(arr[i]);
//             }
//         }else{
//             output.push(arr[i])
//         }
//     }
//     return output
// }
// console.log(isEven([1,2,4,5,0,0,6,9,8,0,7],4,2))

// function sum(n){
//     let summ=0;
//     while(n>=0){
//         summ+=n;
//         n--;
//     }
//     return summ;
// }
// console.log(sum(5))

// function secondMax(arr){
//     let x=0; y=0
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]%2 !==0){
//             x+=arr[i]
//         }else {
//             y +=arr[i]
//         }
        
//     }
//     return x-y;
// }
// console.log(secondMax([1,2,3,4,7,9,6]))
// console.log(secondMax([11,2,33,4,79,9,6]))
// console.log(secondMax([1,1,1,1]))
// function isDual(arr){
//     let x =arr[0]+arr[1]
//     if(arr.length===0){return 1}
//     if(arr.length%2 ===0){
//         for(let i=2;i<arr.length;i+=2){
//             if((arr[i]+arr[i+1])===x){
//                 return 1
//             }
//         }
//     }
//     return 0;
// }
// console.log(isDual([1,2,3,0]))
// console.log(isDual([1,2,2,1,3,0]))
// console.log(isDual([1,1,2,2]))
// console.log(isDual([1,2,1]))
// console.log(isDual([]))
// {1, 2, 3, 0} 1 (because 1+2 == 3+0 == 3)
// {1, 2, 2, 1, 3, 0} 1 (because 1+2 == 2+1 == 3+0 == 3)
// {1, 1, 2, 2} 0 (because 1+1 == 2 != 2+2)
// {1, 2, 1} 0 (because array does not have an even number of elements)
// {} 1

// function rand(){
//     let x =[];
//     for(let i=0;i<10;i++){
//         x.push(Math.floorMath.random()*10);
//     }
//     return x;
// }
// console.log(rand())
console.log( [1,11,3,14,6,23,9,5].sort((a,b) =>   a-b))
console.log(["apple", "ball", "cat"].map(n => n.length))


function array(arr){
    let count=[];
    for(let n of arr){
        count.push(n.length)

    }
    return count;
}
console.log(array(["apple", "ball", "catr"]))


console.log([1,2,-1,3,-2,5,6].filter(n => n>=0))
const myStr = "Hello world";
for(let s of myStr){
console.log(s);
}







