'use strict'
function concat() {
    let fn = document.getElementById('fname').value;
    let ln = document.getElementById('lname').value;
    let age_person = document.getElementById('ag').value;
    let state_person = document.getElementById('st').value;
    let departm = document.getElementById('dt').value;
    let fullAddress = fn + " " + ln + " " + age_person + " " + state_person + " " + departm;
    document.getElementById('output').innerHTML = fullAddress;
}