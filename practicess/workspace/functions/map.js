let words =["apple","ball","cat"];

// function mapA(arr){
//     let output=[];
//     for(let i=0;i<arr.length;i++){
//             output[i]=arr[i].length;
//     }
//     return output;
// }
// console.log(mapA(words));


// let lengthw =words.map(n=>n.length);
// console.log(lengthw)

const arr1 = [ 1, 3, 4, 5, 6, -7, 8, 9, -10,10]
// const reducer = (accumulator, currentValue )=> accumulator * currentValue;
// const arr_sum = arr1.reduce(reducer); 
   // console.log(arr_sum);
   //const newArr = arr1.sort((a,b) => a-b);
   const neew =arr1.filter(a => a>=0);
   console.log(neew);


// function mult(arr){
//     let mul =1;
// for(let i=0;i<arr.length;i++){
//     mul *=arr[i];
// }
// return mul;
// }
// console.log(mult(arr1));
