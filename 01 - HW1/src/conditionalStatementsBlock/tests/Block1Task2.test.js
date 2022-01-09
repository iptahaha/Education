const showPointLocation = require('../Block1Task2');

test.each([
    [5, 5, 'Точка лежит в I четверти'],
    [5, -5, 'Точка лежит в IV четверти'],
    [-5, -5, 'Точка лежит в III четверти'],
    [-5, 5, 'Точка лежит во II четверти'],
    [5, 0, 'Точка лежит на оси координат'],
    [0, 5, 'Точка лежит на оси координат'],
    [0, 0, 'Точка лежит в центре координат']
])('showPointLocation(x, y) in which quarter', (x, y, expected) => {
    expect(showPointLocation(x, y)).toBe(expected);
});