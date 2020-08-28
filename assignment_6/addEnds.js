'use strict';
function addEnds(list) {
    for (let i = 0; i < list.length; i++) {
        return list[i] + list[list.length - 1];
    }

}

let list = [17, 8, 9, 5, 20,8000];
let value = addEnds(list);
console.log(value);