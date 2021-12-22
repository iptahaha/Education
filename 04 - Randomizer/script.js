
const resetButton = document.getElementById('resetButton');
const generateButton = document.getElementById('generateButton');
const generatedNum = document.getElementById('generatedNum');
const min = document.getElementById('min');
const max = document.getElementById('max');

let isGenerate = false;
let randArr = [];
let answers = [];

generateButton.addEventListener('click', () => {
    const minimum = min.value;
    const maximum = max.value;
    min.disabled = true;
    max.disabled = true;
    answers = makeRandArr (minimum, maximum)
    if (answers.length >= 1) {
        showRandNum ();
    } else {
        generatedNum.textContent = 'Elements are over!';
    }
});

function makeRandArr (min, max) {
    if (!isGenerate) {
        for (let i= min; i <= max; i++ ) {
            randArr.push(i);
        }
        for (let i = randArr.length-1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let t = randArr[i];
            randArr[i] = randArr[j];
            randArr[j] = t;
        }
        isGenerate = true;
    }
    return(randArr);
}

function showRandNum () {
    generatedNum.textContent = randArr[(randArr.length-1)];
        randArr.pop();
}

resetButton.addEventListener('click', () => {
    min.disabled = false;
    max.disabled = false;
    generatedNum.textContent = '';
    isGenerate = false;
});