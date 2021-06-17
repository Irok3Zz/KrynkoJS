let action
let arr = []
while(1){
    action = Number(prompt("Choose action\n1. Vivod\n2. Add item\n3. Buying item"))
    switch (action) {
        case 1:{
            Vivod()
            break;
        }
        case 2:{
            Add()
            break;
        }
        case 3:{
            Buying()
            break;
        }
        default:
            break;
    }
}

function Add() { // Добавление в массив новый товар
    let newItem = prompt("What is item you'd like to add?")
    for (const item of arr) {
        if(item.name == newItem){
            ++item.count
            return
        }
    }
    arr.unshift(new Item(newItem))
}
function Vivod() { // Вывод чек
    alert(arr.map(item => ` ${item.name}: ${item.count}`))
}

function Buying() { // Покупка товара
    let buyItem = prompt("What is item you'd like to buy?")
    for (let i = 0; i < arr.length; i++) {
        if(arr[i].name == buyItem){
            arr[i].bought = true
            arr.push(arr.splice(i, 1)[0])
            return
        }
    }
}

function Item(newname){ // Конструктор
    this.name = newname
    this.count = 1
    this.bought = false
}
