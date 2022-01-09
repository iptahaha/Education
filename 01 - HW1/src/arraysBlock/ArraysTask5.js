//5. Calculate the sum of the array elements wih an odd index
function calcSumOfArrOddIndex(arr) {
    if (arr.length === 1) {
        return `У массива нет элементов с нечётными индексами`;
    } else if (typeof arr === 'object' && arr.length >= 1) {
        let sum = 0;
        for (let i = 1; i < arr.length; i+=2) {
            if (typeof arr[i] !== 'number') {
                return 'Incorrect input data';
            }
            sum = sum + arr[i];
            //i = i + 2;
        }
        return `Сумма элементов массива с нечётными индексами - ${sum}`;
    } else {
        return 'Incorrect input data';
    }
}

module.exports = {calcSumOfArrOddIndex};