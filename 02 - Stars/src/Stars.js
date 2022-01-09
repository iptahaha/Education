//homework_stars
//
// let num;//required figure number (taken from "homework_stars.png")
// for (let i = 1; i <= 9; i++) {//the loop prints to console all the figures available for the function makeFigureOfStars()
//     num = i;
//     console.log('Figure № ' + num + ':');
//     makeFigureOfStars(num);
// }
function makeFigureOfStars(A) {//the function draws a figure in console. Takes the figure number (taken from "homework_stars.png") as an argument (A)
    const size = 7;//the size of the sides of the final figure
    const shape = '*  ';//the symbols that the figure will be composed of
    const space = '   ';
    let raws = [];
    let raw = '';//the figure will be displayed as RAWs
    for (let i = 0; i < size; i++) {//row counter
        let str = '';//var for storing the value of the raw
        for (let j = 0; j < size; j++) {//character in a raw counter
            str = (A === 1) ||
                (A === 2) && (i===0 || i===size-1 || j===0 || j===size-1) ||
                (A === 3) && (i===0 || j===0 || i+j===size-1) ||
                (A === 4) && (i===size-1 || j===0 || i-j===0) ||
                (A === 5) && (i===size-1 || j===size-1 || i+j===size-1) ||
                (A === 6) && (i===0 || j===size-1 || i-j===0) ||
                (A === 7) && (i+j===size-1 || i-j===0) ||
                (A === 8) && (i===0 || ((i-j===0 || i+j===size-1) && i<=size/2)) ||
                (A === 9) && (i===size-1 || ((i-j===0 || i+j===size-1) && i>=(size-1)/2)) ?
                str + shape ://checking the condition for the figure number AND definition definition of characters in a raw filled with *
                str + space ;//the rest of the characters in a raw are "filled" with emptiness
        }
        raws.push(str);
        raw = str;
        str = '';
        console.log(raw);
    }
    return raws;
}
module.exports = {makeFigureOfStars};
//makeFigureOfStars(9);//uncomment if requires to show just one figure (taken from "homework_stars.png"

