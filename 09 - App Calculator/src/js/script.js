//removeIf(production)
const {toggleByClassName, setStyleById, addUniqueTextContent, moveTextContent, errorCheck, setTextContent, addTextContent, clearState, getTextValue} = require('../js/utils');
//endRemoveIf(production)

document.addEventListener('DOMContentLoaded', function () {
    initCalc();
})

function initCalc() {

    const state = {
        lastOperation: '',
        lastResult: '',

        firstDisplay: 'none',
        secondDisplay: 'block',
        changeCalcBtnText: 'SIMPLE'
    }

    const change = document.getElementById('changeCalcType');
    change.addEventListener('click', () => changeCalcType(state));

    const second = document.getElementById('nd2');
    second.addEventListener('click', () => toggleButtonsPreset(state));

    const buttons = document.querySelectorAll('.btn')
    buttons.forEach((btn) => btn.addEventListener('click', () => checkInputValue(btn.value, state)))
}

function changeCalcType(state) {
    setStyleById('engineer', 'display', 'flex', 'none');
    setStyleById('screen', 'width', 'auto', '280px');

    setTextContent('changeCalcType', state.changeCalcBtnText);
    state.changeCalcBtnText = (state.changeCalcBtnText === 'SIMPLE') ? 'ENGINEER' : 'SIMPLE'
    return true;
}

function toggleButtonsPreset(state) {
    toggleByClassName('.first', state.firstDisplay);
    toggleByClassName('.second', state.secondDisplay);

    state.firstDisplay = (state.firstDisplay === 'none') ? 'block' : 'none';
    state.secondDisplay = (state.secondDisplay === 'none') ? 'block' : 'none';
}

