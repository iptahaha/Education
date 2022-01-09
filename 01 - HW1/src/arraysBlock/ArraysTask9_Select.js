//9.2. Отсортировать массив (выбором (Select)).

function getSelectSortArr(ArrSelect) {
    if (typeof ArrSelect === 'object' && ArrSelect.length >= 1) {
        let l = ArrSelect.length;
        for (let i = 0; i < l - 1; i++) {
            if (typeof ArrSelect[i] !== 'number') {
                return 'Incorrect input data';
            }
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
    } else {
        return 'Incorrect input data';
    }
}

module.exports = {getSelectSortArr};