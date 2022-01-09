//10.1. Отсортировать массив Quick sort.
function QuickSort(A) {
    const l = A.length;
    for (let i = 0; i < l; i++) {
        if (typeof A[i] !== 'number') {
            return 'Incorrect input data';
        }
    }
    if (A.length === 0) return [];
    let left = [], right = [], p = A[0];
    for (let i = 1; i < A.length; i++)
     { if (A[ i ] < p) left[left.length] = A[ i ];
       else right[right.length] = A[ i ];
     }
    return QuickSort(left).concat( p,QuickSort(right) );
}

module.exports = {QuickSort};