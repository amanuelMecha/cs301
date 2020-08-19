let input = require('prompt-sync')();
let cost_house = (parseFloat(input("What is the cost of the house: "))).toFixed(2);
let down_payment;


if(cost_house <= 49999.99){
  down_payment= 0.05*cost_house;
}
else if(cost_house <= 99999.99){
    down_payment= 2000+ (.1*(cost_house-50000));
}
else if(cost_house <= 199999.99){
    down_payment = 7500 +(.2*(cost_house-100000));
}
else{
    down_payment = 27500+ (.25*(cost_house - 200000));
}
console.log(down_payment);
