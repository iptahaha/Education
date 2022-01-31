function addWindowListener(eventType, cb) {
    window.addEventListener(eventType, cb)
}

function addListener(id, eventType, cb) {
    const node = document.getElementById(id)

    if (node) {
        node.addEventListener(eventType, cb)
    }
}

function getElement(id) {
    const node = document.getElementById(id)

    if (node) {
        return node
    }
    return false
}

function getInputValue(id) {
    const input = document.getElementById(id)
    if (input) {
        return input.value
    }
    return false;
}


function setTextValue(id, value) {
    const node = document.getElementById(id)
    if (node) {
        node.innerText = value;
        return true;
    }
    return false;
}

function getContext(id) {
    const node = document.getElementById(id)

    if (node) {
        return node.getContext('2d')
    }
    return true
}

function createElement(element) {
    return document.createElement(element);
}

function getWindowWidth() {
    return window.innerWidth;
}

function getWindowHeight() {
    return window.innerHeight;
}

//removeIf(production)
module.exports = { addWindowListener, getElement, addListener,getInputValue,setTextValue, getContext, createElement, getWindowWidth, getWindowHeight }
//endRemoveIf(production)