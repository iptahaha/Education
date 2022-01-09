//3. Find the root of a natural number up to an integer (consider sequential selection and the binary search method)
//sequential selection:
function getRootSequential(num) {
    if (num <= 0 || typeof num !== 'number') {
        return 'Input positive number';
    }
    if (num === 1) {
        return 'Корень из 1 равен 1';
    }
    for (let i = 1;; i++) {
        if ((num - i*i) <= 1) {
            return `Корень из ${num} равен ${i}`;
        }
    }
}
//binary search method:
function getRooBinary (num) {
    if (num <= 0 || typeof num !== 'number') {
        return 'Input positive number';
    }
    if (num === 1) {
        return 'Корень из 1 равен 1';
    }
    let left = 1;
    let right = num;
    let middle = (left + right + 1) / 2;
    let square;
    while ((num - middle*middle) <= 0) {
        if (middle*middle > num) {
            right = middle;
        } else {
            left = middle;
        }
        square = middle;
        middle = (left + right + 1) / 2;
    }
    return `Корень из ${num} равен ${Math.round(square)}`;
}

module.exports = {getRooBinary, getRootSequential}