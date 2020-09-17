/* eslint-disable */
let addTo = function(passed){

    let add =function(inner){
        return passed + inner;
    };
    return add;

};

let x =addTo(5);
console.log(x(5))
// let addThree = addTo(4)
// console.log(addThree(2))