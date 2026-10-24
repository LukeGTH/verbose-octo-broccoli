let currentOperand = '0';
let previousOperand = '';
let operation = undefined;
let resetScreen = false;

const currentOperandElement = document.getElementById('current-operand');
const previousOperandElement = document.getElementById('previous-operand');

function updateDisplay() {
    currentOperandElement.innerText = currentOperand;
    if (operation != null) {
        previousOperandElement.innerText = previousOperand + ' ' + operation;
    } else {
        previousOperandElement.innerText = '';
    }
}

function appendNumber(number) {
    if (currentOperand === '0' || resetScreen) {
        currentOperand = '';
        resetScreen = false;
    }
    if (number === '.' && currentOperand.includes('.')) return;
    currentOperand += number;
    updateDisplay();
}

function clearAll() {
    currentOperand = '0';
    previousOperand = '';
    operation = undefined;
    updateDisplay();
}

function toggleSign() {
    currentOperand = (parseFloat(currentOperand) * -1).toString();
    updateDisplay();
}

function percent() {
    currentOperand = (parseFloat(currentOperand) / 100).toString();
    updateDisplay();
}

function chooseOperation(op) {
    if (currentOperand === '') return;
    if (previousOperand !== '') {
        compute();
    }
    operation = op;
    previousOperand = currentOperand;
    currentOperand = '';
    updateDisplay();
}

function compute() {
    let computation;
    const prev = parseFloat(previousOperand);
    const current = parseFloat(currentOperand);
    
    if (isNaN(prev) || isNaN(current)) return;
    
    switch (operation) {
        case '+':
            computation = prev + current;
            break;
        case '-':
            computation = prev - current;
            break;
        case '*':
            computation = prev * current;
            break;
        case '/':
            computation = prev / current;
            break;
        default:
            return;
    }
    
    currentOperand = computation.toString();
    operation = undefined;
    previousOperand = '';
    resetScreen = true;
    updateDisplay();
}

// Initialize
updateDisplay();
