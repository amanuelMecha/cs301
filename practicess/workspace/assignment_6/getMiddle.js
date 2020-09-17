'use strict';
function getMiddle(list) {
    if (list.length % 2 === 0) {
        return (((list[list.length / 2 - 1]) + (list[list.length / 2])) / 2);
    } else {
        return list[Math.floor(list.length / 2)];
    }
}


//let list = [12, 4, 8, 15, 17, 5, 20, 11];
let list = [17, 8, 9, 5, 20];
let value = getMiddle(list);

console.log(value);