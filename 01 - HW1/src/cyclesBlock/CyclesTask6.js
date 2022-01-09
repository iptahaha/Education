//6. Print a number that is a mirror image of a sequence of digits of a given number
function getNumReflection(num) {
    if (num >= 1 && typeof num === 'number') {
        let refNum = '';
        while (num > 0) {
            let digit = num%10;//остаток от деления на 10 - последняя цифра числа
            num = (num - digit) / 10;//от числа отсекается последняя цифра
            refNum += digit;
        }
        return refNum;
    } else if (num < 1) {
        return 'Please, input number bigger, than 1.';
    } else {
        return 'Incorrect input data!';
    }
}

module.exports = {getNumReflection};