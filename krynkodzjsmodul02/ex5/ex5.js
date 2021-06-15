let arr = new Array()
let plus = 0, minus = 0, even = 0, odd = 0, zero = 0;

for (let index = 0; index < 10; index++) {
    arr.push(Number(prompt('Enter number')))
}

for (let i = 0; i < 10; i++) { 
    if(arr[i] == 0){
        zero++;
    }
    if(arr[i] > 0){
        plus++;
    }
    if(arr[i] < 0){
        minus++;
    }
    if(arr[i] % 2 == 0){
        even++;
    }
    else{
        odd++;
    }
}

alert(`
    Zero count: ${zero}
    Plus count: ${plus}
    Minus count: ${minus}
    Even count: ${even}
    Odd count: ${odd}
`)