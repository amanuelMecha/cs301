let prompt = require('prompt-sync')();
function numberGuessGame() {
    var count =1;
    var message =
    "I'm thinking of a number between 1 and 100.\n" +
    "Try to guess it!\n" +
    "Please enter an integer between 1 and 100.";
    var answer = 38;
    var guess;
    do {
    guess = parseInt(prompt(message));
    if (guess < answer) {
    message = guess +
    " is too low. Please enter another integer";
    count ++;
}
else if (guess > answer) {
message = guess +
" is too high. Please enter another integer.";
count ++;
}
} while (guess != answer);
message = guess + " is correct!";
console.log(message);
console.log(count ++);
}
numberGuessGame();
//console.log(numberGuessGame()(count));