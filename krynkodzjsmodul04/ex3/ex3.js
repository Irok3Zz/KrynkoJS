let num = prompt("Enter number")

alert(maxim(num))

function maxim(number, i = number.length - 1, max = 0) {
    if(i == -1){
        return max
    }
    if(max < Number(number[i])){
        max = Number(number[i])
    }
    return maxim(number, --i, max)
}