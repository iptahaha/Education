const {findIndMaxArrElement} = require('../ArraysTask4');

describe('Task_4. Find the index of the maximum element of an array.', function () {
    test('VALID data: numbers, one max.value per array - [1, 2, 77, 4, 5]', function () {
        expect(findIndMaxArrElement([1, 2, 77, 4, 5])).toBe(`The index of maximum element of the array [1,2,77,4,5] is [2]`);
    })
    test('VALID data: numbers, few max.value per array - [1, 2, 77, 4, 77]', function () {
        expect(findIndMaxArrElement([1, 2, 77, 4, 77])).toBe(`The index of maximum element of the array [1,2,77,4,77] is [2]`);
    })
    test('VALID data: numbers, one element in array - [77]', function () {
        expect(findIndMaxArrElement([77])).toBe(`The index of maximum element of the array [77] is [77]`);
    })

    test('INVALID data: empty array - []', function () {
        expect(findIndMaxArrElement([])).toBe('Incorrect input data');
    })
    test('INVALID data: string - "hohoho"', function () {
        expect(findIndMaxArrElement('hohoho')).toBe('Incorrect input data');
    })
    test('INVALID data: array of string data - ["one", "two"]', function () {
        expect(findIndMaxArrElement(['one', 'two'])).toBe('Incorrect input data');
    })
})