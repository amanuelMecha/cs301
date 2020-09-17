function vowel(str){
    let v ="aeoui";
    let count=0;
    for(let i=0;i<str.length;i++){
        let c=str[i].toLowerCase();
        if(v.indexOf(c) !== -1){
            count++;
        }
    }
    return count;
} 
   
let output = vowel("Hi there, how are you?")
let output1 = vowel("I am fine.")
console.log(output)
console.log(output1)
// //[“apple”, “sync”, “ball”, “rhythm”]
// console.log(["apple", "sync", "ball", "rhythm"].filter(n=>!vowel(n)))
// console.log(["apple", "sy_nc", "bal_l", "rhythm"].filter(n=>n.includes("_")))