 //const arr1 = [ 1 ,2 ,3 ,4 ,5 ,6 ,7 ,8 ,9, 10]
// const reducer = ((accumulator, currentValue ) => accumulator + currentValue);
// const arr_sum = arr1.reduce(reducer);
// console.log(arr_sum)

// function reduceArray(arr){
//     let sum =0;
//     for(i=0;i<arr.length;i++){
//         sum += arr[i];
//     }
//     return sum;
// }

// console.log(reduceArray(arr1));

// const myStr = "Hello world";
// for (let s of myStr){
//     console.log(s);
// }


// const arr1 = [ 1 ,2, 3 ,4];
// for(let n of arr1){
// console.log(n*3);}

// let mappArr =arr.map(n => Math.abs(n));
// console.log(mappArr)

const arr1 = [ 1 ,2, 3, 4]
// arr1.forEach(function(element){
//     console.log(element);  
// }
// );
//arr1.forEach(n=>console.log(n));
let sum =0;
for(let n of arr1){
    sum =sum +n;
}
console.log(sum);

