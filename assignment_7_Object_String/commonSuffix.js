'use strict';
function suffix(x, y) {
    let output = []
    let count = 0;
    let j = y.length - 1;
    for (let i = x.length - 1; i >= 0; i--) {
        if (x[i] === y[j]) {
            output.push(x[i]);
            j--;
        }
    }

    return output.reverse().join("");
}
let output = suffix("swimming", "walking");
console.log(output);