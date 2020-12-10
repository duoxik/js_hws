"use strict";

function sum(a, b) {
    return a + b;
}

function mult(a, b) {
    return a * b;
}

function sub(a, b) {
    return a - b;
}

function div(a, b) {
    return a / b;
}

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case 'sum':
            return sum(arg1, arg2);
        case 'mult':
            return mult(arg1, arg2);
        case 'sub':
            return sub(arg1, arg2);
        case 'div':
            return div(arg1, arg2);
        default:
            throw new Error('Неизвестная операция: ' + operation);
    }
}

alert(mathOperation(18, 6, 'sum'));
alert(mathOperation(18, 6, 'mult'));
alert(mathOperation(18, 6, 'sub'));
alert(mathOperation(18, 6, 'div'));