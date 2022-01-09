const {findMaxArrElement} = require('../ArraysTask2');

describe('Task_2. Find the maximum element of an array.', function () {
    test('VALID data: numbers, one max.value per array - [1, 2, 77, 4, 5]', function () {
        expect(findMaxArrElement([1, 2, 77, 4, 5])).toBe(`The maximum element of the array [1,2,77,4,5] is [77]`);
    })
    test('VALID data: numbers, few max.value per array - [1, 2, 77, 4, 77]', function () {
        expect(findMaxArrElement([1, 2, 77, 4, 77])).toBe(`The maximum element of the array [1,2,77,4,77] is [77]`);
    })
    test('VALID data: numbers, one element in array - [77]', function () {
        expect(findMaxArrElement([77])).toBe(`The maximum element of the array [77] is [77]`);
    })

    test('INVALID data: empty array - []', function () {
        expect(findMaxArrElement([])).toBe('Incorrect input data');
    })
    test('INVALID data: string - "hohoho"', function () {
        expect(findMaxArrElement('hohoho')).toBe('Incorrect input data');
    })
    test('INVALID data: array of string data - ["one", "two"]', function () {
        expect(findMaxArrElement(['one', 'two'])).toBe('Incorrect input data');
    })
})