'use strict';
function rotateLeft(list) {
    let left = [];
    let y = [list[0]];
    let j = 0;
    for (let i = 1; i < list.length; i++) {
        left[j] = list[i];
        j++;
    }
    return left.concat(y);
}

let list = [25, 17, 8, 9, 5, 20];
console.log(rotateLeft(list));