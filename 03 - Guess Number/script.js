
let randomNumber = Math.floor(Math.random() * 100) + 1;

const exitButton = document.getElementById('exitButton');
const settingsButton = document.getElementById('settingsButton');
const conditions = document.getElementById('conditions');
const settings = document.getElementById('settings');
const play = document.getElementById('play');
const settingsDefault = document.getElementById('settingsDefault');

let rangeDefault = document.getElementById('rangeDefault');
let attemptDefault = document.getElementById('attemptDefault');
let rangeUser = document.getElementById('rangeUser');
let attemptUser = document.getElementById('attemptUser');

let range = rangeDefault.textContent;
let attempt = attemptDefault.textContent;

const guess = document.getElementById('guess');
const guessGen = document.getElementById('guessGen');
const guesses = document.getElementById('guesses');
const lastResult = document.getElementById('lastResult');
let coldOrHot = 0;
let guessCount = 1;


settingsButton.addEventListener('click', function(){
    if (settings.style.display === 'none'){
        settings.style.display = 'block'
    } else {
        settings.style.display = 'none'
    }
});

settings.addEventListener('submit', function (event) {
    event.preventDefault();
    let settingsForm = document.forms[0];
    rangeUser = settingsForm.elements.rangeUser.value;
    attemptUser = settingsForm.elements.attemptUser.value;
    settingsForm.elements.rangeUser.value = '';
    settingsForm.elements.attemptUser.value = '';
    range = rangeUser;
    attempt = attemptUser;
    rangeDefault.textContent = rangeUser;
    attemptDefault.textContent = attemptUser;
    settingsDefault.textContent = `between 1 and ${range} in ${attempt} tries.`;
    randomNumber = Math.floor(Math.random() * rangeUser) + 1;
    if (settings.style.display === 'none'){
        settings.style.display = 'block'
    } else {
        settings.style.display = 'none'
    }
});

function closeForm() {//Закрывает форму с настройками, чтобы было нельзя внести изменения во время игры
    conditions.style.display = 'none';
    play.style.display = 'block';
}

function exitGame() {
    if (conditions.style.display === 'none'){
        conditions.style.display = 'block'
    }
    play.style.display = 'none';
    randomNumber = Math.floor(Math.random() * 100) + 1;
}

function checkGuess() {
    // alert(randomNumber);
    const userGuess = Number(guess.value);
    if (userGuess > 0 && userGuess < range) {
        coldOrHot += userGuess;
        if (guessCount === 1 && userGuess !== randomNumber) {
            guesses.textContent = 'Попытайся ещё!';

            lastResult.textContent = `Не угадал!`;
            lastResult.style.backgroundColor = 'red';
        } else if (guessCount > 1 && userGuess !== randomNumber) {
            guesses.textContent = `Осталось попыток: ${5 - guessCount}`;
            lastResult.style.backgroundColor = 'red';
            if(Math.abs(coldOrHot - randomNumber) < Math.abs(userGuess - randomNumber)) {
                lastResult.textContent = `Не угадал, холоднее!!!`;
            } else if(Math.abs(coldOrHot - randomNumber) > Math.abs(userGuess - randomNumber)) {
                lastResult.textContent = `Не угадал, но теплее!!!`;
            }
        }
        if (userGuess === randomNumber) {
            lastResult.textContent = `Поздравляю! Ты угадал задуманное число за ${guessCount} попыток.`;
            lastResult.style.backgroundColor = 'green';
            // coldOrHot.textContent = '';
            setGameOver();
        } else if (guessCount === 5) {
            lastResult.textContent = 'Попытки закрнчились :(';
            // coldOrHot.textContent = '';
            setGameOver();
        }

        guessCount++;
        guess.value = '';
        guess.focus();
    } else {
        lastResult.textContent = `Enter number in range from 1 to ${range}!`;
        lastResult.style.backgroundColor = 'red';
        guess.value = '';
        guess.focus();
    }
}

guessGen.addEventListener('click', checkGuess);

function setGameOver() {
    exitButton.addEventListener('click', resetGame);
    exitButton.focus();
}

function resetGame() {
    guessCount = 1;
    const resetParas = document.querySelectorAll('.resultParas p');
    for (const resetPara of resetParas) {
        resetPara.textContent = '';
    }
    guess.value = '';
    guessGen.focus();
    lastResult.style.backgroundColor = 'white';
    randomNumber = Math.floor(Math.random() * 100) + 1;
    exitButton.addEventListener('click', exitGame);
}