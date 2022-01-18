const { daysInMonth, Number, isEven, every } = require('../month_task');

describe('Task1. Напишите функцию getDays, которая принимает год и месяц, а возвращает количество дней в месяце.', function () {
    test('VALID data: (2021, 4)',  () => {
        expect(daysInMonth(2021, 4)).toBe(30);
    });
    test('VALID data: (2021, "January")',  () => {
        expect(daysInMonth(2021, 'January')).toBe(31);
    });
    test('VALID data: (2021, "April")',  () => {
        expect(daysInMonth(2021, 'April')).toBe(30);
    });
    test('VALID data: (2021, "december")',  () => {
        expect(daysInMonth(2021, 'december')).toBe(31);
    });


    test('INVALID data: one argument -77', () => {
        expect(daysInMonth(-77)).toBe('Incorrect input data!');
    })
    test('VALID data: mistake string data (2021, "KHpril")',  () => {
        expect(daysInMonth(2021, 'KHpril')).toBe('Incorrect input data!');
    });
})

describe('Task2. Через прототип расширьте встроенный объект Number методом isOdd(), который возвращает true, если число нечетное.', function () {
    test('VALID data: number 55',  () => {
        expect((55).isOdd()).toBeTruthy();
    })
    test('VALID data: number 44',  () => {
        expect((44).isOdd()).toBeFalsy();
    })
    test('VALID data: negative number -77', () => {
        expect((-77).isOdd()).toBeTruthy();
    })

    test('INVALID data: NaN', () => {
        expect((NaN).isOdd()).toBe('Incorrect input data!');
    })
})

describe('Task3. Написать функцию every, которая будет принимать массив и функцию колбэк(которая будет принимать каждый элемент массива и возвращать true либо false)', function () {
    test('VALID data: [8, 2, 16]', function () {
        expect(every([8, 2, 16], isEven)).toBeTruthy();
    })
    test('VALID data: [8, 2, 13]', function () {
        expect(every([8, 2, 13], isEven)).toBeFalsy();
    })
    test('VALID data: with zero [8, 2, 0]', function () {
        expect(every([8, 2, 0], isEven)).toBeTruthy();
    })
    test('VALID data: with zero [8, 2, -77]', function () {
        expect(every([8, 2, -77], isEven)).toBeFalsy();
    })

    test('INVALID data: not an array -77', () => {
        expect(every(-77, isEven)).toBe('Incorrect input data!');
    })
    test('INVALID data: not an array "hohoho"', () => {
        expect(every('hohoho', isEven)).toBe('Incorrect input data!');
    })
    test('INVALID data: undefined', () => {
        expect(every(undefined, isEven)).toBe('Incorrect input data!');
    })
    test('INVALID data: NaN', () => {
        expect(every(NaN, isEven)).toBe('Incorrect input data!');
    })
})