//4. Найти расстояние между двумя точками в двухмерном декартовом пространстве

function findPointsDistance(x1, y1, x2, y2) {
    if (typeof x1 !== 'number' || typeof y1 !== 'number' || typeof x2 !== 'number' || typeof y2 !== 'number') {
        return 'Incorrect input data!';
    }
    const distance = Math.sqrt(((x1 - x2) ** 2) + ((y1 - y2) ** 2));
    return ('Расстояние между точками - ' + distance);
}

module.exports = {findPointsDistance};