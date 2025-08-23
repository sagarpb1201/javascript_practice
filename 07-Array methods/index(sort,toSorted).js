const products = [
    { id: 'p3', name: 'Wireless Headphones', price: 99.99 },
    { id: 'p1', name: 'Ergonomic Mouse', price: 74.99 },
    { id: 'p4', name: 'Mechanical Keyboard', price: 129.99 },
    { id: 'p2', name: '4K Webcam', price: 149.99 }
];

function sortProductsByPriceLowToHigh(products){
    // const lowToHight=[...products];
    // return lowToHight.sort((a,b)=>a.price-b.price);
    return products.toSorted((a,b)=>a.price-b.price);
}
function sortProductsByPriceHighToLow(products){
    // const lowToHight=[...products];
    // return lowToHight.sort((a,b)=>a.price-b.price);
    return products.toSorted((a,b)=>b.price-a.price);
}

console.log("Products low to high",sortProductsByPriceLowToHigh(products))
console.log("Products high to low",sortProductsByPriceHighToLow(products))
console.log(products)