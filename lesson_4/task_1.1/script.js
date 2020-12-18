"use strict";

// ES5
function ProductES5(name, price) {
    this.name = name;
    this.price = price;
}

ProductES5.prototype.make25PercentDiscount = function () {
    this.price *= 0.75;
}

let productES5 = new ProductES5("Телефон", 10000);
console.log(productES5);
productES5.make25PercentDiscount();
console.log(productES5);

// ES6
class ProductES6 {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    make25PercentDiscount() {
        this.price *= 0.75;
    }
}

let productES6 = new ProductES6("Наушники", 5000);
console.log(productES6);
productES6.make25PercentDiscount();
console.log(productES6);



