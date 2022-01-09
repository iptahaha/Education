const {getReverseArr} = require('../ArraysTask6');

describe('Task_6. Reverse an array.', function () {
    test('VALID data: numbers, even number of elements in an array - [1, 2, 3, 4, 5, 6]', function () {
        expect(getReverseArr([1, 2, 3, 4, 5, 6])).toBe(`Реверс исходного массива : 6,5,4,3,2,1`);
    })
    test('VALID data: numbers, odd number of elements in an array - [1, 2, 3, 4, 5]', function () {
        expect(getReverseArr([1, 2, 3, 4, 5])).toBe(`Реверс исходного массива : 5,4,3,2,1`);
    })
    test('VALID data: string type of elements - ["1", "2", "3", "4", "5", "6"]', function () {
        expect(getReverseArr(['1', '2', '3', '4', '5', '6'])).toBe(`Реверс исходного массива : 6,5,4,3,2,1`);
    })

    test('INVALID data: one element in the array - [77]', function () {
        expect(getReverseArr([77])).toBe('Incorrect input data');
    })
    test('INVALID data: empty array - []', function () {
        expect(getReverseArr([])).toBe('Incorrect input data');
    })
    test('INVALID data: string - "hohoho"', function () {
        expect(getReverseArr('hohoho')).toBe('Incorrect input data');
    })
})