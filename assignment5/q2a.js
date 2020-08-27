// C = 5/9 x (F - 32)

function farhToCels(fahrenheit){
    let c;
    c = (5/9)*(fahrenheit-32);
    return c;
}
console.log(farhToCels(110));