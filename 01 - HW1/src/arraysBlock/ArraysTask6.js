//6. Reverse an array
function getReverseArr(arr) {
    if (typeof arr === 'object' && arr.length >= 2) {
        let arrRevers = [];
        for (let i = arr.length - 1; i >= 0; i--) {
            arrRevers.push(arr[i]);
        }
        return `Реверс исходного массива : ${arrRevers}`;
    } else {
        return 'Incorrect input data';
    }
}

module.exports = {getReverseArr};