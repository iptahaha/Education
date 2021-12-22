// 1.Составьте алгоритм, который считает, сколько времени вам нужно на приготовление яиц.
//     Правила:
// -Яйца варить 5 минут
// -Вместительность емкости не более 5 яиц одновременно

function getCookingTime (eggsAmount) {
    let result;
    const time = 5;
    const quantity = 5;
    let counter = 0;
    if (eggsAmount > 0) {
        while (eggsAmount > 0) {
            eggsAmount = eggsAmount - quantity;
            counter++;
        }
        result = counter * time;
    } else {
        result = 0;
    }
    return result;
}
// console.log(
//     getCookingTime(0),
//     getCookingTime(5),
//     getCookingTime(10))


// 2.Получая массив чисел. Все они либо нечетные, либо четные, кроме одного. Тебе нужно его найти.

function getNumber (array) {
    let result ;
    let oddArr = array.filter(number => number%2 ===0);
    let evenArr = array.filter(number => number%2 !==0);
    if (oddArr.length === 1) {
        result = oddArr[0];
    } else {result = evenArr[0];}
    return result;
}
// console.log(
// getNumber([1, 5, 7, 9, 15, 19, 777, -15, -11, 4, 9, 23, -17]), //returns 4
// getNumber([0, 2, 8, -4, 0, -122, 13, -4, 28, 12])) //returns 13


// 3. Принимая массив объектов и случайную строку. У объектов может быть ключ: «title» с разными значениями.
// Создайте алгоритм, который фильтрует массив, заданный как первый параметр, и возвращает массив объектов,
// которые содержат в своих заголовках заданную строку в качестве второго параметра (без учета регистра).

function findTitle(array, string) {
    let titles = []
    for (let obj in array) {
        if (array[obj].hasOwnProperty('title')) {
            let prop = array[obj].title.toLowerCase();
            if (prop.includes(string.toLowerCase())) {
                titles.push(array[obj]);
            }
        }
    }
    return titles;
}
let arr = [
    {title: 'Some title1'},
    {title: 'I like JS'},
    {user: 'This obj doesn’t have key title js'},
    {title: 'Js - is the best!'}
];
//console.log(findTitle(arr, 'js')); // return [{ title: 'I like JS'}, { title: 'Js - is the best!' }]


// 4. Принимая строку, ваша функция должна вернуть обьект, в котором ключи – символы строки,
// значение – количество повторений символов в строке

function countCharacters(string) {
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
}
// console.log(countCharacters('sparrow')); // should return {s: 1, p: 1, a: 1, r: 2, o: 1, w: 1}
// console.log(countCharacters('aabcddeffge')); // should return {a: 2, b: 1, c: 1, d: 2, e: 2, f: 2, g: 1}
// console.log(countCharacters('a 2ab !d')); // should return {a: 2, b:1, d:1, 2:1}


// 5. Принимая число, ваша функция должна найти следующий положительный палиндром большего размера.

function getNextPalindrome(number) {
    let result = number + 1;
    if (number <= 10) {
        return(11);
    }
    while (result.toString() !== result.toString().split('').reverse().join('')) {
        result++;
    }
    return(result);
}
// console.log(
// getNextPalindrome(7), // returns 11
// getNextPalindrome(99), //returns 101
// getNextPalindrome(132), // returns 141
// getNextPalindrome(888), // returns 898
// getNextPalindrome(999)); // returns 1001
