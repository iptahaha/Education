//removeIf(production)
const { addWindowListener, getContext, setTextValue, getInputValue, addListener, getElement, createElement, getWindowWidth, getWindowHeight } = require('../js/utils')
//endRemoveIf(production)

document.addEventListener('DOMContentLoaded', function(){
    initPainter()
})

function initPainter() {
    const state = new Pencil(25, '#feed85')

    const c = getElement('canvas');
    resizeWindow(c);

    addWindowListener('resize', () => resizeWindow(c));
    addListener('canvas', 'mousemove', (event) => drawLine(event, state));
    addListener('size', 'input', () => pickSize(state));
    addListener('color', 'input', () => pickColor(state));
    addListener('clean', 'click', clean);
    addListener('save', 'click', () => saveJson(c));
}
function resizeWindow(c){
    c.width  = getWindowWidth();
    c.height = getWindowHeight();
    return true;
}

function drawLine(event, pencil) {
    if (event.buttons) {
        pencil.drawLine(event, event.offsetX, event.offsetY);
        return true;
    }
    return false;
}

function clean() {
    const canvas = getElement('canvas');
    const ctx = getContext('canvas');

    if (ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        return true;
    }
    return false;
}

function pickSize(pencil) {
    const value = getInputValue('size');
    setTextValue('size-value', `SIZE: ${value}`);
    pencil.changeSize(+value);
    return pencil;
}

function pickColor(pencil) {
    const value = getInputValue('color');
    pencil.changeColor(value);
    return pencil;
}

function saveJson(c) {
    const link = createElement("a");
    link.download = "canvas.json";
    c.toBlob(function(blob){
        link.href = URL.createObjectURL(blob);
        link.click();
        return console.log(link.href);
    },'text/json');
}

//removeIf(production)
module.exports = { saveJson, pickColor, setRange, clear, drawLine }
//endRemoveIf(production)