'use strict';
function rotateRight(list) {
    let rigth = [];
    let y = [list[(list.length) - 1]];
    let j = 0;
    for (let i = 0; i < list.length - 1; i++) {
        rigth[j] = list[i];
        j++;
    }
    return y.concat(rigth);

}

let list = [17, 8, 9, 5, 20];
console.log(rotateRight(list));