const {findMinArrElement} = require('../ArraysTask1');

describe('Task_1. Find the minimum element of an array.', function () {
    test('VALID data: numbers, one min.value per array - [1, 2, 0, 4, 5]', function () {
        expect(findMinArrElement([1, 2, 0, 4, 5])).toBe(`The minimum element of the array [1,2,0,4,5] is [0]`);
    })
    test('VALID data: numbers, few min.value per array - [1, 2, 0, 4, 0]', function () {
        expect(findMinArrElement([1, 2, 0, 4, 0])).toBe(`The minimum element of the array [1,2,0,4,0] is [0]`);
    })
    test('VALID data: numbers, one element in array - [1]', function () {
        expect(findMinArrElement([1])).toBe(`The minimum element of the array [1] is [1]`);
    })

    test('INVALID data: empty array - []', function () {
        expect(findMinArrElement([])).toBe('Incorrect input data');
    })
    test('INVALID data: string - "hohoho"', function () {
        expect(findMinArrElement('hohoho')).toBe('Incorrect input data');
    })
    test('INVALID data: array of string data - ["one", "two"]', function () {
        expect(findMinArrElement(['one', 'two'])).toBe('Incorrect input data');
    })
})