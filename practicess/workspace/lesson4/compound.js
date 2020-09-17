let input  = require('prompt-sync')();
let balance;
let annualRate;
let numMonths;
let monthlyRate;
function futureValue() {
     balance = parseFloat(input("balance : "));
    annualRate = parseFloat(input("annuealRate: "));
    numMonths = parseInt(input("Number of months"));
    monthlyRate = annualRate / 12;
    // For each month, compute the interest and add it to the for (var month = 1; month <= numMonths; month++
    // Compute the interest for a month.
    let interest = balance * monthlyRate;
    // Round the interest to pennies.
    interest = Math.round(interest * 100) / 100;
    // Add the interest to the balance.
    balance += interest;
    }
    futureValue();
    console.log("Your balance after " + numMonths + " months will be" + balance);
    // Display the resulting balance for the user to see.
    
    
    
   