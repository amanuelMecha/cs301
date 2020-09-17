let studentId= [145,5869,897,9654];

let studentName =["Abreham","Amanuel","solomonn","Hamid"];
let input = require('prompt-sync')();
let stId = parseInt(input("enter student id inorder to get the name of the student : "));
let y;
for(let i=0; i<studentId.length;i++){
    if(studentId[i]===stId){
            y=i;
    }
}

let student_name = studentName[y];
console.log(student_name);