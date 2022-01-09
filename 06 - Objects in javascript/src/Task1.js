// 1.Составьте алгоритм, который считает, сколько времени вам нужно на приготовление яиц.
//     Правила:
// -Яйца варить 5 минут
// -Вместительность емкости не более 5 яиц одновременно

function getCookingTime (eggs) {
    const time = 5;
    const pot = 5;
    if (typeof eggs === 'number' && eggs >= 0) {
        if (eggs === 0) {
            return 0;
        }
        if (eggs <= 5) {
            return 5;
        }
        if (eggs % pot === 0) {
            return (eggs / pot) * time;
        } else {
            return ((Math.ceil(eggs/10)) * 10);
        }
    } else {
        return 'Incorrect input data!'
    }
}

module.exports = {getCookingTime};

// function getCookingTime (eggsAmount) {
//     if (typeof eggsAmount !== 'number' || eggsAmount < 0) {
//         return 'Incorrect input data!';
//     }
//     let result;
//     const time = 5;
//     const quantity = 5;
//     let counter = 0;
//     if (eggsAmount > 0) {
//         while (eggsAmount > 0) {
//             eggsAmount = eggsAmount - quantity;
//             counter++;
//         }
//         result = counter * time;
//     } else {
//         result = 0;
//     }
//     return result;
// }