const {calcNumFactorial} = require('../CyclesTask4');

describe('Task_4. Calculate the factorial of the number n.', function () {
    test('VALID: number 7', () => {
        expect(calcNumFactorial(7)).toBe('7! = 5040');
    })
    test('VALID: number 1', () => {
        expect(calcNumFactorial(1)).toBe('1! = 1');
    })

    test('INVALID: number 0', () => {
        expect(calcNumFactorial(0)).toBe('Incorrect input data!');
    })
    test('INVALID: number -77', () => {
        expect(calcNumFactorial(-77)).toBe('Incorrect input data!');
    })
    test('INVALID: symbol "#"', () => {
        expect(calcNumFactorial('#')).toBe('Incorrect input data!');
    })
    test('INVALID: string "hohoho"', () => {
        expect(calcNumFactorial('hohoho')).toBe('Incorrect input data!');
    })
    test('INVALID: undefined', () => {
        expect(calcNumFactorial(undefined)).toBe('Incorrect input data!');
    })
})