function applyDiscount(num: number, discount?: number): number {
    // ensure discount is defined
    const safeDiscount = discount ?? 0
    let discountedPrice: number = (num * safeDiscount) / 100
    return discountedPrice;
}

let discountedPrice: number = applyDiscount(241, 10)
console.log(discountedPrice)