"use strict";

function parsePartCode(code) {
    //format of code looks like htis: supplierCode:productNumber-size
    let finder1 = code.indexOf(":"); // expression to find just the supplier code...
    let finder2 = code.indexOf("-");

    let slicedSupplierCode = code.slice(0, finder1);
    let slicedNumb = code.slice(finder1 + 1, finder2); 
    let slicedSize = code.slice(finder2 + 1);

    let productInfo = {
        supplierCode: slicedSupplierCode,
        productNumber: slicedNumb,
        size: slicedSize
    };
    return productInfo;


}

function displayPart(part){

    console.log("Supplier: " + part.supplierCode +
    " Product Number: " + part.productNumber +
    " Size: " + part.size);

}

let code1 = "xyz:34565-L";

let p1 = parsePartCode(code1);

displayPart(p1);

let p2 = parsePartCode("abc:70565-M");

displayPart(p2);


