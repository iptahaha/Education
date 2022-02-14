export interface IList{
    clear: () => void
    add: (item) => void
    getSize: () => number
    set: (item, idx) => void
    get: (idx) => number
    remove: (item) => void
    toArray: () => number[]
    toString: () => string
    constains: (item) => boolean
    minValue: () => number
    maxValue: () => number
    minIndex: () => number
    maxIndex: () => number
    reverse: () => void
    halfReverse: () => void
    retainAll: (items: number[]) => void
    removeAll: (items: number[]) => void
    sort: () => void
    print: () => void
}

export interface ITree{
    init: (array) => void;
    clear: () => void;
    size: () => number;
    insert: (value) => void;
    print: (node, cb) => void;
    toArray: () => number[];
    search: (value) => any;
    width: () => number;
    height: () => number;
    nodes: () => number;
    leaves: () => number;
    reverse: () => void;
    minNode: () => any;
    maxNode: () => any;
    remove: (value) => any;
}