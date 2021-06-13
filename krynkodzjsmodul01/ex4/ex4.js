function Square(a, b){
    if (b == null) {
        alert(a*a)
    }
    else{
        alert(a*b)
    }
}

let a = prompt('First num')
let b = prompt('Second num')

Square(a,b)