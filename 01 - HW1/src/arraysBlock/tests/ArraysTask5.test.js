const {calcSumOfArrOddIndex} = require('../ArraysTask5');

describe('Task_5. Calculate the sum of the array elements wih an odd index.', function () {
    test('VALID data: numbers, few elements wih an odd index - [1, 2, 3, 4, 5, 6]', function () {
        expect(calcSumOfArrOddIndex([1, 2, 3, 4, 5, 6])).toBe(`Сумма элементов массива с нечётными индексами - 12`);
    })
    test('VALID data: numbers, one element in array - [77]', function () {
        expect(calcSumOfArrOddIndex([77])).toBe(`У массива нет элементов с нечётными индексами`);
    })

    test('INVALID data: empty array - []', function () {
        expect(calcSumOfArrOddIndex([])).toBe('Incorrect input data');
    })
    test('INVALID data: string - "hohoho"', function () {
        expect(calcSumOfArrOddIndex('hohoho')).toBe('Incorrect input data');
    })
    test('INVALID data: array of string data - ["one", "two"]', function () {
        expect(calcSumOfArrOddIndex(['one', 'two'])).toBe('Incorrect input data');
    })
})