interface Item {
    name: string,
    price: number;
}

const calculateCartTotal = (products: Item[]) => {
    const totalPrice = products.reduce((accumulator: number, product) => {
        return accumulator + product.price;
    }, 0);
    return totalPrice;
}


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
