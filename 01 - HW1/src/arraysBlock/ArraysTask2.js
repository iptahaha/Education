//2. Find the maximum element of an array
function findMaxArrElement(arr) {
    if (typeof arr === 'object' && arr.length >= 1) {
        let max = arr[0];
        for (let i = 1; i < arr.length; i++) {
            if (typeof arr[i] !== 'number') {
                return 'Incorrect input data';
            }
            if (arr[i] > max) {
                max = arr[i];
            }
        }
        return `The maximum element of the array [${arr}] is [${max}]`
    } else {
        return 'Incorrect input data';
    }
}
module.exports = {findMaxArrElement};