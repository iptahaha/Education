const {getNumber} = require('../Task2');

describe('Task_2. Получая массив чисел. Все они либо нечетные, либо четные, кроме одного. Тебе нужно его найти.', function () {
    test('VALID data: all odd, one even', function () {
        expect(getNumber([1, 5, 7, 9, 15, 19, 777, -15, -11, 4, 9, 23, -17])).toBe(4);
    })
    test('VALID data: all even, one odd', function () {
        expect(getNumber([0, 2, 8, -4, 0, -122, 13, -4, 28, 12])).toBe(13);
    })

    test('INVALID: number -77', () => {
        expect(getNumber(-77)).toBe('Incorrect input data!');
    })
    test('INVALID: symbol "#"', () => {
        expect(getNumber('#')).toBe('Incorrect input data!');
    })
    test('INVALID: string "hohoho"', () => {
        expect(getNumber('hohoho')).toBe('Incorrect input data!');
    })
    test('INVALID: undefined', () => {
        expect(getNumber(undefined)).toBe('Incorrect input data!');
    })
})