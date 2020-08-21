function getFibonacci(num) {
    let output = "";
    let oldnumber = -1;
    let newnumber = 1;
    for (let i= 0; i < num; i++) {
    let prevoldnumber = newnumber
    newnumber = oldnumber + newnumber
    oldnumber = prevoldnumber
    output = output + newnumber + ' '
    }
    return output
    }
    
    console.log(getFibonacci(25));