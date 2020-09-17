function testPalindrom(string){
    let str=string.toLowerCase();  
    for(let i=0;i<str.length/2;i++){
        if(str[i] !== str[str.length-1-i]){
            return false;
        }
    }
    return true;
}
 let arr = ["madam", "car", "civic", "apple"];
 console.log(arr.map(n => testPalindrom(n)));
 

//console.log(testPalindrom("Madam"));
// console.log(testPalindrom("MadAm"));
// console.log(testPalindrom("Car"));
// console.log(testPalindrom("racecar"));
