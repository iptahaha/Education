//4. Calculate the factorial of the number n. n! = 1*2*…*n-1*n
function calcNumFactorial(n) {
    if (n >= 1 && typeof n === 'number') {
        let fac = 1;
        for (let i = 0; i < n; i++){
            fac = fac * (n - i);
        }
        return `${n}! = ${fac}`;
    } else {
        return 'Incorrect input data!';
    }

}
module.exports = {calcNumFactorial};