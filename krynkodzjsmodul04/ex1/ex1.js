function power(fund, count, starter = fund) { // fund - результат, count - степень, starter - запоминатель основы
    if(count == 1){
        return fund
    }
    else{
        return power(fund *= starter, --count, starter)
    }
}

let num = Number(prompt('Введите число'))
let p = Number(prompt('Введите степень'))
alert(power(num, p))
