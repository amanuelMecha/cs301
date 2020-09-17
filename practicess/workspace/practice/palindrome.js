function testPalindrom(string){
    let y=string.toLowerCase();
    isPali=true;    
    for(let i=0;i<y.length/2;i++){
        if(y[i] !== y[y.length-1-i]){
            isPali= false;
            break;
        }
    }
    return isPali;
}

 console.log(testPalindrom("Madam"));
 console.log(testPalindrom("Amanuel"));
 console.log(testPalindrom("MadAm"));
 console.log(testPalindrom("Car"));
 console.log(testPalindrom("racecar"));
