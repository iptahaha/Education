function moveTextContent(id_from, id_to, value) {
    const field_from = document.getElementById(id_from);
    const field_to = document.getElementById(id_to);
    if (field_from && field_from.textContent.length !== 0) {
        field_to.textContent += field_from.textContent + value;
        field_from.textContent = '';
        return true;
    }
    return false;
}

function addTextContent(id, value) {
    const node = document.getElementById(id)
    if (node) {
        node.textContent += value;
        return true;
    }
    return false;
}

function addUniqueTextContent(id, value) {
    const node = document.getElementById(id)
    if (node && !node.textContent.includes(value)) {
        node.textContent += value;
        return true;
    }
    return false;
}

function setStyleById(id, someStyle, before, after) {
    const node = document.getElementById(id);

    if (node.style.cssText === `${someStyle}: ${before};`) {
        node.setAttribute('style', `${someStyle}: ${after};`);
        return true;
    } else {
        node.setAttribute('style', `${someStyle}: ${before};`);
        return true;
    }
}

function toggleByClassName(className, stateItem) {
    const elements = document.querySelectorAll(className)
    elements.forEach((el) => {
        el.style.display = stateItem;
    })
}






function setTextContent(id, value) {
    const node = document.getElementById(id)
    if (node) {
        node.textContent = value;
        return true;
    }
    return false;
}



function getTextValue(id) {
    const node = document.getElementById(id)

    if (node) {
        return node.textContent
    }
    return false
}

function clearState(state) {
    state.previous = ''
}

function errorCheck(string) {
    if (['+', '-', '/', '*'].includes(string[string.length - 1])) {
        return true
    }
    return false
}












//removeIf(production)
module.exports = {toggleByClassName, setStyleById, addUniqueTextContent, moveTextContent, errorCheck, setTextContent, addTextContent, clearState, getTextValue}
//endRemoveIf(production)