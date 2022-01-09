const {findPointsDistance} = require('../functionsTask4');

describe('Task_4. Найти расстояние между двумя точками в двухмерном декартовом пространстве.', function () {
    test('VALID data: string "2,2,2,2"', function () {
        expect(findPointsDistance(2,2,2,2)).toBe('Расстояние между точками - 0');
    })
    test('VALID data: string "2,2,2,2"', function () {
        expect(findPointsDistance(2,-2,4,-2)).toBe('Расстояние между точками - 2');
    })

    test('INVALID data: undefined', () => {
        expect(findPointsDistance(undefined)).toBe('Incorrect input data!');
    })
})