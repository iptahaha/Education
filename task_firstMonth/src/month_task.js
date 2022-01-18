// 1) Напишите функцию getDays, которая принимает год и месяц, а возвращает
// количество дней в месяце
// getDays( 2021 , 4) //30
// getDays( 2021 , ‘April’) //30

function daysInMonth(year, month) {
    if (year && month && typeof year === 'number' && (typeof month === 'number' || typeof month === 'string')) {
        if (typeof month === "string") {
            let textMonth = month.toLowerCase();
            (textMonth === 'january') ? month = 1 :
                (textMonth === 'february') ? month = 2 :
                    (textMonth === 'march') ? month = 3 :
                        (textMonth === 'april') ? month = 4 :
                            (textMonth === 'may') ? month = 5 :
                                (textMonth === 'june') ? month = 6 :
                                    (textMonth === 'july') ? month = 7 :
                                        (textMonth === 'august') ? month = 8 :
                                            (textMonth === 'september') ? month = 9 :
                                                (textMonth === 'october') ? month = 10 :
                                                    (textMonth === 'november') ? month = 11 :
                                                        (textMonth === 'december') ? month = 12 :
                                                            month = 13;
            if (month < 0 || month > 12) {
                return 'Incorrect input data!'
            }
        }
        return new Date(year, month, 0).getDate();
    } else {
        return 'Incorrect input data!';
    }
}

// console.log(daysInMonth(2021, 4));
// console.log(daysInMonth(2021, 'April'));

// 2) Через прототип расширьте встроенный объект Number методом isOdd(), который
// возвращает true, если число нечетное.

Number.prototype.isOdd = function () {
    if (isNaN(this)) {
        return 'Incorrect input data!';
    }
    return (this % 2 !== 0);
}
//console.log((55).isOdd());

// 3) Написать функцию every, которая будет принимать первым аргументом массив, а
// вторым функцию колбэк(которая будет принимать каждый элемент массива и
// возвращать true либо false). Результатом функции должно быть логическое
// выражение true/false в зависимости от того, выполняется ли условие для каждого
// из элементов.
function isEven(num) {
    return num % 2 === 0;
}

function every(array, cb) {
    if (array && typeof array === 'object') {
        for (let arg of array) {
            if (arg && typeof arg === 'number') {
                if (!cb(arg)) {
                    return false;
                }
            } else {
                return 'Incorrect input data!';
            }
        }
        return true;
    }
    return 'Incorrect input data!';
}

// console.log(every([8, 2, 13], isEven));
// console.log(every2([8, 2, 13], isEven));

module.exports = {daysInMonth, Number, isEven, every};