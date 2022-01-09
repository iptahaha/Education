//7. Count the number of odd elements of the array
function countOddElemInArr(arr) {
    if (typeof arr === 'object' && arr.length >= 1) {
        let oddNum = 0;
        for (let i = 0; i < arr.length; i++) {
            if (typeof arr[i] !== 'number') {
                return 'Incorrect input data';
            }
            if (arr[i]%2 !== 0) {
                oddNum ++;
            }
        }
        if (oddNum === 0) {
            return `В массиве нет нечётных элементов`;
        } else {
            return `Количество нечётных элементов массива - ${oddNum}`;
        }
    } else {
        return 'Incorrect input data';
    }
}

module.exports = {countOddElemInArr};