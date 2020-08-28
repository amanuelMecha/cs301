'use strict';
function countEvens(list) {
    let count = 0;
    for (let n of list) {
        if (n % 2 === 0) {
            count++;
        }
    }
    return count;
}
let list = [17, 8, 9,100, 5, 20,48,75,104,];
console.log(countEvens(list));