//9.1. Отсортировать массив (пузырьком (Bubble)).

function getBubbleSortArr(ArrBubble) {
    if (typeof ArrBubble === 'object' && ArrBubble.length >= 1) {
        let l = ArrBubble.length;
        for (let i = 0; i < l - 1; i++) {
            if (typeof ArrBubble[i] !== 'number') {
                return 'Incorrect input data';
            }
            for (let j = 0; j < l - 1; j++) {//При полном прохождении цикла, в последнюю ячейку обрабатываемого массива "всплывает" самый большой элемент
                if (ArrBubble[j] > ArrBubble[j + 1]) {//Сравниваем два элемент массива, идущих подряд
                    let unit = ArrBubble[j];
                    ArrBubble[j] = ArrBubble[j + 1];//Если элементы идут не по порядку, меняем их местами
                    ArrBubble[j + 1] = unit;
                }
            }
        }
        return ArrBubble;
    } else {
        return 'Incorrect input data';
    }
}

module.exports = {getBubbleSortArr};