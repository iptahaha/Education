const {getSum} = require('../closureTask2');

describe('Task2. Напишите функцию, которая получает два бесконечных числа в виде строк.', function () {
    test('VALID data: string numbers with same length "123", "324"', function () {
        expect(getSum('123', '324')).toBe("447");
    })
    test('VALID data: long string numbers with same length "111111...111", "233333...333"]', function () {
        expect(getSum('111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111', '233333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333')).toBe('344444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444');
    })
    test('VALID data: string numbers with different length (first longer) "12345", "324"', function () {
        expect(getSum('12345', '324')).toBe("44745");
    })
    test('VALID data: string numbers with different length (second longer) "123", "32445"', function () {
        expect(getSum('123', '32445')).toBe("44745");
    })

    test('INVALID data: number -77', () => {
        expect(getSum(-77)).toBe('Incorrect input data!');
    })
    test('INVALID data: symbol "#"', () => {
        expect(getSum('#')).toBe('Incorrect input data!');
    })
    test('INVALID data: string "hohoho"', () => {
        expect(getSum('hohoho')).toBe('Incorrect input data!');
    })
    test('INVALID data: undefined', () => {
        expect(getSum(undefined)).toBe('Incorrect input data!');
    })
})