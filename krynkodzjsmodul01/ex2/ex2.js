let num = prompt('Factorial of number')

function Factorial(num, i = 1){
    if(num == 1)
        return i
    return Factorial(num-1, i=i*num)
}

alert(Factorial(num))