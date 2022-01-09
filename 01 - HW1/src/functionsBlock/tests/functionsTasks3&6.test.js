const {getNumOfString} = require('../functionsTasks3&6');

describe('Task_3 and 6*.Вводим прописью число(0-999/ 0-999миллиардов), получаем число из цифр.', function () {
    test('VALID data: string "zero"', function () {
        expect(getNumOfString('zero')).toMatch(/The number "zero" in digits is - 0/);
    })
    test('VALID data: string "one"', function () {
        expect(getNumOfString('one')).toMatch(/The number "one" in digits is - 1/);
    })
    test('VALID data: string "ten"', function () {
        expect(getNumOfString('ten')).toMatch(/The number "ten" in digits is - 10/);
    })
    test('VALID data: string "eleven"', function () {
        expect(getNumOfString('eleven')).toMatch(/The number "eleven" in digits is - 11/);
    })
    test('VALID data: string "twenty seven"', function () {
        expect(getNumOfString('twenty seven')).toMatch(/The number "twenty seven" in digits is - 27/);
    })
    test('VALID data: string "one hundred"', function () {
        expect(getNumOfString('one hundred')).toMatch(/The number "one hundred" in digits is - 100/);
    })
    test('VALID data: string "one hundred one"', function () {
        expect(getNumOfString('one hundred one')).toMatch(/The number "one hundred one" in digits is - 101/);
    })
    test('VALID data: string "one hundred ten"', function () {
        expect(getNumOfString('one hundred ten')).toMatch(/The number "one hundred ten" in digits is - 110/);
    })
    test('VALID data: string "five hundred fifteen"', function () {
        expect(getNumOfString('five hundred fifteen')).toMatch(/The number "five hundred fifteen" in digits is - 515/);
    })
    test('VALID data: string "nine hundred ninety nine"', function () {
        expect(getNumOfString('nine hundred ninety nine')).toMatch(/The number "nine hundred ninety nine" in digits is - 999/);
    })
    test('VALID data: string "one thousand"', function () {
        expect(getNumOfString('one thousand')).toMatch(/The number "one thousand" in digits is - 1000/);
    })
    test('VALID data: string "seven hundred seventy seven thousand seven hundred seventy seven"', function () {
        expect(getNumOfString('seven hundred seventy seven thousand seven hundred seventy seven')).toMatch(/The number "seven hundred seventy seven thousand seven hundred seventy seven" in digits is - 777777/);
    })
    test('VALID data: string "one hundred one thousand"', function () {
        expect(getNumOfString('one hundred one thousand')).toMatch(/The number "one hundred one thousand" in digits is - 101000/);
    })
    test('VALID data: string "one hundred twenty three million four hundred fifty six thousand seven hundred eighty nine"', function () {
        expect(getNumOfString('one hundred twenty three million four hundred fifty six thousand seven hundred eighty nine')).toMatch(/The number "one hundred twenty three million four hundred fifty six thousand seven hundred eighty nine" in digits is - 123456789/);
    })
    test('VALID data: string "nine hundred ninety nine billion nine hundred ninety nine million nine hundred ninety nine thousand nine hundred ninety nine"', function () {
        expect(getNumOfString('nine hundred ninety nine billion nine hundred ninety nine million nine hundred ninety nine thousand nine hundred ninety nine')).toMatch('The number "nine hundred ninety nine billion nine hundred ninety nine million nine hundred ninety nine thousand nine hundred ninety nine" in digits is - 999999999999');
    })

    test('INVALID data: undefined', () => {
        expect(getNumOfString(undefined)).toBe('Пожалуйста, введите строку с положительным числом от 0 до 999 миллиардов!');
    })
})