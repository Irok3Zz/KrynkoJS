function straightTimeout(fir, sec) {
    let arr = []
    function fstraight() {
        if(sec < fir){
            clearTimeout(timer)
            alert(arr)
            return
        }
        arr.push(fir)
        console.log(arr)
        setTimeout(fstraight, 1000, ++fir, sec)
    }
    let timer = setTimeout(fstraight, 1000, fir, sec)

}
function reverseTimeout(fir, sec) {
    let arr = []
    function freverse() {
        if(sec < fir){
            clearTimeout(timer)
            alert(arr)
            return
        }
        arr.push(sec)
        console.log(arr)
        setTimeout(freverse, 1000, fir, --sec)
    }
    let timer = setTimeout(freverse, 1000, fir, sec)
}
let first = Number(prompt("Enter first"))
let second = Number(prompt("Enter second"))

straightTimeout(first, second)
reverseTimeout(first, second)
