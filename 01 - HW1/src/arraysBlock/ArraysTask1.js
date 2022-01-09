//1. Find the minimum element of an array
function findMinArrElement(arr) {
    if (typeof arr === 'object' && arr.length >= 1) {
        let min = arr[0];
        for (let i = 1; i < arr.length; i++) {
            if (typeof arr[i] !== 'number') {
                return 'Incorrect input data';
            }
            if (arr[i] < min) {
                min = arr[i];
            }
        }
        return `The minimum element of the array [${arr}] is [${min}]`
    } else {
        return 'Incorrect input data';
    }
}
module.exports = {findMinArrElement};