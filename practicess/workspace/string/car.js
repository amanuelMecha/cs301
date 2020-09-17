let car={
    make: "Toyota",
    model: "Corolla",
    year : 2018,
    odometer: 60000,
    sericeCount: 10,
    service : function(){return this.sericeCount++;},
    getOdometerReading: function(){ return this.odometer},
    reset: function(){ let x = this.odometer =0 ;let y =this.sericeCount=0;return x+ "  "+y;  }
}
//console.log(car.odometer);
console.log(car.service());
//console.log(car.reset());
//console.log(car.sericeCount);