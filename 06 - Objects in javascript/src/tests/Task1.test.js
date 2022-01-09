const {getCookingTime} = require('../Task1');

describe('Task_1. Составьте алгоритм, который считает, сколько времени вам нужно на приготовление яиц.', function () {
    test('VALID data: number 0', function () {
        expect(getCookingTime(0)).toBe(0);
    })
    test('VALID data: minimum number 1', function () {
        expect(getCookingTime(1)).toBe(5);
    })
    test('VALID data: minimum number multiple(5) 5', function () {
        expect(getCookingTime(5)).toBe(5);
    })
    test('VALID data: number multiple(5) 25', function () {
        expect(getCookingTime(25)).toBe(25);
    })
    test('VALID data: number not a multiple(5) 77', function () {
        expect(getCookingTime(77)).toBe(80);
    })

    test('INVALID data: number -77', () => {
        expect(getCookingTime(-77)).toBe('Incorrect input data!');
    })
    test('INVALID data: symbol "#"', () => {
        expect(getCookingTime('#')).toBe('Incorrect input data!');
    })
    test('INVALID data: string "hohoho"', () => {
        expect(getCookingTime('hohoho')).toBe('Incorrect input data!');
    })
    test('INVALID data: undefined', () => {
        expect(getCookingTime(undefined)).toBe('Incorrect input data!');
    })
})