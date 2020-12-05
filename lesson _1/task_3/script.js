"use strict";

/*
    1. 10 + 10 => 20
    2. 20 + "10" => 2010
    Result: 2010
*/
console.log(10 + 10 + "10");

/*
    1. 10 + "10" => "1010"
    2. "1010" + 10 => 101010
    Result: 101010
*/
console.log(10 + "10" + 10);

/*
    1. 10 + 10 => 20
    2. - "10" => -10
    3. 20 + - 10 = 20 - 10 => 10
    Result: 10
*/
console.log(10 + 10 + - "10");

/*
    1. -"" => -0
    2. 10 / -0 => -Infinity
    Result: -Infinity
*/
console.log(10 / -"");

/*
    1. +"2,5" => NaN
    2. 10 / NaN => NaN
    Result: NaN
*/
console.log(10 / +"2,5");