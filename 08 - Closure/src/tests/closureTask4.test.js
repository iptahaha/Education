const {isCached} = require('../closureTask4');

describe('Task4. Функция кеш',function () {
    test('VALID data: first call ("foo", "bar")',function () {
        expect(isCached('foo', 'bar')).toBe('Counted and put in cache: foobar');
    })
    test('VALID data: second call ("foo", "bar")',function () {
        expect(isCached('foo', 'bar')).toBe('From cache: foobar');
    })
    test('VALID data: third call ("foo", "bar")',function () {
        expect(isCached('foo', 'bar')).toBe('From cache: foobar');
    })
    test('VALID data: first call new data ("foo", "hoho")',function () {
        expect(isCached('foo', 'hoho')).toBe('Counted and put in cache: foohoho');
    })
    test('VALID data: second call new data ("foo", "hoho")',function () {
        expect(isCached('foo', 'hoho')).toBe('From cache: foohoho');
    })
})