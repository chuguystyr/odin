let num1 = 0;
let num2 = 0;
let operation = '';
const regex = /([+\-×÷])/;
let add = (a, b) => a + b;
let subtract = (a, b) => a - b;
let multiply = (a, b) => a * b;
let divide = (a, b) => {
    if (b === 0) return 'ERROR'
    return a / b;
};
function operate(operator, a, b) {
    a = Number(a);
    b = Number(b);
    switch (operator) {
        case '+': return add(a,b);
        case '-': return subtract(a, b);
        case '×': return multiply(a, b);
        case '÷': return divide(a, b);
    }
}
function clear() {
    display.innerText = '0';
    num1 = 0;
    num2 = 0;
    operation = '';
}
let display = document.getElementById('display');
let digitButtons = document.getElementsByClassName('digit');
for (let button of digitButtons) button.addEventListener('click', (e) => {
    if (display.innerText === '0') {
        display.innerText = e.target.innerText;
    } else if (!(display.innerText.includes('+') || display.innerText.includes('-') || display.innerText.includes('×') || display.innerText.includes('÷'))) {
        display.innerText += e.target.innerText;
    } else {
        display.innerText += e.target.innerText;
    }
})
let dotButton = document.getElementById('dot');
dotButton.addEventListener('click', () => {
    if (!display.innerText.includes('.')) display.innerText += '.';
})
let clearButton = document.getElementById('clear');
clearButton.addEventListener('click', () => clear());
let operatorButtons = document.getElementsByClassName('operator');
for (let button of operatorButtons) button.addEventListener('click', (e) => {
    if ((display.innerText.includes('+') || display.innerText.includes('-') || display.innerText.includes('×') || display.innerText.includes('÷'))) {
        let [num1, operation, num2] = display.innerText.split(regex);
        display.innerText =  operate(operation, Number(num1), Number(num2));
        display.innerText += e.target.innerText;
    } else {
    operation = e.target.innerText;
    display.innerText += operation;
    }
});
let equalsButton = document.getElementById('equals');
equalsButton.addEventListener('click', () => {
    let [num1, operation, num2] = display.innerText.split(regex);
    display.innerText =  operate(operation, Number(num1), Number(num2));
});