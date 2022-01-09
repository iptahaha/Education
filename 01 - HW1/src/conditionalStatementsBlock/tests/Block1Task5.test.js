const getGradeByRating = require('../Block1Task5');

test.each([
    [95, 'Оценка - A'],
    [80, 'Оценка - B'],
    [70, 'Оценка - C'],
    [50, 'Оценка - D'],
    [30, 'Оценка - E'],
    [10, 'Оценка - F'],
    [0, 'Оценка - F'],
    [110, 'Введите корректные данные'],
    [-50, 'Введите корректные данные'],
    ['qwerty', 'Введите корректные данные']
])('getGradeByRating(rating) tobe assessment (A to F)', (rating, expected) => {
    expect(getGradeByRating(rating)).toBe(expected);
});