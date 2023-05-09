"use strict";

 function myFamily(){
    let  family = ["marco","gabby","patrick","kyle"];
    return family
 }

 function displayFamily(myFamily){
    let familyNumb = myFamily.length;
    for(let i = 0; i < familyNumb; i++) {
        console.log(myFamily[i])
    }
 }

 let myFamily1 = myFamily();
 displayFamily(myFamily1)