'use strict';
function extractGivenName(fullName) {
    let space = fullName.indexOf(' ');
    let givenName = fullName.substring(space);
    let trimGivenName = givenName.trim(); // to remove the ending and starting space
    return trimGivenName;
}
let output =extractGivenName('Mecha, Amanuel');

console.log(output);

