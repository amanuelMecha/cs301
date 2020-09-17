// function vowel(str){
//         let arr= str.toLowerCase()
//     let count=0;
//     let v ="aeoui"
//     for(let i=0;i<arr.length;i++){        
//         if(v.indexOf(arr[i]) !== -1){
//             count++
//         }
//     }
//     return count;
// }
// console.log(vowel("Madam"))
// console.log(vowel("MadAM"))
// console.log(vowel("Hi there, how are you?"))
// console.log(vowel("racecar"))
// function perfectPrime(arr){
//     isPrime=true;
//     for(let i=0;i<arr.length;i+=2){
//         for(let j=2;j<arr[i];j++){
//             if(arr[i]%j ===0)
//             isPrime = false;
//             break;
//         }
//     }
//     return isPrime
// }
// console.log(perfectPrime([2,7,8,9]))
// function findSumOfDigits (n){
//     let sum=0;
//     while(n>0){
//         let y= n%10;
//         n = Math.floor(n/10);
//         sum +=y;
//     }
//     return sum;
// }
// console.log(findSumOfDigits(32131))

// console.log([25,3,123,45].map(n=> findSumOfDigits(n)))

// function palindrom(str){
//     let isPali=true;
//     let arr= str.toLowerCase()
//     for(let i=0;i<arr.length/2;i++){
//         if(arr[i] !== arr[arr.length-1-i]){
//             isPali = false;
//             break;
//         }
//     }
//     return isPali;
// }
// console.log(palindrom("Madam"))
// console.log(palindrom("car"))
// console.log(palindrom("Civic"))
// console.log(palindrom("apple"))
// console.log(["madam", "car", "civic", "apple"].map(n=>palindrom(n)))
//[apple, sync, ball, rhythm]

function filter(n){
    let vowel ="aeoui"
    let count=0;    
    let lower = n.toLowerCase();
    for(let i=0;i<lower.length;i++){        
        if(vowel.indexOf(lower[i]) !== -1){
                count++;
                }
    }
    //\\if(count === lower.length){
        return count
   // }           
    
}
//console.log(filter("apple"))
console.log(["apple", "sync", "ball", "rhythm"].filter(n=>filter(n)))