function checkInputValue(value, state) {
    if (['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'].includes(value)) {
        if (state.lastOperation === 'digit' || state.lastOperation === '') {
            addTextContent('output', value)
            state.lastOperation = 'digit'
        } else {
            setTextContent('output', value)
            state.lastOperation = 'digit'
        }
        return 'digit';
    }

    if (['+', '-', '/', '*'].includes(value)) {
        if (state.lastOperation !== 'sign' && state.lastOperation !== 'block') {
            addTextContent('input', getTextValue('output'));
            setTextContent('output', '');
            addTextContent('input', value);
            state.lastOperation = 'sign';
            setTextContent('output', getRes(getTextValue('input')));
            return 'sign';
        } else if (state.lastOperation === 'sign' && state.lastOperation !== 'block') {
            let val = getTextValue('input');
            setTextContent('input', val.slice(0, val.length - 1) + value);
            state.lastOperation = 'sign';
            return 'sign';
        } else if (state.lastOperation === 'block') {
            addTextContent('input', value);
            state.lastOperation = 'sign';
            return 'sign';
        }
        return false;
    }

    switch (value) {
        case '.':
            let content = getTextValue('output')
            if (content.length === 0) {
                setTextContent('output', '0')
            }
            addUniqueTextContent('output', value)
            state.lastOperation = 'dot'
            return 'dot';

        case '+/-':
            changeSign();
            return 'changeSign';
        case '%':
            addTextContent('input', getTextValue('output') / 100)
            //setTextContent('output', '')
            setTextContent('output', getRes(getTextValue('input')))
            state.lastResult = getTextValue('output');
            state.lastOperation = 'percent'
            return 'percent';

        case '(':
            leftBrackets()
            return 'leftBracket';
        case ')':
            rightBrackets()
            return 'rightBracket';
        case 'clear':
            clearScreen(state);
            return 'clear';

        case '=':
            if (state.lastOperation !== 'block') {
                moveTextContent('output', 'input', '');
                let currentResult = getRes(getTextValue('input'))
                setTextContent('output', `= ${currentResult}`)
                setTextContent('input', currentResult)
                state.lastOperation = 'block';
                return 'result';
            } else {
                return false;
            }

        case 'delete':
            let val = getTextValue('output')
            if (state.lastOperation === 'digit' && val.length >= 1) {
                setTextContent('output', val.slice(0, val.length - 1));
            }
            state.lastOperation = 'delete'
            return 'delete';

        case 'pi':
            setTextContent('output', Math.PI);
            state.lastOperation = 'pi'
            return 'pi';

        case 'e':
            setTextContent('output', Math.E);
            state.lastOperation = 'e'
            return 'e';

        case 'ln':
            let val2 = parseInt(getTextValue('output'), 10)
            setTextContent('output', Math.log(val2));
            state.lastOperation = 'ln'
            return 'ln';

        case 'factorial':
            moveTextContent('output', 'input', '');
            let factorialResult = getRes(getTextValue('input'))
            factorialResult = calcFactorial(factorialResult);
            setTextContent('output', factorialResult)
            setTextContent('input', factorialResult)
            state.lastOperation = 'block';
            return 'factorial';

        case 'square_2':
            moveTextContent('output', 'input', '');
            let square2Result = getRes(getTextValue('input'))
            square2Result = calculateSquare(square2Result, 2)
            setTextContent('output', square2Result)
            setTextContent('input', square2Result)
            state.lastOperation = 'block';
            return 'square_2';

        case 'square_3':
            moveTextContent('output', 'input', '');
            let square3Result = getRes(getTextValue('input'))
            square3Result = calculateSquare(square3Result, 3)
            setTextContent('output', square3Result)
            setTextContent('input', square3Result)
            state.lastOperation = 'block';
            return 'square_3';

        case 'square_Y':
            addTextContent('output', value)
            break;

        case 'square2_x':
            let squareFrom2Result = getTextValue('output')
            squareFrom2Result = calculateSquare(2, squareFrom2Result)
            setTextContent('output', squareFrom2Result)
            setTextContent('input', squareFrom2Result)
            state.lastOperation = 'block';
            return 'square_2';

        case 'square10_x':
            let squareFrom10Result = getTextValue('output')
            squareFrom10Result = calculateSquare(10, squareFrom10Result)
            setTextContent('output', squareFrom10Result)
            setTextContent('input', squareFrom10Result)
            state.lastOperation = 'block';
            return 'square_10';
    }

    function calculateSquare(x, y) {
        return Math.pow(x, y);
    }

    function getRes(string) {
        rightBrackets()
        if (['+', '-', '/', '*'].includes(string[string.length - 1])) {
            return eval(string.slice(0, string.length - 1));
        } else {
            return eval(string);
        }
    }

    function changeSign() {
        let x = getTextValue('input');
        let y;
        if (x.substring(0, 1) === '-') {
            y = x.substring(1, x.length);
            setTextContent('input', `${y}`);
            return 'sign changed';
        } else {
            y = '-' + x;
            setTextContent('input', `${y}`);
            return 'changedSign';
        }
    }

    function clearScreen(state) {
        setTextContent('output', '');
        setTextContent('input', '');
        state.lastOperation = '';
        state.lastResult = '';
        return 'clearedScreen';
    }


    function leftBrackets() {
        addTextContent('input', '(');
        return 'leftBr';
    }

    function rightBrackets() {
        const x = getTextValue('input');
        const y = getTextValue('output');
        let leftBracketsCounter = 0;
        let rightBracketsCounter = 0;
        if (x.length === 0) {
            return false;
        } else {
            if (y.length !== 0) {
                addTextContent('input', y);
                return true;
            }
            for (let i = 0; i < x.length; i++) {
                if (x[i] === '(') {
                    leftBracketsCounter += 1;
                }
                if (x[i] === ')') {
                    rightBracketsCounter += 1;
                }
            }
            if (leftBracketsCounter === rightBracketsCounter) {
                return true;
            } else {
                addTextContent('input', ')');
                rightBrackets()
                return 'rightBr';
            }
        }
    }

    function calcFactorial(n) {
        if (typeof n !== "number") {
            return 'Invalid input data'
        }

        if (n < 0) {
            n = n * -1
        }

        if (n === 0) {
            return 1;
        }

        if (n > 0) {
            return n * calculateFactorial(n - 1);
        }
    }
}
