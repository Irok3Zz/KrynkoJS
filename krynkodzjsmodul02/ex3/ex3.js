let number = Number(prompt('Enter number'))
let arr = []

for (let i = number; i > 0; --i) {
    if(number % i == 0){
        arr.push(i)
    }
}

alert(arr)