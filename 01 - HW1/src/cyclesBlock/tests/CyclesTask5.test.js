const {calcSumOfNumDigits} = require('../CyclesTask5');

describe('Task_5. Calculate the sum of the digits of a given number.', function () {
    test('VALID: number 7', () => {
        expect(calcSumOfNumDigits(7)).toBe(`Сумма цифр числа 7 равна 7`);
    })
    test('VALID: number 77', () => {
        expect(calcSumOfNumDigits(77)).toBe(`Сумма цифр числа 77 равна 14`);
    })
    test('INVALID: number 0', () => {
        expect(calcSumOfNumDigits(0)).toBe(`Сумма цифр числа 0 равна 0`);
    })

    test('INVALID: number -77', () => {
        expect(calcSumOfNumDigits(-77)).toBe('Incorrect input data!');
    })
    test('INVALID: symbol "#"', () => {
        expect(calcSumOfNumDigits('#')).toBe('Incorrect input data!');
    })
    test('INVALID: string "hohoho"', () => {
        expect(calcSumOfNumDigits('hohoho')).toBe('Incorrect input data!');
    })
    test('INVALID: undefined', () => {
        expect(calcSumOfNumDigits(undefined)).toBe('Incorrect input data!');
    })
})