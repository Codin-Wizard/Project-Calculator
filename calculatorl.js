let currentNumber = '';
let previousNumber = '';
let operation = null;

const add = function (a,b) {
    return a+b;
}
const subtract = function (a,b) {
    return a-b;
}
const multiply = function (a,b) {
    return a*b;
}
const divide = function (a,b) {
    return a/b;
}


const operate = function (firstNumber, secondNumber, operator) {
    let result;

    switch (operator) {
        case '+':
            result = add(firstNumber,secondNumber);
            break;
        case '-':
            result = subtract(firstNumber,secondNumber);
            break;
        case '*':
            result = multiply(firstNumber,secondNumber);
            break;
        case '/':
            if (secondNumber === 0) {
                errorMessage('Error: Division by zero')
                return 'Oops';
            }
            result = divide(firstNumber,secondNumber);
            break;
        default:
            errorMessage('Error: Invalid operator');
            return 'Oops';
    }

    return result;
};

function appendNumber(number){
    if (currentNumber === '0'){
        currentNumber = number.toString();
    }else{
        currentNumber += number.toString();
    }
    updateDisplay();
}

function setOperation(op){
    if (currentNumber === '') {
        return;
    } if (previousNumber !== '') {
        calculate();
    }
    operation = op;
    previousNumber = currentNumber;
    currentNumber = '';
}

function calculate() {
    if (previousNumber === '' || currentNumber === '') return;
    const result = operate(parseFloat(previousNumber), parseFloat(currentNumber), operation);
    currentNumber = result.toString();
    previousNumber = '';
    operation = null;
    updateDisplay();
}

function clearDisplay() {
    currentNumber = '';
    previousNumber = '';
    operation = null;
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('display').innerText = currentNumber;
}
document.addEventListener('DOMContentLoaded', (event) => {
    clearDisplay();
});

function backSpace() {
    let bsp = document.getElementById("display").innerText;
    document.getElementById('display').innerText=bsp.substring(0,bsp.length -1);
    currentNumber = document.getElementById('display').innerText;
}
function errorMessage(message) {
    document.getElementById('errorDisplay').innerText = message;
}