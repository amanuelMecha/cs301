// function string(arr){
//        let count=0;
//             if((arr.startsWith("h") || (arr.startsWith("H"))&& arr.length<3)){
//             //output = "Invalid";
//             count ++
//             }         
    
//         return count
// }

// let arr= ["Bye", "Hello", "Hi", "Test", "Ho", "he"]

// // let output = arr.map(n=>string(n))
// // console.log(output.reduce((a,b)=>(a+b)))
// console.log(string(arr))
function arr(){

    let input = require('prompt-sync')()
    let str;    
        str = (input("enter any string: ").toLowerCase())
        let a = str.replace("for",4)
        return a;
   
}

console.log(arr())