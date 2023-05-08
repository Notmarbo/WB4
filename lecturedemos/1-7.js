"use strict";
let employeeName = "Ezra";
let jobTitle = "teacher";
let emoployeePayRate = 19.99;

function DisplayEmployeeInfo(name,jobTitle,payRate){
    console.log(name + jobTitle + payRate)
}
DisplayEmployeeInfo(employeeName, jobTitle, emoployeePayRate);

let emp3 = { 
    name: "marco",
    jobTItle: "software Engineer",
    payRate: "50"
}
function DisplayEmployeeInfo(employee){
    console.log(employee.name, employee.jobTItle, payRate)
}