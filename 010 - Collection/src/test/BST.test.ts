const { BST } = require('../ts/BST');

let bst = new BST();

describe('BST, init, clear and toArray', function () {
    test('method init with not array', function () {
        bst.clear();
        bst.init('test');
        expect(bst).toEqual({"root": null});
    })
    test('init array', function () {
        bst.init([5, 7, 8, 10, 1]);
        expect(bst.toArray()).toEqual([1, 5, 7, 8, 10]);
    })
    test('clear value', function () {
        bst.init([0, 3, 5]);
        bst.clear();
        expect(bst).toEqual({"root": null});
    })
    test('toArray', function () {
        bst.clear();
        bst.init([0, 3, 5]);
        expect(bst.toArray()).toEqual([0, 3, 5]);
    })
})

describe('BST, size', function () {
    test('get Size', function () {
        bst.clear();
        bst.init([0, 3, 5]);
        expect(bst.size()).toBe(3);
    })
})

describe('BST, print and search', function () {
    // test('print', function () {
    //     //
    // })
    test('search with empty init', function () {
        bst.clear();
        bst.init();
        expect(bst.search(4)).toBe(-1);
    })
    test('search unsuccessful', function () {
        bst.clear();
        bst.init([0, 3, 5]);
        expect(bst.search(4)).toBe(-1);
    })
    test('search successful', function () {
        bst.clear();
        bst.init([0, 3, 5]);
        expect(bst.search(5)).toEqual({"left": null, "right": null, "value": 5});
    })
})

describe('BST, width and height', function () {
    test('width with empty init', function () {
        bst.clear();
        bst.init();
        expect(bst.width()).toBe(-1);
    })
    test('get width', function () {
        bst.clear();
        bst.init([5, 3, 10, 8, 11, 2, 4]);
        expect(bst.width()).toBe(4);
    })
    test('height with empty init', function () {
        bst.clear();
        bst.init();
        expect(bst.height()).toBe(-1);
    })
    test('get height', function () {
        bst.clear();
        bst.init([5, 3, 10, 8, 11, 2, 4]);
        expect(bst.height()).toBe(3);
    })
    test('get height with (left node !== null)', function () {
        bst.clear();
        bst.init([5, 3, 10, 8, 11, 2, 4, 1]);
        expect(bst.height()).toBe(4);
    })
    test('get height (rigth node !==null)', function () {
        bst.clear();
        bst.init([5, 3, 10, 8, 11, 2, 4, 2]);
        expect(bst.height()).toBe(4);
    })
})

describe('BST, insert', function () {
    test('insert value', function () {
        bst.clear();
        bst.insert(5);
        expect(bst.toArray()).toEqual([5]);
    })
    test('insert with two value', function () {
        bst.clear();
        bst.insert(5);
        bst.insert(15);
        expect(bst.toArray()).toEqual([5, 15]);
    })
})

describe('BST, nodes and leaves', function () {
    test('get nodes with empty bst', function () {
        bst.clear();
        bst.init();
        expect(bst.nodes()).toBe(-1);
    })
    test('get one node', function () {
        bst.clear();
        bst.init([5, 3, 10]);
        expect(bst.nodes()).toBe(1);
    })
    test('get two nodes', function () {
        bst.clear();
        bst.init([5, 3, 10, 8, 11]);
        expect(bst.nodes()).toBe(2);
    })
    test('get leaves with empty bst', function () {
        bst.clear();
        bst.init();
        expect(bst.leaves()).toBe(-1);
    })
    test('leaves', function () {
        bst.clear();
        bst.init([5, 3, 10]);
        expect(bst.leaves()).toBe(2);
    })
})

describe('BST, reverse', function () {
    test('reverse', function () {
        bst.clear();
        bst.init([5, 3, 10, 8, 11]);
        bst.reverse();
        expect(bst.toArray()).toEqual([11, 10, 8, 5, 3]);
    }) 
})

describe('BST, minNode and maxNode', function () {
    test('minNode with empty bst', function () {
        bst.clear();
        bst.init();
        expect(bst.minNode()).toBe(-1);
    })
    test('minNode', function () {
        bst.clear();
        bst.init([5, 3, 10, 8, 11]);
        expect(bst.minNode()).toEqual({"left": null, "right": null, "value": 3});
    })
    test('maxNode with empty bst', function () {
        bst.clear();
        bst.init();
        expect(bst.maxNode()).toBe(-1);
    })
    test('maxNode', function () {
        bst.clear();
        bst.init([5, 3, 10, 8, 11]);
        expect(bst.maxNode()).toEqual({"left": null, "right": null, "value": 11});
    })
})

describe('BST, remove', function () {
    test('remove with empty init', function () {
        bst.clear();
        bst.init([]);
        expect(bst.remove(5)).toBe(-1);
    })
    test('remove 11 in bst', function () {
        bst.clear();
        bst.init([5, 3, 10, 8, 11]);
        bst.remove(11);
        expect(bst.toArray()).toEqual([3, 5, 8, 10]);
    })
    test('remove 10 in bst', function () {
        bst.clear();
        bst.init([5, 3, 10, 8, 11]);
        bst.remove(10);
        expect(bst.toArray()).toEqual([3, 5, 8, 11]);
    })
    test('remove first node', function () {
        bst.clear();
        bst.init([5, 3, 8, 11]);
        bst.remove(5);
        expect(bst.toArray()).toEqual([3, 8, 11]);
    })
    test('remove 2 in bst', function () {
        bst.clear();
        bst.init([5, 3, 8, 11, 2, 4, 1]);
        bst.remove(2);
        expect(bst.toArray()).toEqual([1, 3, 4, 5, 8, 11]);
    })
    test('remove 8 in bst', function () {
        bst.clear();
        bst.init([5, 3, 8, 2, 4, 11, 7, 10]);
        bst.remove(8);
        expect(bst.toArray()).toEqual([2, 3, 4, 5, 7, 10, 11]);
    })
})