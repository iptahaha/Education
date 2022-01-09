//5. Write a program for determining the assessment of a student by his rating, based on the rules
function getGradeByRating(rating) {
    return (rating >= 0 && rating <= 19) ? 'Оценка - F' :
        (rating >= 20 && rating <= 39) ? 'Оценка - E' :
            (rating >= 40 && rating <= 59) ? 'Оценка - D' :
                (rating >= 60 && rating <= 74) ? 'Оценка - C' :
                    (rating >= 75 && rating <= 89) ? 'Оценка - B' :
                        (rating >= 90 && rating <= 100) ? 'Оценка - A' :
                        'Введите корректные данные';
}

module.exports = getGradeByRating;