function testPalindrome(str){
    let lower =str.toLowerCase();
    let istrue= true;
    for(let i=0;i<lower.length/2;i++){
        if(lower[i] !== (lower[lower.length-1-i])){
            istrue= false
            break;
        }
    }
    return istrue;
} 

console.log(testPalindrome("Madam"))
console.log(testPalindrome("MadAM"))
console.log(testPalindrome("car"))
console.log(testPalindrome("racecar"))
let string =["madam", "car", "civic", "apple","racecar"]
console.log(string.map(n=>testPalindrome(n)))