// // // // // let input = require('prompt-sync')();
// // // // // let radius = parseFloat(input("Enter radius: "));
// // // // // let height = parseFloat(input("Enter height: "));

// // // // // let v = Math.PI*radius*height*2;

// // // // // console.log(v);

// // // // let x = 1; 
// // // // let y = '2'; 
// // // // let z = true; 
// // // // let s = x + y; 
// // // // console.log(s) // output? 
// // // // console.log(typeof s) // output? 
// // // // x = x + z; 
// // // // console.log(x) // output? 
// // // // console.log(typeof x) // output? 
// // // // y = x++ * y; 
// // // // console.log(x); // output? 
// // // // console.log(typeof x); // output? 
// // // // s = parseInt(s);
// // // //  s+='3'; 
// // // // console.log(s); // output? 
// // // // console.log(typeof s); // output? 
// // // // z= !z; console.log(z); // output? 
// // // // console.log(typeof z); // output?

// // // let x = 0; x++;
// // //  console.log(x); 
// // //  ++x; 
// // //  console.log(x); 
// // //  console.log(++x); 
// // //  console.log(x); 
// // //  console.log(x++); 
// // //  console.log(x);

// // let x = 5; 
// // let y = 7+''; 
// // let z = x+y;
// // console.log(typeof z);

// // let x= 0;
// //  let y;
// //   let z = x || "Hi";
// //    console.log(z); 
// //    let w = y || 5;
// //     console.log(w);

// for(let count =1; count<=10; count++){ console.log(count); } 
// console.log(count); 

let input = require('prompt-sync')();

let x = parseFloat(input("Enter Number: "));

while(x<=10){
      
    console.log(x);
  x++;
}
console.log(x);


