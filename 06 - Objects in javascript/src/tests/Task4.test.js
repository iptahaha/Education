const {countCharacters} = require("../Task4");

describe('Task_4. Принимая строку, ваша функция должна вернуть объект, в котором ключи – символы строки, значение – количество повторений символов.', function () {
    test('VALID data: string "sparrow', function () {
        expect(countCharacters('sparrow')).toStrictEqual({s: 1, p: 1, a: 1, r: 2, o: 1, w: 1});
    })
    test('VALID data: string "aabcddeffge', function () {
        expect(countCharacters('aabcddeffge')).toStrictEqual({a: 2, b: 1, c: 1, d: 2, e: 2, f: 2, g: 1});
    })
    test('VALID data: string "a 2ab !d"', () => {
        expect(countCharacters('a 2ab !d')).toStrictEqual({a: 2, b:1, d:1, 2:1});
    })
    test('VALID data: string "hohoho"', () => {
        expect(countCharacters('hohoho')).toStrictEqual({"h": 3, "o": 3});
    })

    test('INVALID data: symbol "#"', () => {
        expect(countCharacters('#')).toBe('Incorrect input data!');
    })

    test('INVALID data: undefined', () => {
        expect(countCharacters(undefined)).toBe('Incorrect input data!');
    })
})