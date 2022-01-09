//8. Swap the first and the second halves of the array
function swapArrHalves(arr) {
    if (typeof arr === 'object' && arr.length >= 2) {
        let arrSwap = arr;
        let arrHelp = [];
        for (let i = 0; i <= arr.length/2; i++) {
            arrHelp.push(arrSwap.shift());
        }
        if (arrHelp.length < arrSwap.length) {
            arrHelp.unshift(arrSwap.shift());
        }
        let l = arrHelp.length;
        for (let i = 0; i < l; i++) {
            arrSwap.push(arrHelp[i]);
        }
        return `Пересобранный массив: ${arrSwap}`;
    } else {
        return 'Incorrect input data';
    }
}

module.exports = {swapArrHalves};