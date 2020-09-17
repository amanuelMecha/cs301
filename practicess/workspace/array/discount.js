let limits = [300,600,100];
let rates = [0,0.02,0.025,0.03];

// function discount(purchase){
//     let z;
//     for(let i=0;i<limits.length;i++){
//         if(purchase < limits[i]){
//             z = rates[i];
//         }
//     }
//     let discountr = purchase*z;
//     return purchase -discountr;
// }

// console.log(discount(1000));
//console.log(limits.concat(rates));
//limits = ["Amanuel","zelallem","daniel"]
//console.log(limits.sort())
//console.log(limits.splice(0,1,445,787));

// console.log(limits.join("\t"));
// let x =limits.join("\t");
// console.log(x.split("\t"));

const arry = [7,10,8,16,3,35];

console.log(arry.sort((a,b) => a-b));