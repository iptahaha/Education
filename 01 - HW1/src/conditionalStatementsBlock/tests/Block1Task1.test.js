const isEven = require('../Block1Task1');

test.each([
    [4, 5, 20],
    [0, 5, 0]
])('isEven(a, b) to a * b', (a, b, expected) => {
    expect(isEven(a, b)).toBe(expected);
});

test.each([
    [5, 4, 9],
    [5, -5, 0],
])('isEven(a, b) to a + b', (a, b, expected) => {
    expect(isEven(a, b)).toBe(expected);
})