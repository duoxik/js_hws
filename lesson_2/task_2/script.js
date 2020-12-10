"use strict";

/*
    1. a = 2
    2. a *= 2 => a = 4
    3. x = 1 + 4 => x = 5
*/
let a = 2;
let x = 1 + (a *= 2);

/*
    Result: 4
*/
alert(a);

/*
    Result: 5
*/
alert(x);
