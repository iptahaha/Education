const {swapArrHalves} = require('../ArraysTask8');

describe('Task_8. Swap the first and the second halves of the array.', function () {
    test('VALID data: numbers, even number of elements in an array - [1, 2, 3, 4, 5, 6]', function () {
        expect(swapArrHalves([1, 2, 3, 4, 5, 6])).toBe(`Пересобранный массив: 4,5,6,1,2,3`);
    })
    test('VALID data: numbers, odd number of elements in an array - [1, 2, 3, 4, 5]', function () {
        expect(swapArrHalves([1, 2, 3, 4, 5])).toBe(`Пересобранный массив: 4,5,3,1,2`);
    })
    test('VALID data: string type of elements - ["one", "two", "three", "four", "five", "six"]', function () {
        expect(swapArrHalves(['one', 'two', 'three', 'four', 'five', 'six'])).toBe(`Пересобранный массив: four,five,six,one,two,three`);
    })
    test('VALID data: two elements in the array - [77, 99]', function () {
        expect(swapArrHalves([77, 99])).toBe(`Пересобранный массив: 99,77`);
    })

    test('INVALID data: one element in the array - [77]', function () {
        expect(swapArrHalves([77])).toBe('Incorrect input data');
    })
    test('INVALID data: empty array - []', function () {
        expect(swapArrHalves([])).toBe('Incorrect input data');
    })
    test('INVALID data: string - "hohoho"', function () {
        expect(swapArrHalves('hohoho')).toBe('Incorrect input data');
    })
})