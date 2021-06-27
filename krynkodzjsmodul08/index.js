function progressbarTimeout(id, time) {
    let bar = document.getElementById(id)
    let width = 0
    function progressbar() {
        if(width == 100){
            clearTimeout(timer)
            return
        }
        bar.innerHTML = ++width + "%"
        bar.style.width = width + "%"
        setTimeout(progressbar, time)
    }
    let timer = setTimeout(progressbar, time)
}

progressbarTimeout('first', 1000)
progressbarTimeout('second', 100)
progressbarTimeout('third', 500)
