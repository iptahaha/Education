const {makeFigureOfStars} = require('../Stars');

describe('Stars. Функция отображает фигуры из *',function () {
    test('VALID data: 1)',function () {
        expect(makeFigureOfStars(1)).toStrictEqual([
            "*  *  *  *  *  *  *  ",
            "*  *  *  *  *  *  *  ",
            "*  *  *  *  *  *  *  ",
            "*  *  *  *  *  *  *  ",
            "*  *  *  *  *  *  *  ",
            "*  *  *  *  *  *  *  ",
            "*  *  *  *  *  *  *  "]);
    })
    test('VALID data: 2)',function () {
        expect(makeFigureOfStars(2)).toStrictEqual([
            "*  *  *  *  *  *  *  ",
            "*                 *  ",
            "*                 *  ",
            "*                 *  ",
            "*                 *  ",
            "*                 *  ",
            "*  *  *  *  *  *  *  ",]);
    })
    test('VALID data: 3)',function () {
        expect(makeFigureOfStars(3)).toStrictEqual([
            "*  *  *  *  *  *  *  ",
            "*              *     ",
            "*           *        ",
            "*        *           ",
            "*     *              ",
            "*  *                 ",
            "*                    ",]);
    })
    test('VALID data: 4)',function () {
        expect(makeFigureOfStars(4)).toStrictEqual([
            "*                    ",
            "*  *                 ",
            "*     *              ",
            "*        *           ",
            "*           *        ",
            "*              *     ",
            "*  *  *  *  *  *  *  "]);
    })
    test('VALID data: 5)',function () {
        expect(makeFigureOfStars(5)).toStrictEqual([
            "                  *  ",
            "               *  *  ",
            "            *     *  ",
            "         *        *  ",
            "      *           *  ",
            "   *              *  ",
            "*  *  *  *  *  *  *  "]);
    })
    test('VALID data: 6)',function () {
        expect(makeFigureOfStars(6)).toStrictEqual([
            "*  *  *  *  *  *  *  ",
            "   *              *  ",
            "      *           *  ",
            "         *        *  ",
            "            *     *  ",
            "               *  *  ",
            "                  *  "]);
    })
    test('VALID data: 7)',function () {
        expect(makeFigureOfStars(7)).toStrictEqual([
            "*                 *  ",
            "   *           *     ",
            "      *     *        ",
            "         *           ",
            "      *     *        ",
            "   *           *     ",
            "*                 *  "]);
    })
    test('VALID data: 8)',function () {
        expect(makeFigureOfStars(8)).toStrictEqual([
            "*  *  *  *  *  *  *  ",
            "   *           *     ",
            "      *     *        ",
            "         *           ",
            "                     ",
            "                     ",
            "                     "]);
    })
    test('VALID data: 9)',function () {
        expect(makeFigureOfStars(9)).toStrictEqual([
            "                     ",
            "                     ",
            "                     ",
            "         *           ",
            "      *     *        ",
            "   *           *     ",
            "*  *  *  *  *  *  *  "]);
    })
})

