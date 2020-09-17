'use strict';
function prefix(x, y) {
    let output = "";
    let j=0;
    for (let i = 0; i < x.length; i++) {
        if (y[j] === x[i]) {
            output += y[j];
            j++;
        }
    }
    return output;
}
let result =prefix("disaaable", "distasteful")
console.log(result);