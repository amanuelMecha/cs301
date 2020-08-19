let input = require('prompt-sync')();
let weather = input("What is weather outside : ");
weather = weather.toLowerCase();
let foot_wear;

if (weather === "hot"){
    foot_wear = "sandals";
}
else if(weather === "rain"){
    foot_wear = "galoshes";
}
else if(weather === "snow"){
    foot_wear ="boots";
}
else {
    foot_wear = "shoes";
}
console.log(foot_wear);


