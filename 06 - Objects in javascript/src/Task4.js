// 4. Принимая строку, ваша функция должна вернуть обьект, в котором ключи – символы строки, значение – количество повторений символов в строке

function countCharacters(string) {
    if (typeof string === 'string' && string.length > 1) {
        let result = {};
        string = string.replace(/\W/g, '').split('');
        string.forEach((sym) => {
            if (result[sym] === undefined) {
                result[sym] = 1;
            } else {
                result[sym]++;
            }
        })
        return result;
    } else {
        return 'Incorrect input data!';
    }
}

module.exports = {countCharacters};