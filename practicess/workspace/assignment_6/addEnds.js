'use strict';
function addEnds(list) {
           return list[0] + list[list.length - 1];  

}

let list = [17, 8, 9, 5, 20, 8000];
let value = addEnds(list);
console.log(value);