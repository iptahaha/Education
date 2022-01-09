// 2.Получая массив чисел. Все они либо нечетные, либо четные, кроме одного. Тебе нужно его найти.

function getNumber (array) {
    if (typeof  array === 'object') {
        let result ;
        let oddArr = array.filter(number => number%2 ===0);
        let evenArr = array.filter(number => number%2 !==0);
        if (oddArr.length === 1) {
            result = oddArr[0];
        } else {result = evenArr[0];}
        return result;
    } else {
        return 'Incorrect input data!';
    }
}

module.exports = {getNumber};