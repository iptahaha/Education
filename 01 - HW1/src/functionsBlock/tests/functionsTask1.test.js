const {getDayName} = require('../functionsTask1');

describe('Task_1. Получить строковое название дня недели по номеру дня.', function () {
    test('VALID data: number 1', function () {
        expect(getDayName(1)).toBe('Понедельник');
    })
    test('VALID data: number 7', function () {
        expect(getDayName(7)).toBe('Воскресенье');
    })
    test('INVALID data: number 11', function () {
        expect(getDayName(11)).toBe('Input number in range of 1 to 7');
    })
    test('INVALID: number -77', () => {
        expect(getDayName(-77)).toBe('Input number in range of 1 to 7');
    })
    test('INVALID: symbol "#"', () => {
        expect(getDayName('#')).toBe('Input number in range of 1 to 7');
    })
    test('INVALID: string "hohoho"', () => {
        expect(getDayName('hohoho')).toBe('Input number in range of 1 to 7');
    })
    test('INVALID: undefined', () => {
        expect(getDayName(undefined)).toBe('Input number in range of 1 to 7');
    })
})