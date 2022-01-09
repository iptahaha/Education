/* 2. Напишите функцию, которая получает два бесконечных числа в виде строк.
Вы должны вернуть результат суммы этих двух чисел в виде строки.
Математическая работа с этими двумя числами недоступна. Не используйте BigInt.
getSum(‘123’, ‘324’) -> ‘447’
getSum(‘111111111111111111111111111111111111111111111111111’, ’23333333333333333333333333333333333333333333333333’) -> ‘3444444.......4444444’ */

function getSum(x, y) {
    if (typeof x === 'string' && typeof y === 'string') {
        let xArr = makeNumArr(x);
        let yArr = makeNumArr(y);

        difference(xArr, yArr);

        function difference (Arr1, Arr2) {
            const l1 = Arr1.length;
            const l2 = Arr2.length;
            let diff = (l1 - l2);
            if (diff === 0) {
                return true;
            } else if (diff > 0) {
                Arr2.length = l1;
                let i = l1 - diff;
                for (i; i < l1; i++) {
                    Arr2[i] = 0;
                }
            } else {
                difference(Arr2, Arr1);
            }
        }

        const sumArr = xArr.map(function (xValue, ind) {
            return xValue + yArr[ind];
        });

        function makeNumArr (str) {
            const strArr = str.split('');
            return strArr.map(Number);
        }
        return sumArr.join('');
    } else {
        return 'Incorrect input data!'
    }
}

module.exports = {getSum};
// console.log(getSum('123', '324'));
// console.log(getSum('111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111',
// '233333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333'));