let studentId= [145,5869,897,9654];

let studentName =["Abreham","Amanuel","solomonn","Hamid"];

let input = require('prompt-sync')();
let stId = parseInt(input("enter student id inorder to get the name of the student : "));

function best(stN,stIdd){
    let y;
    for(let i=0;i<stN.length;i++){
        if(stN[i] === stIdd){
            y= i;
        }else{
            y=-1;
        }
    }
    
    if (y === -1){
        return "Not vaid student id";
    }
    return studentName[y];

}

console.log(best(studentId,stId));