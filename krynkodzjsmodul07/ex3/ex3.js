function reverseTimeout(num) {
    let arr = []
    let index = num.length - 1
    function reverse() {
        if(index < 0){
            clearTimeout(timer)
            alert(arr.join(''))
            return
        }
        arr.push(num[index])
        console.log(arr)
        setTimeout(reverse, 1000, --index)
    }
    let timer = setTimeout(reverse, 1000, index)
}
let number = prompt("Enter number")

reverseTimeout(number)