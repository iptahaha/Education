const {makeStringOfBigNum} = require('../functionsTasks2&5');

describe('Task_2 and 5*. Вводим число(0-999/ 0-999миллиардов), получаем строку с прописью числа.', function () {
    test('VALID data: number 0', function () {
        expect(makeStringOfBigNum(0)).toMatch(/Число "0" прописью - zero/);
    })
    test('VALID data: number 1', function () {
        expect(makeStringOfBigNum(1)).toMatch(/Число "1" прописью - one/);
    })
    test('VALID data: number 10', function () {
        expect(makeStringOfBigNum(10)).toMatch(/Число "10" прописью - ten/);
    })
    test('VALID data: number 11', function () {
        expect(makeStringOfBigNum(11)).toMatch(/Число "11" прописью - eleven/);
    })
    test('VALID data: number 27', function () {
        expect(makeStringOfBigNum(27)).toMatch(/Число "27" прописью - twenty seven/);
    })
    test('VALID data: number 100', function () {
        expect(makeStringOfBigNum(100)).toMatch(/Число "100" прописью - one hundred/);
    })
    test('VALID data: number 101', function () {
        expect(makeStringOfBigNum(101)).toMatch(/Число "101" прописью - one hundred one/);
    })
    test('VALID data: number 110', function () {
        expect(makeStringOfBigNum(110)).toMatch(/Число "110" прописью - one hundred ten/);
    })
    test('VALID data: number 110', function () {
        expect(makeStringOfBigNum(515)).toMatch(/Число "515" прописью - five hundred fifteen/);
    })
    test('VALID data: number 999', function () {
        expect(makeStringOfBigNum(999)).toMatch(/Число "999" прописью - nine hundred ninety nine/);
    })
    test('VALID data: number 1000', function () {
        expect(makeStringOfBigNum(1000)).toMatch(/Число "1000" прописью - one thousand/);
    })
    test('VALID data: number 101000', function () {
        expect(makeStringOfBigNum(101000)).toMatch(/Число "101000" прописью - one hundred one thousand/);
    })
    test('VALID data: number 123456789', function () {
        expect(makeStringOfBigNum(123456789)).toMatch(/Число "123456789" прописью - one hundred twenty three million four hundred fifty six thousand seven hundred eighty nine/);
    })
    test('VALID data: number 999999999999', function () {
        expect(makeStringOfBigNum(999999999999)).toMatch('Число "999999999999" прописью - nine hundred ninety nine billion nine hundred ninety nine million nine hundred ninety nine thousand nine hundred ninety nine');
    })

    test('INVALID data: to big number 1999999999999', () => {
        expect(makeStringOfBigNum(1999999999999)).toBe('Пожалуйста, введите положительное число от 0 до 999 миллиардов!');
    })
    test('INVALID data: negative number -77', () => {
        expect(makeStringOfBigNum(-77)).toBe('Пожалуйста, введите положительное число от 0 до 999 миллиардов!');
    })
    test('INVALID data: symbol "#"', () => {
        expect(makeStringOfBigNum('#')).toBe('Пожалуйста, введите положительное число от 0 до 999 миллиардов!');
    })
    test('INVALID data: string "hohoho"', () => {
        expect(makeStringOfBigNum('hohoho')).toBe('Пожалуйста, введите положительное число от 0 до 999 миллиардов!');
    })
    test('INVALID data: undefined', () => {
        expect(makeStringOfBigNum(undefined)).toBe('Пожалуйста, введите положительное число от 0 до 999 миллиардов!');
    })
})