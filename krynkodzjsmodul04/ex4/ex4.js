let number = Number(prompt("Enter number"))
alert(prime(number))

function prime(num, i = 2) {
    if(i**2 > num){
        return true
    }
    if(num % i == 0){
        return false
    }
    else{
        return prime(num, ++i)
    }
}