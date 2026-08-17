const getStockStatus = (stockItem: number): string => {
    if (stockItem === 0) {
        return "Out of Stock";
    } else if (stockItem >= 1 && stockItem <= 5) {
        return "Almost Sold Out";
    } else if (stockItem >= 6 && stockItem <= 20) {
        return "Available";
    }
    return "In Stock";

}

console.log(getStockStatus(0));
console.log(getStockStatus(5));
console.log(getStockStatus(6));
console.log(getStockStatus(20));
console.log(getStockStatus(21));