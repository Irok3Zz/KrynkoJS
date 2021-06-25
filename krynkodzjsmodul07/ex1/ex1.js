function factTimeout(num) {

    function fact(mem = 1) {
        if(num < 2){
            clearTimeout(timer)
            alert(mem)
            return 
        }
        mem *= num--
        console.log(mem)
        setTimeout(fact, 1000, mem)
    }
    let timer = setTimeout(fact, 1000)
}

let num = Number(prompt("Enter number"))

factTimeout(num)