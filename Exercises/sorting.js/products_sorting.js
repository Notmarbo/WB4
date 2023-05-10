"use strict";

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
   ];
   
   function orderByProduct(a,b){
    if(a.product < b.product)return -1;
    else if (a.Title == b.Title)return 0;
    else return 1;
 }
 
 products.sort(orderByProduct);
 
 let  numProduct = products.length;
 for(let i = 0; i< numProduct; i++){
     console.log(products[i].product)
 }
 console.log("_____________________________")

//  function orderByProduct(a,b){
//     if(a.product > b.product)return -1;
//     else if (a.Title == b.Title)return 0;
//     else return 1;
//  }
 
//  products.sort(orderByProduct);
 
//  let  numProduct2 = products.length;
//  for(let i = 0; i< numProduct; i++){
//      console.log(products[i].product)
//  }