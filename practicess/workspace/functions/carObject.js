let car={
    make: "Toyota",
    model: "Corolla",
    year: 2018,
    odometer: 60000,
    serviceCount: 10,
    service:function(){return this.serviceCount++;},
    getOdometer: function(){return this.odometer;},
    reset: function(){let x = 0 ; y=0; return [x,y];}
}

console.log(car.year);
console.log(car.service())
console.log(car.reset())