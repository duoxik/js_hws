"use strict";

const products = [
    {
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];

const discount = 0.15;

products.forEach(function (product) {
    product.price *= 1 - discount;
});

console.log(products);