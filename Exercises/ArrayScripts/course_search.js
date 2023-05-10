"use strict";

let courses = [
    {
        CourseId: "PROG100",
        Title: "HTML/CSS/Git",
        Location: "Classroom 7",
        StartDate: "09/08/22",
        Fee: "100.00",
    },
    {
        CourseId: "PROG200",
        Title: "JavaScript",
        Location: "Classroom 9",
        StartDate: "11/22/22",
        Fee: "350.00",
    },
    {
        CourseId: "PROG300",
        Title: "Java",
        Location: "Classroom 1",
        StartDate: "01/09/23",
        Fee: "50.00",
    },
    {
        CourseId: "PROG400",
        Title: "SQL and Databases",
        Location: "Classroom 7",
        StartDate: "03/16/23",
        Fee: "50.00",
    },
    {
        CourseId: "PROJ500",
        Title: "Angular",
        Location: "Classroom 1",
        StartDate: "04/25/23",
        Fee: "50.00",
    }
];


courses.sort(function (a,b) {
    let aUpper = a.toUpperCase();
    let bUpper = b.toUpperCase();
    if (aUpper < bUpper) return -1;
    else if (aUpper == bUpper) return 0;
    else return 1;
   }); // Sorts the array in a case-insensitive way
   let numCourses = courses.length;
   for(let i = 0; i < numCourses; i++) {
    console.log(courses[i].Title);
   }