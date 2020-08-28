'use strict';
let days = [1,2,3,4,5,6,7,8,9,10,11,12];
let gifts = ["a partridge in a pear tree","turtle doves","French hens","calling birds","golden rings","geese a laying","swans a swimming","maids a milking","ladies dancing",
"lords a leaping","pipers piping","drummers drumming"];
let input =require('prompt-sync')();
let day = parseInt(input("Enter an integer b/n 1 to 12: "));
let x =day-1;

function christmassGift(){
    let z=[];
    for(let i=x; i>=0;i--){
        z.push(gifts[i]);
    }

        return ("my true love gave to me :" + z.join(","));
}
console.log(christmassGift());