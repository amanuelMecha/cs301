'use strict';
let houseV;
let livingSpaceV;
let area;
let roofV;
function doInputOutput() {
    let input = require('prompt-sync')();
    let width = parseFloat(input("Enter  the width of the house :"));
    let depth = parseFloat(input("Enter the depth of the house :"));
    let heigth = parseFloat(input("Enter  the heigth of the house :"));
    let sweep = parseFloat(input("Enter  the sweep of the house :"));
    //console.log(n1,n2,n3n)
    let volume = houseVolume(width, depth, heigth, sweep);
    console.log(volume);
}
function houseVolume(width, depth, height, sweep) {

    livingVolume(width, depth, height);
    roofVolume(width, depth, sweep);

    houseV = livingSpaceV + roofV;
    return houseV;
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
    let s = (b + c + c) / 2;
    area = Math.sqrt((s * (s - b) * (s - c) * (s - c)));

    return area;
}

doInputOutput();   