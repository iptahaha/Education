const calcTheExpression = require('../Block1Task4');

test.each([
    [0, 0, 0, 3],
    [1, 1, 1, 6],
    [2, 2, 2, 11]
])('calcTheExpression(a, b, c) calk (max(a*b*c, a+b+c))+3', (a, b, c, expected) => {
    expect(calcTheExpression(a, b, c)).toBe(expected);
});