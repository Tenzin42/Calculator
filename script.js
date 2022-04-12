const numberKeys = document.querySelectorAll('.number');
const operatorKeys = document.querySelectorAll('.operator');
const output = document.querySelector('.output');
const clearButton = document.querySelector('.clear');
const equalButton = document.querySelector('.equal');
const currentNum = document.querySelector('current');
const previousNum = document.querySelector('previous');
const decimalButton = document.querySelector('.decimal');
let displayValue = '';
let currentOperand = '';

numberKeys.forEach(key => {
  console.log(key)
  key.addEventListener(('click'), () => appendToDisplay(key.innerHTML)) 
})

operatorKeys.forEach(key => {
  console.log(key)
  key.addEventListener(('click'), () => appendToDisplay(key.innerHTML)) 
})

clearButton.addEventListener(('click'), () => clearDisplay())

equalButton.addEventListener(('click'), () => evaluateExpression(displayValue))

decimalButton.addEventListener(('click'), () => appendToDisplay(decimalButton.innerHTML))

function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate(operator, num1, num2) {
if(operator === '+') {
  return add(num1, num2)
} else if (operator === '-') {
  return subtract(num1, num2)
} else if (operator === '*') {
  return multiply(num1, num2)
} else if (operator === '/') {
  return divide(num1, num2)
}
}

function evaluateExpression (expression) {
  if(expression.indexOf('+') > 0){
    const numbers = expression.split('+')
    alert(`${displayValue} = ${operate('+', parseFloat(numbers[0]), parseFloat(numbers[1]))}`)
  } else if(expression.indexOf('-') > 0){
    const numbers = expression.split('-')
    alert(`${displayValue} = ${operate('-', parseFloat(numbers[0]), parseFloat(numbers[1]))}`)
  } else if(expression.indexOf('*') > 0){
    const numbers = expression.split('*')
    alert(`${displayValue} = ${operate('*', parseFloat(numbers[0]), parseFloat(numbers[1]))}`)
  } else if(expression.indexOf('/') > 0){
    const numbers = expression.split('/')
    alert(`${displayValue} = ${operate('/', parseFloat(numbers[0]), parseFloat(numbers[1]))}`)
  } else {
    alert('You must use an operator!')
  }
  clearDisplay()
}


function appendToDisplay(value) {
displayValue = displayValue+value
console.log(value)
updateDisplay()
}

function updateDisplay() {
  output.innerHTML = displayValue
}

function clearDisplay(){
  displayValue = ''
  updateDisplay()
}