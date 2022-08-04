let displayValue = '(4050 / 10 - 5) / 100 = 4';
let display = document.querySelector('.display');
let backspaceButton = document.querySelector('#delete')
let buttonStrings = [
    'C','()','%','/',
    '7','8','9','*',
    '4','5','6','-',
    '1','2','3','+',
    '+/-','0','.','=',
]

generateButtons()
display.textContent = displayValue;
backspaceButton.addEventListener('click', backspace)