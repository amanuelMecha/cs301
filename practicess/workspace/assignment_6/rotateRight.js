'use strict';
function rotateRight(list) {
    // let rigth = [];
    // let y = [list[(list.length) - 1]];
    // let j = 0;
    let x =list[0]
    for (let i = 0; i < list.length; i++) {
        list[i] = list[i+1];
       // j++;
    }
    list[list.length - 1]=x
    return list;

}

let list = [17, 8, 9, 5, 20];
console.log(rotateRight(list));