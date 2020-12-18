"use strict";

class CustomNumber {
    constructor(hundereds, tens, units) {
        this.hundereds = hundereds;
        this.tens = tens;
        this.units = units;
    }

    static getInstance(number) {
        if (!Number.isInteger(number) || number > 999 || number < 0) {
            throw new Error("Передано не целое число в диапозоне от 0 до 999");
        }

        let units = number % 10;
        let tens = Math.trunc(number / 10) % 10;
        let hundereds = Math.trunc(number / 100);

        return new CustomNumber(hundereds, tens, units);
    }
}

console.log(CustomNumber.getInstance(0));
console.log(CustomNumber.getInstance(4));
console.log(CustomNumber.getInstance(56));
console.log(CustomNumber.getInstance(978));