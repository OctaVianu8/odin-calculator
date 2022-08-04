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