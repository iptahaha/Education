const {findTitle} = require('../Task3');

describe('Task_3. Создайте алгоритм, который фильтрует массив по правилам.', function () {
    test('VALID data: all odd, one even', function () {
        expect(findTitle([
            {title: 'Some title1'},
            {title: 'I like JS'},
            {user: 'This obj doesn’t have key title js'},
            {title: 'Js - is the best!'}
        ], 'js')).toStrictEqual([{ title: 'I like JS'}, { title: 'Js - is the best!' }]);
    })

    test('INVALID data: one argument object(correct), another number -77', () => {
        expect(findTitle([
            {title: 'Some title1'},
            {title: 'I like JS'},
            {user: 'This obj doesn’t have key title js'},
            {title: 'Js - is the best!'}
        ],-77)).toBe('Incorrect input data!');
    })
    test('INVALID data: symbol "#" and string "js"', () => {
        expect(findTitle('#', 'js')).toBe('Incorrect input data!');
    })
    test('INVALID data: string "hohoho" and string "js"', () => {
        expect(findTitle('hohoho', 'js')).toBe('Incorrect input data!');
    })
    test('INVALID data: undefined', () => {
        expect(findTitle(undefined)).toBe('Incorrect input data!');
    })
})
