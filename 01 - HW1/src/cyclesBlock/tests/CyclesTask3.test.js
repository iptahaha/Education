const {getRooBinary, getRootSequential} = require('../CyclesTask3');

describe('Task_3. Find the root of a natural number up to an integer (consider sequential selection)', function () {
    test('getRootSequential(x). VALID: number 9 (3)', () => {
        expect(getRootSequential(9)).toBe('Корень из 9 равен 3');
    })
    test('getRootSequential(x). VALID: number 88 (9.3)', () => {
        expect(getRootSequential(88)).toBe('Корень из 88 равен 10');
    })
    test('getRootSequential(x). VALID: big number 65536 (256)', () => {
        expect(getRootSequential(65536)).toBe('Корень из 65536 равен 256');
    })
    test('getRootSequential(x). VALID: number 1 (1)', () => {
        expect(getRootSequential(1)).toBe('Корень из 1 равен 1');
    })

    test('getRootSequential(x). INVALID: number 0', () => {
        expect(getRootSequential(0)).toBe('Input positive number');
    })
    test('getRootSequential(x). INVALID: number -77', () => {
        expect(getRootSequential(-77)).toBe('Input positive number');
    })
    test('getRootSequential(x). INVALID: symbol "#"', () => {
        expect(getRootSequential('#')).toBe('Input positive number');
    })
    test('getRootSequential(x). INVALID: string "hohoho"', () => {
        expect(getRootSequential('hohoho')).toBe('Input positive number');
    })
    test('getRootSequential(x). INVALID: undefined', () => {
        expect(getRootSequential(undefined)).toBe('Input positive number');
    })
})


describe('Task_3. Find the root of a natural number up to an integer (consider binary search method)', function () {
    test('getRooBinary(x). VALID: number 9', () => {
        expect(getRooBinary(9)).toBe('Корень из 9 равен 4');
    })
    test('getRooBinary(x). VALID: number 81', () => {
        expect(getRooBinary(81)).toBe('Корень из 81 равен 12');
    })
    test('getRooBinary(x). VALID: number 1', () => {
        expect(getRooBinary(1)).toBe('Корень из 1 равен 1');
    })

    test('getRooBinary(x). INVALID: number 0', () => {
        expect(getRooBinary(0)).toBe('Input positive number');
    })
    test('getRooBinary(x). INVALID: number -77', () => {
        expect(getRooBinary(-77)).toBe('Input positive number');
    })
    test('getRooBinary(x). INVALID: symbol "#"', () => {
        expect(getRooBinary('#')).toBe('Input positive number');
    })
    test('getRooBinary(x). INVALID: string "hohoho"', () => {
        expect(getRooBinary('hohoho')).toBe('Input positive number');
    })
    test('getRooBinary(x). INVALID: undefined', () => {
        expect(getRooBinary(undefined)).toBe('Input positive number');
    })
})