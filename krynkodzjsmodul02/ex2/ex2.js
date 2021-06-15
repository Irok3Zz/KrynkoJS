let first = Number(prompt('First number')) // Большее
let second = Number(prompt('Second number')) // Меньшее
let mod
if((first == 0) || (second == 0)){
    if(second > first){ // Если юзер ввёл наоборот
        mod = second
        second = first
        first = mod
    }
    if(mod == 0){ // Чтобы цикл заработал после предыдущей махинации(вдруг юзер ввёл 0)
        mod = undefined
    }

    while (mod != 0) {
        mod = first % second
        first = second
        second = mod
    }
    alert(`НОД: ${first}`)
}
else{
    alert('Вводите натуральные числа')
}