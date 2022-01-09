//4. Find the index of the maximum element of an array
function findIndMaxArrElement(arr) {
    if (arr.length === 1) {
        return `The index of maximum element of the array [${arr}] is [${arr}]`
    } else if (typeof arr === 'object' && arr.length >= 1) {
        let max = arr[0];
        let i_max;
        for (let i = 1; i < arr.length; i++) {
            if (typeof arr[i] !== 'number') {
                return 'Incorrect input data';
            }
            if (arr[i] > max) {
                max = arr[i];
                i_max = i;
            }
        }
        return `The index of maximum element of the array [${arr}] is [${i_max}]`
    } else {
        return 'Incorrect input data';
    }
}
module.exports = {findIndMaxArrElement};