const userInput = document.getElementById('inputNumber');
const addBtn = document.getElementById('btnAdd');
const subtractBtn = document.getElementById('btnSubtract');
const multiplyBtn = document.getElementById('btnMultiply');
const divideBtn = document.getElementById('btnDivision');

const currentCalculatorOutput = document.getElementById('currentCalculator');
const currentResultOutput = document.getElementById('currentResult');

function outputResult(result, text) {
    currentResultOutput.textContent = result;
    currentCalculatorOutput.textContent = text;
}