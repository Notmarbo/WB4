"use strict";

let emp1 = {
    employeeId:"1",
    name:"Marco",
    jobTitle:"Software Engineer",
    payRate:"50"
};

let emp2 = {
    employeeId:"2",
    name: "Joe",
    jobTitle:"Software Engineer",
    payRate:"23"
};
let emp3 = {
    employeeId:"3",
    name: "Jared",
    jobTitle:"Software Engineer",
    payRate:"23"
};
//more common(dot notation)
console.log("The name of the employee is " + emp1.name);
console.log("The name of the employee is " + emp2.name);
//less common(subscript notation)
console.log("The name of the employee is " + emp3["name"]);