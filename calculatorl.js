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
                return 'Error: Division by zero';
            }
            result = divide(firstNumber,secondNumber);
            break;
        default:
            return 'Error: Invalid operator';
    }

    return result;
};
