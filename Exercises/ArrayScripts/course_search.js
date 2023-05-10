"use strict";

let courses = [
    {
        CourseId: "PROG100",
        Title: "Introduction to HTML/CSS/Git",
        Location: "Classroom 7",
        StartDate: "09/08/22",
        Fee: "100.00",
    },
    {
        CourseId: "PROG200",
        Title: "Introduction to JavaScript",
        Location: "Classroom 9",
        StartDate: "11/22/22",
        Fee: "350.00",
    },
    {
        CourseId: "PROG300",
        Title: "Introduction to Java",
        Location: "Classroom 1",
        StartDate: "01/09/23",
        Fee: "50.00",
    },
    {
        CourseId: "PROG400",
        Title: "Introduction to SQL and Databases",
        Location: "Classroom 7",
        StartDate: "03/16/23",
        Fee: "50.00",
    },
    {
        CourseId: "PROJ500",
        Title: "Introduction to Angular",
        Location: "Classroom 1",
        StartDate: "04/25/23",
        Fee: "50.00",
    }
];


// When does the PROG200 course start?
let courseCount = courses.length;
function findCourseByCourseId(courses, courseId) {
    

    for (let i = 0; i < courseCount; i++) {
        if (courses[i].CourseId == courseId) {
            return courses[i]
        }
    }

    return undefined; //return this if we could not find it...

}

console.log(`all of my courses are listed here:`)
for(let i = 0; i< courseCount; i++){
    console.log(courses[i])
}


let courseWithIdPROG200 = findCourseByCourseId(courses, "PROG200");
console.log(courseWithIdPROG200.StartDate)



// What is the title of the PROJ500 course?
// let courseWithIdPROG500 = findCourseByCourseId(courses, "PROG500");
// console.log(courseWithIdPROG500.Title);

// What are the titles of the courses that cost $50 or less?
let coursesThatCost50OrLess = [];
for(let i = 0; i < courseCount; i++){
    if(courses[i].Fee <= 50){
        coursesThatCost50OrLess.push(courses[i])
    }
}
let coursesThatCost50OrLessCount = coursesThatCost50OrLess.length;

    for(let i = 0; i < coursesThatCost50OrLessCount; i++){
        console.log(coursesThatCost50OrLess[i].Title)
    }

// What classes meet in "Classroom 1"?

let coursesThatMeetInC1 = [];

for(let i = 0; i < courseCount; i++){
    if(courses[i].Location =="classroom 1"){
        coursesThatMeetInC1.push(courses[i]);
    }
}
let coursesThatMeetInC1count = coursesThatMeetInC1.length;
for(let i = 0; i < coursesThatMeetInC1count; i++){
    console.log(coursesThatMeetInC1[i].Title)
}