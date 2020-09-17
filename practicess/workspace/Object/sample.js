// let students = {
//     name: "Amanuel",
//     age: 30,
//     course_completed : ["cs301","cs303"],
//     is_accelerated: true,
//     get_courseCompleted : function(){return this.course_completed.length}
// }

// console.log(students.name);
// console.log(students.course_completed[1]);
// students.course_completed[2]= "computer";
// console.log(students.course_completed);
// console.log(students.get_courseCompleted());

//make , model , year , odometer,serviceCount
let car={
    make: "Toyota",
    model: "Corolla",
    year : 2018,
    odometer: 60000,
    sericeCount: 10,
    service : function(){return this.sericeCount +1;},
    getOdometerReading: function(){ return this.odometer},
    reset: function(){ let x = this.odometer =0 ;let y =this.sericeCount=0;return x+ "  "+y;  }
}
console.log(car.odometer);
console.log(car.service());
console.log(car.reset());
console.log(car.sericeCount);