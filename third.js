"use strict";
function applyDiscount(num, discount) {
    // ensure discount is defined
    const safeDiscount = discount ?? 0;
    let discountedPrice = (num * safeDiscount) / 100;
    return discountedPrice;
}
let discountedPrice = applyDiscount(241, 10);
console.log(discountedPrice);
