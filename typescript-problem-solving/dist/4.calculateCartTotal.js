"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const calculateCartTotal = (products) => {
    const totalPrice = products.reduce((accumulator, product) => {
        return accumulator + product.price;
    }, 0);
    return totalPrice;
};
const products = [
    { name: "Keyboard", price: 1500 },
    { name: "Mouse", price: 800 },
    { name: "USB Cable", price: 300 }
];
console.log(calculateCartTotal(products));
// 2600
const products2 = [
    { name: "Book", price: 500 },
    { name: "Pen", price: 50 },
    { name: "Bag", price: 1200 }
];
console.log(calculateCartTotal(products2));
// 1750
const products3 = [
    { name: "Shoes", price: 2500 },
    { name: "Socks", price: 200 },
    { name: "Hat", price: 800 }
];
console.log(calculateCartTotal(products3));
//# sourceMappingURL=4.calculateCartTotal.js.map