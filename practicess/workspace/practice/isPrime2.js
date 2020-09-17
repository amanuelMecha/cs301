// function testPalindrom(str){
//     let y =str.toUpperCase()

//     for(let i=0;i<y.length/2;i++){
//         if(y[i] !== y[(y.length-1-i)]){
//             return false;
//         }
//     }
//     return true;
// }

// console.log(testPalindrom("Madam"))
// console.log(testPalindrom("madAM"))
// console.log(testPalindrom("car"))

function vowel(str){   
    let v ="aeoui";
    let count=0;
    let output;
    let y = str.toLowerCase();
    for(let i=0;i<y.length;i++){
        let c=y[i];        
        if(v.indexOf(c) !==-1){
            count++;
            break;
        }
    }

if(count === 0){
    output =y;
}
    return output;
}

function filterVowal(n) {
    let NoVowal = arr.filter(n => vowel(n));
    return NoVowal;
}
let arr = ["apple", "sync", "ball", "rhythm","hhhftr"];
console.log(filterVowal(arr));