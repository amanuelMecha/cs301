function countVowel(str){
let count =0;
let Vowel="aeiou";
str.toLowerCase();

for(let i=0;i<str.length;i++){
        let v = str[i];
        if(Vowel.indexOf(v) !== -1){
            count++;
        }

    }
    return count;
}
console.log(countVowel("hi there, how are you"));
console.log(countVowel("i am,  fine"));