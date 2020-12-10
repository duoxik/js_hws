"use strict";

let a = 3;
let b = -5;

if (a > 0 && b > 0) {
    alert(a - b);
} else if (a < 0 && b < 0) {
    alert(a * b);
} else if (a ^ b > 0) {
    alert(a + b);
}
