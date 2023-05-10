"use strict";

let academyMembers = [
    {
    memID: 101,
    name: "Bob Brown",
    films: ["Bob I", "Bob II", "Bob III", "Bob IV"]
    },
    {
    memID: 142,
    name: "Sallie Smith",
    films: ["A Good Day", "A Better Day"]
    },
    {
    memID: 187,
    name: "Fred Flanders",
    films: ["Who is Fred?", "Where is Fred?",
    "What is Fred?", "Why Fred?"]
    },
    {
    memID: 203,
    name: "Bobbie Boots",
    films: ["Walking Boots", "Hiking Boots",
    "Cowboy Boots"]
    },
   ];

 // Who is the Academy Member whose ID is 187?
let memberHeadCount = academyMembers.length;
   function findMemberByMemberList(academyMembers, memID){
    for(let i = 0; i < memberHeadCount; i++){
        if(academyMembers[i].memID == memID){
            return academyMembers[i]
        }
    }
  }
 let member187 = findMemberByMemberList(academyMembers, 187);
 console.log(member187.name);
// Who has have been in at least 3 films?
console.log("-----------------------------------")
  let filmStarred =[]
for(let i = 0; i < memberHeadCount; i++){
    if(academyMembers[i].films.length >= 3){
        filmStarred.push(academyMembers[i].name)
    }
}
let filmCount = filmStarred.length;
for(let i = 0; i < filmCount; i++){
    console.log(filmStarred[i])
}
// Who has a name that starts with "Bob"?
console.log("----------------------------------")
let namedBob = [];
for(let i = 0; i < memberHeadCount; i++){
    if(academyMembers[i].name.startsWith("Bob"))
    namedBob.push(academyMembers[i].name)
}

let boblist = namedBob.length;
for(let i = 0; i < boblist; i++){
    console.log(namedBob[i])
}
// HARDER: Which Academy Members have been in a film

// that starts with "A"
   