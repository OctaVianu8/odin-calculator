console.log("Hello world!")

let buttonStrings = [
    'C','()','%','/',
    '7','8','9','*',
    '4','5','6','-',
    '1','2','3','+',
    '+/-','0','.','=',
]

generateButtons()

function generateButtons()
{
    buttonStrings.forEach(string => {
        let currButton = document.createElement('button');
        currButton.textContent = string;
        currButton.className = 'calculator-button';
        document.querySelector('.buttons-container').appendChild(currButton);
    })
}