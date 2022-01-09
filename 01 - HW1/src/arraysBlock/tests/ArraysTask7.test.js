const {countOddElemInArr} = require('../ArraysTask7');

describe('Task_7. Count the number of odd elements of the array.', function () {
    test('VALID data: numbers, few odd elements in the array - [1, 2, 3, 4, 5, 6]', function () {
        expect(countOddElemInArr([1, 2, 3, 4, 5, 6])).toBe(`Количество нечётных элементов массива - 3`);
    })
    test('VALID data: numbers, not any odd element in the array - [2, 4, 6, 8, 10]', function () {
        expect(countOddElemInArr([2, 4, 6, 8, 10])).toBe(`В массиве нет нечётных элементов`);
    })
    test('VALID data: one element in the array - [77]', function () {
        expect(countOddElemInArr([77])).toBe(`Количество нечётных элементов массива - 1`);
    })

    test('INVALID data: empty array - []', function () {
        expect(countOddElemInArr([])).toBe('Incorrect input data');
    })
    test('INVALID data: string - "hohoho"', function () {
        expect(countOddElemInArr('hohoho')).toBe('Incorrect input data');
    })
    test('INVALID data: array of string data - ["one", "two"]', function () {
        expect(countOddElemInArr(['one', 'two'])).toBe('Incorrect input data');
    })
})