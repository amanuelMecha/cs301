let input = require('prompt-sync')();
let age = parseFloat(input("a child's age: "));
let season = (input("season: ")).toLowerCase();
let bed_time;
if(age<=5){
    if(season === "summer" || season === "fall"){
        bed_time = "8:30 p.m.";
    }
    else if(season === "winter" || season === "spring"){
        bed_time= "8:00 p.m."
    }
}
else if(age <= 12){
    if(season === "summer" ){
        bed_time = "9:30 p.m.";
    }
    else if(season === "winter" || season === "spring" || season === "fall"){
        bed_time= "8:30 p.m."
    }
}
else {
    if(season === "summer" ){
        bed_time = "10:30 p.m.";
    }
    else if(season === "winter" || season === "spring" || season === "fall"){
        bed_time= "9:30 p.m."
    }
}
console.log(bed_time);
