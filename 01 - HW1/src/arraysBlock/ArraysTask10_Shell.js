//10.3. Отсортировать массив Shell sort.

function ShellSort(A) {
    if (typeof A === 'object' && A.length >= 1) {
        const n = A.length;
        let i = Math.floor(n/2);
        while (i > 0) {
            for (let j = 0; j < n; j++) {
                if (typeof A[j] !== 'number') {
                    return 'Incorrect input data';
                }
                let k = j, t = A[j];
                while (k >= i && A[k-i] > t) {
                    A[k] = A[k-i]; k -= i;
                }
                A[k] = t;
            }
            i = (i===2) ? 1 : Math.floor(i*5/11);
        }
        return A;
    } else {
        return 'Incorrect input data';
    }
}
module.exports = {ShellSort};