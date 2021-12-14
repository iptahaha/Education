//1. Find the minimum element of an array
function findMinArrElement(arr) {
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return `The minimum element of the array [${arr}] is [${min}]`
}

//2. Find the maximum element of an array
function findMaxArrElement(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return `The maximum element of the array [${arr}] is [${max}]`
}

//3. Find the index of the minimum element of an array
function findIndMinArrElement(arr) {
    let min = arr[0];
    let i_min;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
            i_min = i;
        }
    }
    return `The index of minimum element of the array [${arr}] is [${i_min}]`
}

//4. Find the index of the maximum element of an array
function findIndMaxArrElement(arr) {
    let max = arr[0];
    let i_max;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
            i_max = i;
        }
    }
    return `The index of maximum element of the array [${arr}] is [${i_max}]`
}

//5. Calculate the sum of the array elements wih an odd index
function calcSumOfArrOddIndex(arr) {
    let sum = 0;
    for (let i = 1; i < arr.length; i+=2) {
        sum = sum + arr[i];
        //i = i + 2;
    }
    return `Сумма элементов массива с нечетными индексами - ${sum}`;
}

//6. Reverse an array
function getReverseArr(arr) {
    let arrRevers = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        arrRevers.push(arr[i]);
    }
    return `Реверс исходного массива : ${arrRevers}`;
}

//7. Count the number of odd elements of the array
function countOddElemInArr(arr) {
    let oddNum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]%2 !== 0) {
            oddNum ++;
        }
    }
    return `Количество нечетных элементов массива - ${oddNum}`;
}

//8. Swap the first and the second halves of the array
function swapArrHalves(arr) {
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
}

//9. Отсортировать массив (пузырьком (Bubble), выбором (Select), вставками (Insert))

//Bubble (по возрастанию). Суть алгоритма пузырьковой сортировки состоит в сравнении соседних элементов и их обмене, если они находятся не в надлежащем порядке.
function getBubbleSortArr(ArrBubble) {
    let l = ArrBubble.length;
    for (let i = 0; i < l - 1; i++) {
        for (let j = 0; j < l - 1; j++) {//При полном прохождении цикла, в последнюю ячейку обрабатываемого массива "всплывает" самый большой элемент
            if (ArrBubble[j] > ArrBubble[j + 1]) {//Сравниваем два элемент массива, идущих подряд
                let unit = ArrBubble[j];
                ArrBubble[j] = ArrBubble[j + 1];//Если элементы идут не по порядку, меняем их местами
                ArrBubble[j + 1] = unit;
            }
        }
    }
    return ArrBubble;
}

//Select (по возрастанию). Суть в поиске наименьшего/наибольшего элемента в списке и перемещении его в окончательную позицию в отсортированном массиве
function getSelectSortArr(ArrSelect) {
    let l = ArrSelect.length;
    for (let i = 0; i < l - 1; i++) {
        let indexMin = i;//Присваиваем переменной IndexMin значение индекса минимального элемента массива. Принимаем i-элемент за минимальный
        for (let j = i + 1; j < l; j++) {//ищем минимальное значение в массиве
            if (ArrSelect[j] < ArrSelect[indexMin]) {
                indexMin = j;
            }
        }
        let temp = ArrSelect[i];
        ArrSelect[i] = ArrSelect[indexMin];
        ArrSelect[indexMin] = temp;
    }
    return ArrSelect;
}

//Insert (по возрастанию). Выбирается один из элементов массива и вставляется на нужную позицию, сравнивая с элементами отсортированной части массива, пока эл-ты неотсорт. части не будут исчерпаны
function getInsertSortArr(ArrIns) {
    let l = ArrIns.length;
    for (let i = 1; i < l; i++) {//Допустим, что 0-элемент массива уже отсортирован и стоит на своём месте
        let current = ArrIns[i];//Присвоим переменной current значение элемента массива, которому мы ищем место в текущей итерации (исследуемый элемент)
        let j = i;
        while (j > 0 && ArrIns[j - 1] > current) {//Если исследуемый элемент меньше впередистоящего, меняем их местами
            ArrIns[j] = ArrIns[j - 1];
            j--;
        }
        ArrIns[j] = current;
    }
    return ArrIns;
}

//10. Отсортировать массив (Quick, Merge, Shell, Heap)

//Quick sort (по возрастанию).
function QuickSort(A) {
    if (A.length === 0) return [];
    let left = [], right = [], p = A[0];
    for (let i = 1; i < A.length; i++)
     { if (A[ i ] < p) left[left.length] = A[ i ];
       else right[right.length] = A[ i ];
     }
    return QuickSort(left).concat( p,QuickSort(right) );
}

//Merge sort (по возрастанию).
function Merge(a,low,mid,high)//Вспомогательная функция.
{
    var b = new Array(high+1-low), h, i, j = mid+1, k, h = low, i = 0;
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
function MergeSort(A)//Функция сортировки слиянияем.
{
    function merge_sort(a,low,high)
     { if (low < high)
        { var mid = Math.floor((low+high)/2);
          merge_sort(a, low, mid);
          merge_sort(a, mid+1, high);
          Merge(a, low, mid, high);
        }
     }
    var n = A.length;
    merge_sort(A, 0, n-1);
    return A;
}

//Shell sort (по возрастанию).
function ShellSort(A)
{
    var n = A.length, i = Math.floor(n/2);
    while (i > 0)
     { for (var j = 0; j < n; j++)
        { var k = j, t = A[j];
          while (k >= i && A[k-i] > t)
           { A[k] = A[k-i]; k -= i; }
          A[k] = t;
        }
      i = (i===2) ? 1 : Math.floor(i*5/11);
     }
    return A;
}

//Heap sort (по возрастанию).
function HeapSort(A) 
{
    if (A.length === 0) return [];
    var n = A.length, i = Math.floor(n/2), j, k, t;
    while (true)
    { if (i > 0) t = A[--i];
      else { n--;
             if (n === 0) return A;
             t = A[n];  A[n] = A[0];
           }        
      j = i;  k = j*2+1;
      while (k < n)
       { if (k+1 < n && A[k+1] > A[k]) k++;
         if (A[k] > t)
          { A[j] = A[k];  j = k;  k = j*2+1; }
         else break;
       }
      A[j] = t; 
    }
}