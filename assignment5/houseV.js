'use strict';
let houseV;
let livingSpaceV;
let area;
let roofV;
function doInputOutput() {
    let input = require('prompt-sync')();
    let n1 = parseFloat(input("Enter  your first number :"));
    let n2 = parseFloat(input("Enter your second number :"));
    let n3 = parseFloat(input("Enter  your third number :"));
    let n4 = parseFloat(input("Enter  your fourth number :"));
    //console.log(n1,n2,n3n)
    houseVolume(n1, n2, n3, n4);
}
function houseVolume(width, depth, height, sweep) {

    livingVolume(width, depth, height);
    roofVolume(width, depth, sweep);

    houseV = livingSpaceV + roofV;
    console.log(houseV);
}
function livingVolume(width, depth, height) {
    livingSpaceV = width * depth * height;
    return livingSpaceV;
}

function roofVolume(width, depth, sweep) {
    triangleArea(width, depth, sweep);
    roofV = (area * width);
    return roofV;
}
function triangleArea(a, b, c) {
    let s = (a + b + c) / 2;
    area = Math.sqrt((s * (s - a) * (s - b) * (s - c)));

    return area;
}

doInputOutput();   