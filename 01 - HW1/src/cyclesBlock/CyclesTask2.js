//2. Is it a prime number to check?
function isPrimeNum(x) {
    if (typeof x === 'number') {
        if (x === 0 || x === 1) {
            return 'It is no prime neither composite number'
        }
        let check = 'Prime number (простое число)';
        for (let i = 2; i < x; i ++) {
            if (x % i === 0) {
                check = 'Composite Number (составное число)';
                break;
            }
        }
        return check;
    } else {
        return 'Invalid input data!';
    }
}
module.exports = {isPrimeNum};