"use strict";

/*
    1. ++a = 2;
    2. c = a => c = 2;
    Result: 2
*/
let a = 1, b = 1, c, d;
c = ++a;
alert(c);

/*
    1. d = b => d = 1
    2. b++ => b = 2
    Result: 1
*/
d = b++;
alert(d);

/*
    1. ++a => a = 3
    2. c = 2 + 3 => c = 5
    Result: 5
*/
c = 2 + ++a;
alert(c);

/*
    1. d = 2 + b => d = 4
    2. b++ => b = 3
*/
d = 2 + b++;
alert(d);

/*
    Result: 3
*/
alert(a);

/*
    Result: 3
*/
alert(b);