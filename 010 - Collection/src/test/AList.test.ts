const { AList } = require('../ts/AList');

let alist = new AList();

describe('AList', function () {
    test('add one value', function () {
        alist.add(1);
        expect(alist).toEqual({ "array": [1], "size": 1 });
    })
    test('clear', function () {
        alist.add(2);
        alist.add(2);
        alist.clear();
        expect(alist).toEqual({ "array": [], "size": 0 });
    })
    test('getSize', function () {
        alist.add(2);
        alist.add(2);
        expect(alist.getSize()).toBe(2);
    })
    test('set with - index', function () {
        alist.clear();
        alist.set(4, -1)
        expect(alist).toEqual({ "array": [], "size": 0 });
    })
    test('set add value', function () {
        alist.clear();
        alist.set(0, 0);
        alist.set(1, 1);
        expect(alist).toEqual({ "array": [0, 1], "size": 2 });
    })
    test('set overwriting value', function () {
        alist.set(2, 1);
        expect(alist).toEqual({ "array": [0, 2], "size": 2 });
    })
    test('get with - index', function () {
        alist.clear();
        expect(alist.get(0)).toBe(-1);
    })
    test('get value', function () {
        alist.clear();
        alist.add(10);
        alist.add(1);
        expect(alist.get(0)).toBe(10);
    })
    test('remove, value is exit', function () {
        alist.clear();
        alist.add(10);
        alist.add(1);
        expect(alist.remove(10)).toBe(10);
    })
    test('toArray', function () {
        alist.clear();
        alist.add(10);
        alist.add(1);
        expect(alist.toArray()).toEqual([10, 1]);
    })
    test('toString', function () {
        alist.clear();
        alist.add(10);
        alist.add(1);
        expect(alist.toString()).toBe('10 1');
    })
    test('constains with true answer', function () {
        alist.clear();
        alist.add(10);
        alist.add(1);
        expect(alist.constains(1)).toBe(true);
    })
    test('constains with false answer', function () {
        alist.clear();
        alist.add(10);
        alist.add(1);
        expect(alist.constains(11)).toBe(false);
    })
    test('minValue', function () {
        alist.clear();
        alist.add(10);
        alist.add(1);
        expect(alist.minValue()).toBe(1);
    })
    test('maxValue', function () {
        alist.clear();
        alist.add(10);
        alist.add(1);
        alist.add(15);
        expect(alist.maxValue()).toBe(15);
    })
    test('minIndex', function () {
        alist.clear();
        alist.add(10);
        alist.add(1);
        alist.add(15);
        expect(alist.minIndex()).toBe(1);
    })
    test('maxIndex', function () {
        alist.clear();
        alist.add(10);
        alist.add(1);
        alist.add(15);
        expect(alist.maxIndex()).toBe(2);
    })
    test('reverse', function () {
        alist.clear();
        alist.add(10);
        alist.add(1);
        alist.add(15);
        alist.reverse();
        expect(alist.toArray()).toEqual([15, 1, 10]);
    })
    test('halfReverse', function () {
        alist.clear();
        alist.add(10);
        alist.add(1);
        alist.add(15);
        alist.halfReverse();
        expect(alist.toArray()).toEqual([1, 15, 10]);
    })
    test('retainAll', function () {
        alist.clear();
        alist.add(10);
        alist.add(1);
        alist.add(15);
        alist.retainAll([5, 7, 1, 10]);
        expect(alist.toArray()).toEqual([10, 1, undefined]);
    })
    test('removeAll', function () {
        alist.clear();
        alist.add(10);
        alist.add(1);
        alist.add(15);
        alist.removeAll([1, 10]);
        expect(alist.toArray()).toEqual([undefined, undefined, 15]);
    })
    test('sort', function () {
        alist.clear();
        alist.add(90);
        alist.add(0);
        alist.add(18);
        alist.add(580);
        alist.sort();
        expect(alist.toArray()).toEqual([0, 18, 90, 580]);
    })
    test('print', function () {
        alist.clear();
        alist.add(10);
        alist.add(1);
        alist.add(15);
        alist.set(7, 5)
        expect(alist.print()).toBe('10 1 15 7');
    })
})