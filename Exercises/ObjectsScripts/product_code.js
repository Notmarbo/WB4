"use strict";

function parsePartCode("supplierCode:productNumber-size"){
    let productInfo = {
        supplierCode:"1234",
        productNumber:"2d33",
        size:"Large"
    };
    console.log(productInfo.supplierCode, productInfo.productNumber, productInfo.size)
}
parsePartCode("xyz:34565-L")