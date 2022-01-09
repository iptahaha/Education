// 3. Принимая массив объектов и случайную строку. У объектов может быть ключ: «title» с разными значениями.
// Создайте алгоритм, который фильтрует массив, заданный как первый параметр, и возвращает массив объектов,
// которые содержат в своих заголовках заданную строку в качестве второго параметра (без учета регистра).

function findTitle(array, string) {
    if (typeof array === 'object' && typeof string === 'string') {
        let titles = [];
        for (let obj in array) {
            if (array[obj].hasOwnProperty('title')) {
                let prop = array[obj].title.toLowerCase();
                if (prop.includes(string.toLowerCase())) {
                    titles.push(array[obj]);
                }
            }
        }
        return titles;
    } else {
        return 'Incorrect input data!';
    }
}

module.exports = {findTitle};