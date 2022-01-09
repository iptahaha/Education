//9.3. Отсортировать массив (вставками (Insert)).

function getInsertSortArr(ArrIns) {
    if (typeof ArrIns === 'object' && ArrIns.length >= 1) {
        let l = ArrIns.length;
        for (let i = 1; i < l; i++) {//Допустим, что 0-элемент массива уже отсортирован и стоит на своём месте
            if (typeof ArrIns[i] !== 'number') {
                return 'Incorrect input data';
            }
            let current = ArrIns[i];//Присвоим переменной current значение элемента массива, которому мы ищем место в текущей итерации (исследуемый элемент)
            let j = i;
            while (j > 0 && ArrIns[j - 1] > current) {//Если исследуемый элемент меньше впередистоящего, меняем их местами
                ArrIns[j] = ArrIns[j - 1];
                j--;
            }
            ArrIns[j] = current;
        }
        return ArrIns;
    } else {
        return 'Incorrect input data';
    }
}

module.exports = {getInsertSortArr};