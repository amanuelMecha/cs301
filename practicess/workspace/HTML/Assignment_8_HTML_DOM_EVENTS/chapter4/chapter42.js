'use strict'
function applyScripture() {
    let name = document.getElementById('nameInputBox').value;
    let scripture = `I ${name}  , having been born of goodly parents, therefore I was taught somewhat
     in all the learning of my father.`;
    document.getElementById('outputDiv').innerHTML = scripture;
}