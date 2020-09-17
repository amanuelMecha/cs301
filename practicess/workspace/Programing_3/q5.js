let input = require('prompt-sync')();
let status = (input("A person's status: example students,faculty: ")).toLowerCase();
let books = parseFloat(input("Number of books kept by a person's: "));
let loan_duration;
if(status === "student"){
    if(books === 0){
        loan_duration=6;
    }
    else if(books < 3){
        loan_duration = 4;
    }
    else if(books >= 3){
        loan_duration =2;
    }

}
else if(status === "faculty"){
    if(books === 0){
        loan_duration=16;
    }
    else if(books < 3){
        loan_duration = 12;
    }
    else if(books >= 3){
        loan_duration = 8;
    }}
else {
    if(books === 0){
        loan_duration=4;
    }
    else if(books < 3){
        loan_duration = 3;
    }
    else if(books >= 3){
        loan_duration =2;
    }
}    
console.log(loan_duration);

