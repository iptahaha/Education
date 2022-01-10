function setTextValue(id, value) {
    const node = document.getElementById(id);
    if (node) {
        node.textContent = value;
        return true;
    }
    return false;
}

function setInputValue(id,value) {
    const input = document.getElementById(id);
    if (input) {
        input.value = value;
        return true;
    }
    return false;
}

function getInputValue(id) {
    const input = document.getElementById(id);
    if (input) {
        return input.value;
    }
    return '';
}

function addListener(id, eventType, cb) {
    const node = document.getElementById(id);
    if (node) {
        node.addEventListener(eventType, cb);
        return true;
    }
    return false;
}

function setDisabledAttribute(id) {
    const node = document.getElementById(id);
    if (node) {
        node.setAttribute('disabled','disabled');;
        return true;
    }
    return false;
}

function removeDisabledAttribute(id) {
    const node = document.getElementById(id);
    if (node) {
        node.removeAttribute('disabled');
        return true;
    }
    return false;
}

function showOrHigh(id) {
    const node = document.getElementById(id);
    if (node) {
        if (node.style.display === 'none') {
            node.style.display = 'block';
            return true
        } else {
            node.style.display = 'none';
            return true
        }
    }
    return false;
}

function getSettings(state) {
    const rangeUser = getInputValue('rangeUser');
    const attemptUser = getInputValue('attemptUser');

    setSettings(state, +rangeUser, +attemptUser);
}

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//removeIf(production)
module.exports = {getInputValue, setTextValue, setInputValue, addListener, setDisabledAttribute, removeDisabledAttribute, showOrHigh, settingsGame, getSettings, startGame}
//endRemoveIf(production)