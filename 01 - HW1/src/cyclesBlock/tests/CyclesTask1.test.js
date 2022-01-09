const {calcSumOfEvenNum} = require('../CyclesTask1');

describe('Task_1. Find the sum of even numbers and their quantity in the range from 1 to 99.', function () {
    test('NO data', function () {
        expect(calcSumOfEvenNum()).toBe('Sum of even numbers (сумма чётных чисел): 2450\nQuantity of even numbers (количество чётных чисел): 49');
    })
})