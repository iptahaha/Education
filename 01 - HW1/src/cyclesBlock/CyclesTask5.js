//5. Calculate the sum of the digits of a given number
function calcSumOfNumDigits(num){
    if (num >= 0 && typeof num === 'number') {
        num = String(num);
        let sumOfDigits = 0;
        for (let char of num) {
            let digit = parseInt(char);
            sumOfDigits = sumOfDigits + digit;
        }
        return `Сумма цифр числа ${num} равна ${sumOfDigits}`;
    } else {
        return 'Incorrect input data!';
    }
}
module.exports = {calcSumOfNumDigits};