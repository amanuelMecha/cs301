let input = require('prompt-sync')();
let students = parseFloat(input("Number of students: "));
let team = parseFloat(input ("Number of teams: "));
if(students%team ===0){
    console.log(team +" teams " + students/team +" members")
}
else {
    for(let i=1;i<=students;i++){
        for(let j=1;j<=team;j++){
            if(((team-j)*i+j*(i-1))=== students){
            console.log((team-j)+" teams "+ i +" members and "+ j + " teams with "+ (i-1)+ " members");
        }
    }
}
}
