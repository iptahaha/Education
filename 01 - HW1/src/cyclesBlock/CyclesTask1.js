//1. Find the sum of even numbers and their quantity in the range from 1 to 99
function calcSumOfEvenNum() {
    let sum = 0; //sum of even numbers (сумма чётных чисел)
    let q = 0; //quantity of even numbers (количество чётных чисел)
    for (let i = 1; i < 100; i++) {
        if (i%2 === 0) {
            sum = sum + i;
            q++;
        }
    }
    return `Sum of even numbers (сумма чётных чисел): ${sum}\nQuantity of even numbers (количество чётных чисел): ${q}`;
}
module.exports = {calcSumOfEvenNum};