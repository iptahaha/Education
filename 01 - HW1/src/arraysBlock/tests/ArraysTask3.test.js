const {findIndMinArrElement} = require('../ArraysTask3');

describe('Task_3. Find the index of the minimum element of an array.', function () {
    test('VALID data: numbers, one min.value per array - [1, 2, 0, 4, 5]', function () {
        expect(findIndMinArrElement([1, 2, 0, 4, 5])).toBe(`The index of minimum element of the array [1,2,0,4,5] is [2]`);
    })
    test('VALID data: numbers, few min.value per array - [1, 2, 0, 4, 0]', function () {
        expect(findIndMinArrElement([1, 2, 0, 4, 0])).toBe(`The index of minimum element of the array [1,2,0,4,0] is [2,4]`);
    })
    test('VALID data: numbers, one element in array - [77]', function () {
        expect(findIndMinArrElement([77])).toBe(`The index of minimum element of the array [77] is [77]`);
    })

    test('INVALID data: empty array - []', function () {
        expect(findIndMinArrElement([])).toBe('Incorrect input data');
    })
    test('INVALID data: string - "hohoho"', function () {
        expect(findIndMinArrElement('hohoho')).toBe('Incorrect input data');
    })
    test('INVALID data: array of string data - ["one", "two"]', function () {
        expect(findIndMinArrElement(['one', 'two'])).toBe('Incorrect input data');
    })
})