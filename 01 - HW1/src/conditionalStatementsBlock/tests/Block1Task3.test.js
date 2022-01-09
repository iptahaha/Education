const getSumOfPositivNum = require('../Block1Task3');

test.each([
    [5, 5, 5, 15],
    [0, 0, 0, 0]
])('getSumOfPositivNum(n1, n2, n3) tobe positive n1+n2+n3', (n1, n2, n3, expected) => {
    expect(getSumOfPositivNum(n1, n2, n3)).toBe(expected);
});

test.each([
    [5, 5, -3, 10],
    [5, -3, 5, 10],
    [-3, 5, 5, 10]
])('getSumOfPositivNum(n1, n2, n3) tobe positive just n1+n2', (n1, n2, n3, expected) => {
    expect(getSumOfPositivNum(n1, n2, n3)).toBe(expected);
});

test.each([
    [5, -3, -3, 5],
    [-3, -3, 5, 5],
    [-3, 5, -3, 5]
])('getSumOfPositivNum(n1, n2, n3) tobe positive just n1', (n1, n2, n3, expected) => {
    expect(getSumOfPositivNum(n1, n2, n3)).toBe(expected);
});