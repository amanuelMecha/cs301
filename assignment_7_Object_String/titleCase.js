'use strict';
function titleCase(s) {
    let c = s[0].toUpperCase();
    let arr = "";
    for (let i = 1; i < s.length; i++) {
        arr += s[i];
    }
    let output = c.concat(arr);
    return output;
}
let result =titleCase("rakesh");
console.log(result);