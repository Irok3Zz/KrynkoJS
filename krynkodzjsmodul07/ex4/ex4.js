function calcTimeout(num) {
    let mem = 0
    let index = 0
    function calc() {
        if(index > num.length - 1){
            clearTimeout(timer)
            alert(mem)
            return
        }
        mem += Number(num[index])
        console.log(mem)
        setTimeout(calc, 1000, ++index)
    }
    let timer = setTimeout(calc, 1000, index)
}

let number = prompt("Enter number")
calcTimeout(number)