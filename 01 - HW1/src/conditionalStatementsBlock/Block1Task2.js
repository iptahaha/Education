//2. Determine which quarter the point with coordinates (x, y) belongs to
function showPointLocation(x,y) {
    let placeInfo = '';
    if (x === 0 && y === 0) {
        placeInfo = "Точка лежит в центре координат";
    } else if (x === 0 || y === 0) {
        placeInfo = "Точка лежит на оси координат";
    } else if (x > 0) {
        placeInfo = (y > 0) ? 'Точка лежит в I четверти' : "Точка лежит в IV четверти";
    } else if (x < 0) {
        placeInfo = (y > 0) ? 'Точка лежит во II четверти' : "Точка лежит в III четверти";
    }
    return placeInfo;
}

module.exports = showPointLocation;