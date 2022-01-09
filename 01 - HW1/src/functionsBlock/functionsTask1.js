//1. Получить строковое название дня недели по номеру дня

function getDayName(num) {
  if (typeof num === 'number' && num >=1 && num <= 7) {
    let date = '';
    (num === 1) ? date = 'Понедельник' :
        (num === 2) ? date = 'Вторник' :
            (num === 3) ? date = 'Среда' :
                (num === 4) ? date = 'Четверг' :
                    (num === 5) ? date = 'Пятница' :
                        (num === 6) ? date = 'Суббота' :
                            date =  'Воскресенье';
    return date;
  } else {
    return 'Input number in range of 1 to 7'
  }
}

module.exports = {getDayName};