"use strict";


let products = [
    {product: "Gummy Worms", price: 5.79},
    {product: "Plain M&Ms", price: 2.89},
    {product: "Peanut M&Ms", price: 2.89},
    {product: "Skittles", price: 3.79},
    {product: "Life Savers", price: 3.79},
    {product: "Jolly Rancher", price: 11.79},
    {product: "Nerd Gummy-Clusters", price: 3.49},
    {product: "Sour Patch Kids", price: 4.79},
    {product: "Kit-Kat", price: 5.98},
    {product: "Swedish Fish", price: 3.79},
    // TODO: fill the array with 10 candies of various
    // price ranges
   ];
   

   // Which candies costs less than $4.00?
   let productCount = products.length;
let cheapCandies =[];
for(let i = 0; i < productCount; i++){
    if(products[i].price <= 4){
        cheapCandies.push(products[i])
    }
}
let cheapCandiesCount = cheapCandies.length;
for(let i = 0; i < cheapCandiesCount; i++){
    console.log(cheapCandies[i].product)
}
console.log("----------------------------------------")
// Which candies has "M&M" its name?
let MAndM = [];
for(let i = 0; i < productCount; i++){
    if(products[i].product.includes("M&Ms")){
        MAndM.push(products[i])
    }
}
let MAndMCount = MAndM.length;
for(let i = 0; i < MAndMCount; i++){
    console.log(MAndM[i].product)
}
console.log("-----------------------------------------")
// Do we carry "Swedish Fish"?

for (let i = 0; i < products.length; i++) {
    if (products[i].product == "Swedish Fish") {
        console.log(`We do carry ${products[i].product}`);
    }
}

