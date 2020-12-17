"use strict";

for (let i = 0; i <= 10; i++) {
    if (i == 0) {
        console.log(i + " - Это ноль");
    } else {
        console.log(i + " - " + (i % 2 == 0 ? "четное" : "нечетное") + " число");
    }
}