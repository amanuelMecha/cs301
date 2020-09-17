let input =require('prompt-sync')();
let name = input("What is your name: ");
let credits = input("Please enter the number of credits completed: ");
let year;
if(credits < 30){
    year = "freshman";
}
else if(credits < 60){
    year ="sophomore";
}
else if (credits < 90){
    year = "junior";
}
else {
    year =" senior";
}

console.log(name + year);