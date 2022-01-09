//10.2. Отсортировать массив Merge sort.

function Merge(a,low,mid,high) { //Вспомогательная функция.
    let b = new Array(high+1-low);
    let h = low, i = 0, j = mid+1, k;
    while (h <= mid && j <= high )
     { if (a[h] <= a[j]){ b[ i ]=a[h]; h++; }
       else             { b[ i ]=a[j]; j++; }
       i++;
     }
    if (h > mid){ for (k = j; k <= high; k++){ b[ i ]=a[k]; i++; } }
    else        { for (k = h; k <= mid; k++){  b[ i ]=a[k]; i++; } }    
    for (k=0; k<=high-low; k++) a[k+low]=b[k];
    return a;
}
function MergeSort(A) { //Функция сортировки слиянием.
    if (typeof A !== 'object' || A.length < 1) {
        return 'Incorrect input data';
    }
    for (let i = 0; i < A.length; i++) {
        if (typeof A[i] !== 'number') {
            return 'Incorrect input data';
        }
    }
    function merge_sort(a,low,high)
     { if (low < high)
        { let mid = Math.floor((low+high)/2);
          merge_sort(a, low, mid);
          merge_sort(a, mid+1, high);
          Merge(a, low, mid, high);
        }
     }
    let n = A.length;
    merge_sort(A, 0, n-1);
    return A;
}

module.exports = {MergeSort};