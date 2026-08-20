interface Product{
    name:string,
    price:number,
    category:string
}


const findProducts = (products: Product[], category: string) => {
    return products.filter(product => product.category === category);
}