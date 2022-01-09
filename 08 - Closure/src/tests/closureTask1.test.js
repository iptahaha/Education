const {tickets} = require('../closureTask1');

describe('Task1. Верните YES, если Вася может продать каждому билет и отдать сдачу. В противном случае верните NO.', function () {
    test('VALID data: [25, 25, 50]', function () {
        expect(tickets([25, 25, 50])).toBe('YES');
    })
    test('VALID data: [25, 100]', function () {
        expect(tickets([25, 100])).toBe('NO');
    })
    test('VALID data: [25, 25, 50, 100]', function () {
        expect(tickets([25, 25, 50, 100])).toBe('YES');
    })
    test('VALID data: [25, 50, 100]', function () {
        expect(tickets([25, 50, 100])).toBe('NO');
    })
    test('VALID data: [50, 25, 25, 25, 50, 50, 25, 100]', function () {
        expect(tickets([50, 25, 25, 25, 50, 50, 25, 100])).toBe('NO');
    })
    test('VALID data: ["25", "25", "50", "100"]', function () {
        expect(tickets(['25', '25', '50', '100'])).toBe('YES');
    })
    test('VALID data: ["25", "25", "100"]', function () {
        expect(tickets(['25', '25', '100'])).toBe('NO');
    })

    test('INVALID data: number -77', () => {
        expect(tickets(-77)).toBe('Incorrect input data!');
    })
    test('INVALID data: symbol "#"', () => {
        expect(tickets('#')).toBe('Incorrect input data!');
    })
    test('INVALID data: string "hohoho"', () => {
        expect(tickets('hohoho')).toBe('Incorrect input data!');
    })
    test('INVALID data: undefined', () => {
        expect(tickets(undefined)).toBe('Incorrect input data!');
    })
})