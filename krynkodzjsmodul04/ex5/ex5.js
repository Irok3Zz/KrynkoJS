let number = Number(prompt("Enter number"))
alert(factorization(number))

function factorization(num, i = 2, arr = []) {
    if(i > num**0.5){
        if(num != 1){
            arr.push(num)
        }
        return arr
    }
    if(num % i == 0){
        arr.push(i)
        return factorization(num /= i, i, arr)
    }
    else{
        return factorization(num, ++i, arr)
    }
}
