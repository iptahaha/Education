const { LList } = require('../ts/LList');

let llist = new LList();

describe('llist', function () {
    test('add one value', function () {
        llist.add(1);
        expect(llist.toArray()).toEqual([1]);
    })
    test('clear', function () {
        llist.add(2);
        llist.add(2);
        llist.clear();
        expect(llist.toArray()).toEqual([]);
    })
    test('getSize', function () {
        llist.clear();
        llist.add(2);
        llist.add(5);
        expect(llist.getSize()).toBe(2);
    })
    test('set add value with  minus index', function () {
        llist.clear();
        llist.set(2, -1);
        expect(llist.toArray()).toEqual([]);
    })
    test('set add value', function () {
        llist.clear();
        llist.set(2, 0);
        expect(llist.toArray()).toEqual([2]);
    })
    test('set overwriting value', function () {
        llist.clear();
        llist.add(1);
        llist.add(2);
        llist.add(3);
        llist.set(12, 2)
        expect(llist.toArray()).toEqual([1, 2, 12]);
    })
    
    test('get with - index', function () {
        llist.clear();
        expect(llist.get(-1)).toBe(-1);
    })
     test('get with - index more then size', function () {
        llist.clear();
        expect(llist.get(10)).toBe(-1);
    })
    test('get value', function () {
        llist.clear();
        llist.add(10);
        llist.add(1);
        expect(llist.get(0)).toBe(10);
    })
     test('get last value', function () {
        llist.clear();
        llist.add(10);
        llist.add(1);
        expect(llist.get(1)).toBe(1);
     })
    test('remove, value is not found', function () {
        llist.clear();
        llist.add(10);
        llist.add(1);
        expect(llist.remove(11)).toBe(undefined);
    })
    test('remove, value is exit', function () {
        llist.clear();
        llist.add(10);
        llist.add(1);
        expect(llist.remove(10)).toBe(10);
    })
    test('remove last value', function () {
        llist.clear();
        llist.add(10);
        llist.add(1);
        llist.add(11);
        expect(llist.remove(11)).toBe(11);
    })
    test('toArray', function () {
        llist.clear();
        llist.add(10);
        llist.add(1);
        expect(llist.toArray()).toEqual([10, 1]);
    })
    test('toString', function () {
        llist.clear();
        llist.add(10);
        llist.add(1);
        expect(llist.toString()).toBe('10 1');
    })
    test('constains with true answer', function () {
        llist.clear();
        llist.add(10);
        llist.add(1);
        expect(llist.constains(1)).toBe(true);
    })
    test('constains with false answer', function () {
        llist.clear();
        llist.add(10);
        llist.add(1);
        expect(llist.constains(11)).toBe(false);
    })
    test('minValue', function () {
        llist.clear();
        llist.add(10);
        llist.add(1);
        expect(llist.minValue()).toBe(1);
    })
    test('maxValue', function () {
        llist.clear();
        llist.add(10);
        llist.add(1);
        llist.add(15);
        expect(llist.maxValue()).toBe(15);
    })
    test('minIndex', function () {
        llist.clear();
        llist.add(10);
        llist.add(1);
        llist.add(15);
        expect(llist.minIndex()).toBe(1);
    })
    test('maxIndex', function () {
        llist.clear();
        llist.add(10);
        llist.add(1);
        llist.add(15);
        expect(llist.maxIndex()).toBe(2);
    })
    test('reverse', function () {
        llist.clear();
        llist.add(10);
        llist.add(1);
        llist.add(15);
        llist.reverse();
        expect(llist.toArray()).toEqual([15, 1, 10]);
    })
    test('halfReverse', function () {
        llist.clear();
        llist.add(10);
        llist.add(1);
        llist.add(15);
        llist.halfReverse();
        expect(llist.toArray()).toEqual([1, 15, 10]);
    })
    test('retainAll with empty array', function () {
        llist.clear();
        llist.add(10);
        llist.add(1);
        llist.add(15);
        llist.retainAll([]);
        expect(llist.toArray()).toEqual([10, 1, 15]);
    })
    test('retainAll', function () {
        llist.clear();
        llist.add(10);
        llist.add(1);
        llist.add(15);
        llist.retainAll([5, 7, 10, 15]);
        expect(llist.toArray()).toEqual([10, 15]);

    })
     test('removeAll with empty array', function () {
        llist.clear();
        llist.add(10);
        llist.add(1);
        llist.add(15);
        llist.removeAll([]);
        expect(llist.toArray()).toEqual([10, 1, 15]);
    })
    test('removeAll', function () {
        llist.clear();
        llist.add(10);
        llist.add(1);
        llist.add(15);
        llist.removeAll([1, 33, 10]);
        expect(llist.toArray()).toEqual([15]);
    })
    test('sort', function () {
        llist.clear();
        llist.add(90);
        llist.add(0);
        llist.add(18);
        llist.add(580);
        llist.sort();
        expect(llist.toArray()).toEqual([0, 18, 90, 580]);
    })
    test('print', function () {
        llist.clear();
        llist.add(10);
        llist.add(1);
        llist.add(15);
        expect(llist.print()).toBe('10 1 15');
    })
})