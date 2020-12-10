"use strict";

function getOperationMessage(num) {
    if (isNaN(num) || num <= 0) {
        return `Значение '${num}' не является положительным или целочисленным значением`;
    }

    let lastDigit = num % 10;
    let currency;
    switch (lastDigit) {
        case 0:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
            currency = 'рублей';
            break;
        case 1:
            currency = 'рубль';
            break;
        case 2:
        case 3:
        case 4:
            currency = 'рубля';
    }

    return `Ваша сумма в ${num} ${currency} успешно зачислена.`
}

let input = prompt('Какую сумму зачислить?');
alert(getOperationMessage(input));
