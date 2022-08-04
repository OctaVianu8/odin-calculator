function add(a,b) {
    return a+b;
}

function substract(a,b) {
    return a-b;
}

function multiply(a,b) {
    return a*b;
}

function divide(a,b) {
    return a/b;
}

function operate(operator, a, b)
{
    return (operator == '+') ? add(a,b) :
            (operator == '-') ? substract(a,b) :
            (operator == '*') ? multiply(a,b) :
            (operator == '/') ? divide(a,b) :
            'invalid operator';
}

function generateButtons()
{
    buttonStrings.forEach(string => {
        let currButton = document.createElement('button');
        currButton.textContent = string;
        currButton.className = 'calculator-button';
        currButton.id = string;
        currButton.addEventListener('click', () => buttonClick(string))
        document.querySelector('.buttons-container').appendChild(currButton);
    })
}

function buttonClick(id)
{
    console.log(id);
    if(id == 'C') clearDisplay();
    else if(id == '()') addBrackets();
    else if(id == '=') evaluate();
    else if(id == '+/-') changeSign();
    else addToDisplay(id);
}

function clearDisplay(){
    displayValue = '';
    display.textContent = displayValue;
}

function addBrackets()
{
    console.log('not implemented yet');
}
function evaluate()
{
    console.log('not implemented yet');
}
function changeSign()
{
    console.log('not implemented yet');
}
function addToDisplay(id)
{
    displayValue+=id;
    display.textContent = displayValue;
}
function backspace()
{
    displayValue = displayValue.slice(0,-1);
    display.textContent = displayValue;
    if(displayValue.charAt(displayValue.length - 1) == ' ') backspace();
}