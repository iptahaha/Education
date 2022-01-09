const {ShellSort} = require('../ArraysTask10_Shell');

describe('Task_10. Make Shell sort of an array.', function () {
    test('VALID data: numbers, few elements in the array - [77, 2, 88, 4, 99, 6, 0]', function () {
        expect(ShellSort([77, 2, 88, 4, 99, 6, 0])).toStrictEqual([0,2,4,6,77,88,99]);
    })
    test('VALID data: numbers, few elements in the array with floating-point number - [77, 2, 88, 4, 99, 6, 0, 4.4]', function () {
        expect(ShellSort([77, 2, 88, 4, 99, 6, 0, 4.4])).toStrictEqual([0,2,4,4.4,6,77,88,99]);
    })
    test('VALID data: numbers, two elements in the array - [77, 0]', function () {
        expect(ShellSort([77, 0])).toStrictEqual([0,77]);
    })
    test('VALID data: numbers, one element in the array - [77]', function () {
        expect(ShellSort([77])).toStrictEqual([77]);
    })

    test('INVALID data: string type of elements - ["one", "two", "three", "four", "five", "six"]', function () {
        expect(ShellSort(['one', 'two', 'three', 'four', 'five', 'six'])).toBe('Incorrect input data');
    })
    test('INVALID data: empty array - []', function () {
        expect(ShellSort([])).toBe('Incorrect input data');
    })
    test('INVALID data: string - "hohoho"', function () {
        expect(ShellSort('hohoho')).toBe('Incorrect input data');
    })
})