function printTimeout(num) {
    let arr = []
    function print() {
        if(num == 0){
            clearTimeout(timer)
            alert(arr.join(''))
            return
        }
        arr.push(')')
        arr.unshift('(')
        console.log(arr)
        setTimeout(print, 1000, --num)
    }
    let timer = setTimeout(print, 1000, num)
}

let number = Number(prompt("Enter number"))

printTimeout(number)