"use strict";

function getMealCost(orders) {
    let sum = 0;
    let orderNum = orders.length
    for (let i = 0; i < orderNum; i++) {
        sum += orders[i].price;
    }
    return sum;
}



let lunch = [
    { item: "Steak Fajitas", price: 9.95 },
    { item: "Chips and Guacamole", price: 5.25 },
    { item: "Sweet Tea", price: 2.79 }
];


let mealCost = getMealCost(lunch);
let totalWithTip = mealCost * .18;
let totalWithTax = mealCost * .08;
let grandTotal = totalWithTax + totalWithTip + mealCost;
console.log(`your subtotal is ${mealCost.toFixed(2)} adding your tip amount which is ${totalWithTip.toFixed(2)} as well as taxs ${totalWithTax.toFixed(2)} your grandtotal will be ${grandTotal.toFixed(2)}`)
