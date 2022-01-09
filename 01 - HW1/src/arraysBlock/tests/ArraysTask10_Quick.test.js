const {QuickSort} = require('../ArraysTask10_Quick');

describe('Task_10. Make Quick sort of an array.', function () {
    test('VALID data: numbers, few elements in the array - [77, 2, 88, 4, 99, 6, 0]', function () {
        expect(QuickSort([77, 2, 88, 4, 99, 6, 0])).toStrictEqual([0,2,4,6,77,88,99]);
    })
    test('VALID data: numbers, two elements in the array - [77, 0]', function () {
        expect(QuickSort([77, 0])).toStrictEqual([0,77]);
    })
    test('VALID data: numbers, one element in the array - [77]', function () {
        expect(QuickSort([77])).toStrictEqual([77]);
    })
    test('VALID data: numbers, few elements in the array with floating-point number - [77, 2, 88, 4, 99, 6, 0, 4.4]', function () {
        expect(QuickSort([77, 2, 88, 4, 99, 6, 0, 4.4])).toStrictEqual([0,2,4,4.4,6,77,88,99]);
    })

    test('INVALID data: string type of elements - ["one", "two", "three", "four", "five", "six"]', function () {
        expect(QuickSort(['one', 'two', 'three', 'four', 'five', 'six'])).toBe('Incorrect input data');
    })
    test('INVALID data: empty array - []', function () {
        expect(QuickSort([])).toStrictEqual([]);
    })
    test('INVALID data: string - "hohoho"', function () {
        expect(QuickSort('hohoho')).toBe('Incorrect input data');
    })
})