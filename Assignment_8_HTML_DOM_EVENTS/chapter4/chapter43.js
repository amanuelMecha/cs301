'use strict'
function submitAssignment() {
    let name_of_course = document.getElementById('input').value;
    let output_1 = "I submitted " + name_of_course + " ontime.";
    document.getElementById('output').innerHTML = output_1;
}