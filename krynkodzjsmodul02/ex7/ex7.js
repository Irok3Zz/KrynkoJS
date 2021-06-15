let number = prompt('Enter num')
let len = Number(prompt('Enter length of move'))
let newstr = new Array()

for(let i = 0; i < len; i++) {
    newstr.push(number[i])
}
for (let i = number.length; len - 1 < i; --i) {
    newstr.unshift(number[i])
}
alert(number = newstr.join(''))