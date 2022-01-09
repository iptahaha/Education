const {isPrimeNum} = require('../CyclesTask2');

describe('Task_2. Is it a prime number to check?', function () {
    test('isPrimeNum(x) is prime. VALID: number - 7', function () {
        expect(isPrimeNum(7)).toBe('Prime number (простое число)');
    })
    test('isPrimeNum(x) is prime. VALID: number - 44', () => {
        expect(isPrimeNum(44)).toBe('Composite Number (составное число)');
    })
    test('isPrimeNum(x) is prime. VALID: number - 0', () => {
        expect(isPrimeNum(0)).toBe('It is no prime neither composite number');
    })
    test('isPrimeNum(x) is prime. VALID: number - 1', () => {
        expect(isPrimeNum(1)).toBe('It is no prime neither composite number');
    })
    test('isPrimeNum(x) is prime. INVALID: symbol - "#"', () => {
        expect(isPrimeNum('#')).toBe('Invalid input data!');
    })
    test('isPrimeNum(x) is prime. INVALID: string - "hohoho"', () => {
        expect(isPrimeNum('hohoho')).toBe('Invalid input data!');
    })
    test('isPrimeNum(x) is prime. INVALID: undefined', () => {
        expect(isPrimeNum(undefined)).toBe('Invalid input data!');
    })
})