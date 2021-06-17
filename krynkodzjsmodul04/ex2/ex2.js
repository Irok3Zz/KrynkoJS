let first = Number(prompt("Enter first"))
let second = Number(prompt("Enter second"))
let mod

if(second > first){ // Если юзер ввёл наоборот
    mod = second
    second = first
    first = mod
}

alert(NOD(first, second))

function NOD(first, second, mod = 1) {
    if(mod == 0){
        return first
    }
    else{
        mod = first % second
        first = second
        second = mod
        return NOD(first, second, mod)
    }
}