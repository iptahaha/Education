import { IList } from "./types";

class Node{
    value: number;
    next: Node;
    constructor(value: number, next?: Node) {
        this.value = value;
        this.next = next || null;
    }
}

export class LList implements IList{
    private root: null | Node;
    private size: number;
    constructor() {
        this.root = null;
        this.size = 0;
    }

    clear(): void{
        this.root = null;
    };

    add(item): void{
        const node = new Node(item, null);
        
        if (!this.root) {
            this.root = node;
        } else {
            let temp = this.root;

            while (temp.next !== null) {
                temp = temp.next;
            }
            temp.next = node;
        }

        this.size++;
    };

    getSize(): number{
        let count = 0;
        let temp = this.root;

        while (temp) {
            count++;
            temp = temp.next;
        }

        return count;
    };

    set(item: any, idx: any): void{
        const node = new Node(item, null); 
        let temp = this.root;
        let count = 0;

        if (idx < 0 || idx >= this.size) {
            return;
        } else if (this.getSize() === 0) {
            node.next = temp;
            this.root = node;
            this.size++;
        } else{
            while (temp !== null) {
                if (count === idx) {
                    temp.value = item;
                } 
                temp = temp.next;
                count++;
            }
        }
    };

    get(idx: any): number{
        if (idx < 0 || idx >= this.size) {
            return -1;
        }

        let temp = this.root;
        let count = 0;

        while (temp !== null) {
            if (count === idx) {
                return temp.value;
            }
            temp = temp.next;
            count++;
        }
    };
    remove(item: any): number{
        let temp = this.root;
        let tempNull = null;

        while (temp !== null) {
            if (temp.value === item) {
                let removeItem = temp.value;
                this.root = temp.next;
                this.size--;
                return removeItem;
            } else {
                tempNull = temp;
                temp = temp.next;
            }
        }
    };

    toArray(): number[]{
        const arr = [];
        let temp = this.root;

        while (temp) {
            arr[arr.length] = temp.value;
            temp = temp.next;
        }

        return arr;
    };

    toString(): string{
        let result = ``;
        let temp = this.root;

        while (temp) {
            result = `${result} ${temp.value}`;
            temp = temp.next;
        }

        return result.trim();
    };

    constains(item: any): boolean{
        let temp = this.root;

        while (temp !== null) {
            if (temp.value === item) {
                return true;
            }
            temp = temp.next;
        }

        return false;
    };

    minValue(): number{
        let temp = this.root;
        let minValue = this.root.value;

        while (temp !== null) {
            if (minValue > temp.value) {
                minValue = temp.value;
            }
            temp = temp.next;
        }
        
        return minValue;
    };

    maxValue(): number{
        let temp = this.root;
        let maxValue = this.root.value;

        while (temp !== null) {
            if (maxValue < temp.value) {
                maxValue = temp.value;
            }
            temp = temp.next;
        }

        return maxValue;
    };

    minIndex(): number{
        let temp = this.root;
        let minValue = this.root.value;
        let ind = 0;
        let count = 0;

        while (temp !== null) {
            if (minValue > temp.value) {
                minValue = temp.value;
                ind = count;
            }
            count++;
            temp = temp.next;
        }

        return ind;
    };

    maxIndex(): number{
        let temp = this.root;
        let maxValue = this.root.value;
        let ind = 0;
        let count = 0;

        while (temp !== null) {
            if (maxValue < temp.value) {
                maxValue = temp.value;
                ind = count;
            }
            count++;
            temp = temp.next;
        }

        return ind;
    };

    reverse(): void{
        let array = this.toArray();
        let newArray = [];

        for (let i = 0; i < array.length; i++){
            newArray[i] = array[(array.length - 1) - i];
        }

        this.clear();

        for (let i = 0; i < newArray.length; i++) {
            this.add(newArray[i]);
        }
    };

    halfReverse(): void{
        let array = this.toArray();
        let halfFirst = Math.floor(array.length / 2);
        let halfSecond = array.length - halfFirst;
        let newArray = [];

        for (let i = 0; i < halfSecond; i++) {
            newArray[i] = array[i + halfFirst];
        }

        for (let i = 0; i < halfFirst; i++) {
            newArray[i + halfSecond] = array[i];
        }
        
        this.clear();

        for (let i = 0; i < newArray.length; i++) {
            this.add(newArray[i]);
        }
    };

    retainAll(items: number[]): void{
        if (items.length === 0) {
            return;
        }

        let tempArray = [];

        for (let i = 0; i < this.size; i++){
            let temp = this.root;
            while (temp !== null) {
                if (temp.value == items[i]) {
                    tempArray[tempArray.length] = temp.value;
                }
                temp = temp.next;
            }
        }

        this.clear();

        for (let i = 0; i < tempArray.length; i++) {
            this.add(tempArray[i]);
        }
    };

    removeAll(items: number[]): void{
        if (items.length < 1) {
            return;
        }

        let temp = this.root;

        for (let i = 0; i < this.getSize(); i++){
            while (temp !== null) {
                if (temp.value === items[i]) {
                    this.remove(items[i]);
                }
                temp = temp.next;
            }
        }
    };
    sort(): void{
        const arrayAnswer: number[] = mergeSort(this.toArray());

        function merge(left, right) {
            let arr = [];
            while (left.length && right.length) {
                if (left[0] < right[0]) {
                    arr.push(left.shift());
                } else {
                    arr.push(right.shift());
                }
            }

            return [ ...arr, ...left, ...right ]
        }

        function mergeSort(arr): number[]{
            const half = arr.length / 2;
            if(arr.length < 2){
                return arr;
            }
            const left = arr.splice(0, half);

            return merge(mergeSort(left), mergeSort(arr));
        }

        this.clear();

        for (let i = 0; i < arrayAnswer.length; i++) {
            this.add(arrayAnswer[i]);
        }
    };
    print(): string{
        let temp = this.root;
        // while (temp) {
        //     console.log(temp.value);
        //     temp = temp.next;
        // }

        // for tests
        let str = ``;
        while (temp) {
            str = `${str} ${temp.value}`;
            temp = temp.next;
        }

        return str.trim();
    };    
}