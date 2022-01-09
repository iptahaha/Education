const {getPostsByAuthor, listOfPosts} = require('../closureTask3');

describe('Task3. Функция возвращает количество сообщений с автором из аргумента функции и комментариев с тем же автором.', function () {
    test('VALID data: listOfPosts, "Rimus"', function () {
        expect(getPostsByAuthor(listOfPosts, 'Rimus')).toEqual([1, 3]);
    })
    test('VALID data: listOfPosts, "Ivanov"', function () {
        expect(getPostsByAuthor(listOfPosts, 'Ivanov')).toEqual([2, 0]);
    })
    test('VALID data: empty list [], "Rimus"', function () {
        expect(getPostsByAuthor([], 'Rimus')).toBe('There is no any posts!');
    })
    test('VALID data: listOfPosts, and non-listed author "Hulio"', function () {
        expect(getPostsByAuthor(listOfPosts, 'Hulio')).toEqual([0, 0]);
    })

    test('INVALID data: number -77, "Rimus"', () => {
        expect(getPostsByAuthor(-77, 'Rimus')).toBe('Incorrect input data!');
    })
    test('INVALID data: listOfPosts, number -77', () => {
        expect(getPostsByAuthor(listOfPosts,-77)).toBe('Incorrect input data!');
    })
    test('INVALID data: one string argument "blablabla"', () => {
        expect(getPostsByAuthor('#')).toBe('Incorrect input data!');
    })
    test('INVALID data: undefined', () => {
        expect(getPostsByAuthor(undefined)).toBe('Incorrect input data!');
    })
})