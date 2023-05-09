"use strict";


let students = [
    {name: "Zephaniah", scores: [100, 96, 99, 92]},
    {name: "Pursalane", scores: [92, 89, 96, 100, 94]},
    {name: "Siddalee", scores: [86, 72, 92]},
    {name: "Ian", scores: [98, 84, 89, 100, 100, 76]},
    {name: "Elisha", scores: [89, 100]},
    {name: "Ezra", scores: [100, 99, 100, 87]}
   ];
   let studentCount = students.length

   for(let indexOfStudent = 0; indexOfStudent < studentCount; indexOfStudent++) {
  
    let scoresCount = students[indexOfStudent].scores.length;

    let sumOfStudentScores = 0;
    let maxOfStudentScores = 0;
    let minOfStudentScores = 100;

    for(let indexOfScore = 0; indexOfScore < scoresCount; indexOfScore++){
        sumOfStudentScores += students[indexOfStudent].scores[indexOfScore];
        if(students[indexOfStudent].scores[indexOfScore] > maxOfStudentScores){
            maxOfStudentScores = students[indexOfStudent].scores[indexOfScore];
        }
        if(students[indexOfStudent].scores[indexOfScore] < minOfStudentScores){
            minOfStudentScores = students[indexOfScore].scores[indexOfScore];
        }
        
    }
    let averageScore = sumOfStudentScores / scoresCount;
    
    console.log(`The student name ${students[indexOfStudent].name} has an average score of ${averageScore}`)
}