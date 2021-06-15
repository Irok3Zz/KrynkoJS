let first, second, action;

while (action != 'no') {
    action = prompt('Choose action(+ , - , * , /)')
    first = prompt('Enter first number')
    second = prompt('Enter second number')
    switch (action) {
        case '+':
            alert(first + second)
            break;
        case '-':
            alert(first - second)
            break;
        case '*':
            alert(first * second)
            break;
        case '/':
            alert(first / second)
            break;
        
        default:
            break;
    }
    action = prompt('Do you want to continue?(\"no\" to exit)')
}
window.close()