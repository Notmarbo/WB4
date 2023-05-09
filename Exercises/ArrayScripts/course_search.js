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
function findCourseByCourseId(courses, courseId) {
    
    let courseCount = courses.length;

    for (let i = 0; i < courseCount; i++) {
        if (courses[i].CourseId == courseId) {
            return courses[i]
        }
    }

    return undefined; //return this if we could not find it...

}

let courseWithIdPROG200 = findCourseByCourseId(courses, "PROG200");
console.log(courseWithIdPROG200.StartDate)


// let times = timeFinder(courses, "11/22/22");
// let timeNum = times.length;
// for (let i = 0; i < timeNum; i++) {
//     console.log(times[i].item + times + times[i])
// }

// What is the title of the PROJ500 course?
let courseWithIdPROG500 = findCourseByCourseId(courses, "PROG500");
console.log(courseWithIdPROG500.Title);

// What are the titles of the courses that cost $50 or less?


// What classes meet in "Classroom 1"?