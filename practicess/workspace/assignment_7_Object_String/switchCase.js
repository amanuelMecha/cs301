'use strict'
function switchCase(s) {
    let lower = "abcdefghijklmnopqrstuvwxyz";
    let output = "";
    for (let i = 0; i < s.length; i++) {
        let c = s[i];
        if (lower.indexOf(c) !== -1) {
            output += c.toUpperCase();
        } else {
            output += c.toLowerCase();
        }
    }
    return output;
}
let result = switchCase("Catch 22 ");
    console.log(result);