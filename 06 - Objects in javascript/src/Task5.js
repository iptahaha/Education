// 5. Принимая число, ваша функция должна найти следующий положительный палиндром большего размера.

function getNextPalindrome(number) {
    if (typeof number === 'number' && number >= 0) {
        let result = number + 1;
        if (number <= 10) {
            return(11);
        }
        while (result.toString() !== result.toString().split('').reverse().join('')) {
            result++;
        }
        return(result);
    } else {
        return 'Incorrect input data!';
    }
}

module.exports = {getNextPalindrome};
