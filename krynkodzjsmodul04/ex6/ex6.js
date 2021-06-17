let count = Number(prompt("Enter count"))
alert(fib(count))
function fib(count, prev = 0, mem = 1) {
    if(count == 1){
        return mem
    }
    return fib(--count, mem, mem + prev)
}