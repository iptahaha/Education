//3. Find the index of the minimum element of an array
function findIndMinArrElement(arr) {
    if (arr.length === 1) {
        return `The index of minimum element of the array [${arr}] is [${arr}]`;
    } else if (typeof arr === 'object' && arr.length >= 1) {
        let min = arr[0];
        let i_min = [];
        for (let i = 1; i < arr.length; i++) {
            if (typeof arr[i] !== 'number') {
                return 'Incorrect input data';
            }
            if (arr[i] <= min) {
                min = arr[i];
                i_min.push(i);
            }
        }
        return `The index of minimum element of the array [${arr}] is [${i_min}]`
    } else {
        return 'Incorrect input data';
    }
}

module.exports = {findIndMinArrElement};