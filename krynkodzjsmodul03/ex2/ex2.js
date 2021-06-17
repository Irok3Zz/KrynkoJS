let arr = [
    { name: 'яблоко' , count: 5, price: 10 },
    { name: 'апельсин' , count: 2, price: 30 },
    { name: 'груша' , count: 15, price: 15 }
]
let action

while(1){
    action = Number(prompt('Choose action\n1. Vivod\n2. Sum\n3. The most expensive\n4. Average'))
    switch (action) {
        case 1:{
            Vivod()
            break;
        }
        case 2:{
            Sum()
            break;
        }
        case 3:{
            Expensive()
            break;
        }
        case 4:{
            Avg()
            break;
        }
        default:
            break;
    }
}

function Vivod() { // Распечатка чека
    alert(arr.map(item => `\n${item.name}(${item.count} * ${item.price}): ${item.count*item.price}`))
}
function Sum() { // Сумма всех покупок
    let s = 0
    for (const item of arr) {
        s += item.count * item.price
    }
    alert(`Sum: ${s}`)
}
function Expensive() { // Самая дорогая покупка
    let expensive = { name: arr[0].name, price: arr[0].price }
    for (const item of arr) {
        if((item.price*item.count) > expensive.price){
            expensive.name = item.name
            expensive.price = item.price*item.count
        }
    }
    alert(`${expensive.name}: ${expensive.price}`)
}
function Avg() { // Средняя стоимость одного товара
    let sum = 0, count = 0;
    for (const item of arr) {
        sum += item.price*item.count
        count += item.count
    }
    alert(`Average: ${sum/count}`)
}