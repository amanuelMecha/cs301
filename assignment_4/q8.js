let prompt = require('prompt-sync')();
function numberGuessGame() {
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
}
else if (guess > answer) {
message = guess +
" is too high. Please enter another integer.";
}
} while (guess != answer);
message = guess + " is correct!";
console.log(message);
}
numberGuessGame();