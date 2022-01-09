const {getNumReflection} = require('../CyclesTask6');

describe('Task_6. Print a number that is a mirror image of a sequence of digits of a given number.', function () {
    test('VALID: number 7', () => {
        expect(getNumReflection(7)).toBe('7');
    })
    test('VALID: number 77', () => {
        expect(getNumReflection(123)).toBe('321');
    })

    test('INVALID: number 0', () => {
        expect(getNumReflection(0)).toBe('Please, input number bigger, than 1.');
    })
    test('INVALID: number 0.567', () => {
        expect(getNumReflection(0.567)).toBe('Please, input number bigger, than 1.');
    })
    test('INVALID: number -77', () => {
        expect(getNumReflection(-77)).toBe('Please, input number bigger, than 1.');
    })
    test('INVALID: symbol "#"', () => {
        expect(getNumReflection('#')).toBe('Incorrect input data!');
    })
    test('INVALID: string "hohoho"', () => {
        expect(getNumReflection('hohoho')).toBe('Incorrect input data!');
    })
    test('INVALID: undefined', () => {
        expect(getNumReflection(undefined)).toBe('Incorrect input data!');
    })
})