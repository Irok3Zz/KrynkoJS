function clearTable() { // Очистка таблицы
    document.getElementById('table').innerHTML = ""
}
function updateEventListeners() { // Переприсваивание событий(необходимо после перерисовки таблицы)
    for (const item of document.getElementsByClassName('edit')) {
        item.addEventListener("click", function (event) {
            editBook(event.target.id)
            console.log(event.target.id)
        })
    }
    for (const item of document.getElementsByClassName('delete')) {
        item.addEventListener("click", function (event) {
            console.log(event.target.id)
            deleteBook(event.target.id)
        })
    }
    
}
// function contentTable() { // отрисовка таблицы
//     clearTable()
//     let booktable = document.getElementById('table')
//     let book, lastindex;
//     for (let i = 0; i < localStorage.length; i++) {
//       book = localStorage.getItem(localStorage.key(i)).split('_')
//       booktable.insertRow(-1)
//       lastindex = booktable.rows.length - 1
      
//       for (const item of book) {
//         if(item < 0){
//             booktable.rows[lastindex].innerHTML += `<td>${item} BC</td>` // До нашей эры
//         }
//         else{
//             booktable.rows[lastindex].innerHTML += `<td>${item}</td>` // Нашей эры
//         }
//       }
//       booktable.rows[lastindex].innerHTML +=
//       `<td>
//         <button data-bs-toggle="modal" data-bs-target="#staticBackdrop" class="btn btn-secondary edit" id="${localStorage.key(i)}">Edit</button>
//         <button class="btn btn-danger delete" id="${localStorage.key(i)}" >Delete</button>
//        </td>`
//     }
//     updateEventListeners()
// }
function clearForm() { // Очистка формы
    document.getElementById('title').value = ""
    document.getElementById('author').value = ""
    document.getElementById('publisher').value = "" 
    document.getElementById('year').value = ""
    document.getElementById('pages').value = "" 
    document.getElementById('copies').value = ""
    document.getElementById('staticBackdropLabel').innerText = ""
}
function guid() { // Генерация GUID
    return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
    (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16));
}
function saveChanges() { // Создание новой книги
    if (document.getElementById('title').value == "" ||
        document.getElementById('author').value == "" || 
        document.getElementById('year').value == "" || 
        document.getElementById('publisher').value == "" ||
        document.getElementById('pages').value == "" || 
        document.getElementById('copies').value == "" ||
        document.getElementById('pages').value < 1 || 
        document.getElementById('copies').value < 1) {
        alert(`Не заполнена форма или не корректные данные!`)
        clearForm()
        return;
    }

    localStorage.setItem(guid(),
    `${document.getElementById('title').value}_${document.getElementById('author').value}_${document.getElementById('year').value}_${document.getElementById('publisher').value}_${document.getElementById('pages').value}_${document.getElementById('copies').value}`)
    if(document.getElementById('staticBackdropLabel').innerText == 'Edit book'){
        localStorage.removeItem(document.getElementById('idStorage').innerText)
    }
    clearForm()
    sort()
    
}
function search() { // Поиск
    let keyword = document.getElementById('fieldSearch').value
    let booktable = document.getElementById('table')
    if (keyword == "") {
        return
    }
    clearTable()
    for (let i = 0; i < localStorage.length; i++) {
        if(localStorage.getItem(localStorage.key(i)).includes(keyword)){
            book = localStorage.getItem(localStorage.key(i)).split('_')
            booktable.insertRow(-1)
            lastindex = booktable.rows.length - 1
            
            for (const item of book) {
              booktable.rows[lastindex].innerHTML += `<td>${item}</td>`
            }
            booktable.rows[lastindex].innerHTML += 
            `<td>
            <button data-bs-toggle="modal" data-bs-target="#staticBackdrop" class="btn btn-secondary" id="${localStorage.key(i)}" class="edit">Edit</button>
            <button class="btn btn-danger " id="${localStorage.key(i)}" class="delete">Delete</button>
            </td>`
    
        }
    }
    updateEventListeners()
}
function sort() { // Сортировка
    let keyOfValue // Индекс после сплита строки(св. по которому сортируем)
    switch (document.getElementsByClassName('form-select')[0].value) { // По чём будем сортирровать
        case 'Title':
            keyOfValue = 0
            break;
        case 'Author':
            keyOfValue = 1
            break;
        case 'Publisher':
            keyOfValue = 3
            break;
        case 'Year of publishing':
            keyOfValue = 2
            break;
        default:
            break;
    }
    let arrOfValue = [] // В этот массив запишем значение, по которому будем сортировать и id объекта в localStorage(записывать будем в виде объекта)
    for (let i = 0; i < localStorage.length; i++) {
        arrOfValue.push({
            value: localStorage.getItem(localStorage.key(i)).split(['_'])[keyOfValue],
            id: localStorage.key(i)
        })
    }
    if(keyOfValue == 2){ // Если сортировка по дате
        arrOfValue.sort((a, b) => Number(a.value) < Number(b.value) ? 1 : -1);
    }
    else{
        arrOfValue.sort((a, b) => a.value > b.value ? 1 : -1);
    }

    // Дальнейший код отрисовует таблицу 
    clearTable()

    let booktable = document.getElementById('table')
    let lastindex
    
    for (const item of arrOfValue) {
      booktable.insertRow(-1)
      lastindex = booktable.rows.length - 1
      
      for (const bookProp of localStorage.getItem(item.id).split('_')) {
        if(bookProp < 0){
            booktable.rows[lastindex].innerHTML += `<td>${bookProp} BC</td>` // До нашей эры
        }
        else{
            booktable.rows[lastindex].innerHTML += `<td>${bookProp}</td>` // Нашей эры
        }
      }
      booktable.rows[lastindex].innerHTML +=
      `<td>
        <button data-bs-toggle="modal" data-bs-target="#staticBackdrop" class="btn btn-secondary edit" id="${item.id}">Edit</button>
        <button class="btn btn-danger delete" id="${item.id}" >Delete</button>
       </td>`
    }

    updateEventListeners()    
}
function newBook() { // При нажатии на кн. "New book"
    document.getElementById('staticBackdropLabel').innerText = 'New book'
}
function editBook(idStorage) { // Редактирование книги
    document.getElementById('staticBackdropLabel').innerText = 'Edit book'
    let data = localStorage.getItem(idStorage).split('_')
    document.getElementById('title').value = data[0]
    document.getElementById('author').value = data[1]
    document.getElementById('year').value = data[2]
    document.getElementById('publisher').value = data[3]
    document.getElementById('pages').value = data[4]
    document.getElementById('copies').value = data[5]
    document.getElementById('idStorage').innerText = idStorage
}
function deleteBook(idStorage) { // Удаление книги
    if(!confirm('Are you sure?')){
        return
    }
    localStorage.removeItem(idStorage)
    sort()
}

sort()
document.getElementById('saveChanges').addEventListener("click", saveChanges)
document.getElementById('newBook').addEventListener("click", newBook)
document.getElementById('btnSearch').addEventListener("click", search)
document.getElementsByClassName('btn-close')[0].addEventListener('click', clearForm)
document.getElementById('sort').addEventListener("click", sort)

