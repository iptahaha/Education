const {getNextPalindrome} = require('../Task5');

describe('Task_5. Принимая число, ваша функция должна найти следующий положительный палиндром большего размера.', function () {
    test('VALID data: number 7', function () {
        expect(getNextPalindrome(7)).toBe(11);
    })
    test('VALID data: number 99', function () {
        expect(getNextPalindrome(99)).toBe(101);
    })
    test('VALID data: number 132', function () {
        expect(getNextPalindrome(132)).toBe(141);
    })
    test('VALID data: number 888', function () {
        expect(getNextPalindrome(888)).toBe(898);
    })
    test('VALID data: number 999', function () {
        expect(getNextPalindrome(999)).toBe(1001);
    })

    test('INVALID data: negative number -77', () => {
        expect(getNextPalindrome(-77)).toBe('Incorrect input data!');
    })
    test('INVALID data: symbol "#"', () => {
        expect(getNextPalindrome('#')).toBe('Incorrect input data!');
    })
    test('INVALID data: string "hohoho"', () => {
        expect(getNextPalindrome('hohoho')).toBe('Incorrect input data!');
    })
    test('INVALID data: undefined', () => {
        expect(getNextPalindrome(undefined)).toBe('Incorrect input data!');
    })
})
