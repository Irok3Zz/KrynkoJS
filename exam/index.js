function clearTable() {
    let booktable = document.getElementById('table')
    booktable.innerHTML = ""
}
function contentTable() { // отрисовка таблицы
    clearTable()
    let booktable = document.getElementById('table')
    let book, lastindex;
    for (let i = 0; i < localStorage.length; i++) {
      book = localStorage.getItem(localStorage.key(i)).split('_')
      booktable.insertRow(-1)
      lastindex = booktable.rows.length - 1
      
      for (const item of book) {
        booktable.rows[lastindex].innerHTML += `<td>${item}</td>`
      }
      booktable.rows[lastindex].innerHTML +=
      `<td>
        <button data-bs-toggle="modal" data-bs-target="#staticBackdrop" class="btn btn-secondary edit" id="${localStorage.key(i)}">Edit</button>
        <button class="btn btn-danger delete" id="${localStorage.key(i)}" >Delete</button>
       </td>`
    }
}
function clearForm() { // Очистка формы
    document.getElementById('title').value = ""
    document.getElementById('author').value = ""
    document.getElementById('publisher').value = "" 
    document.getElementById('year').value = ""
    document.getElementById('pages').value = "" 
    document.getElementById('copies').value = ""

}
function guid() { // Генерация GUID
    return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
    (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16));
}
function newBook() { // Создание новой книги
    if (document.getElementById('title').value == "" ||
        document.getElementById('author').value == "" || 
        document.getElementById('year').value == "" || 
        document.getElementById('publisher').value == "" ||
        document.getElementById('pages').value == "" || 
        document.getElementById('copies').value == "" ||
        document.getElementById('year').value < 0 ||
        document.getElementById('pages').value < 0 || 
        document.getElementById('copies').value < 0) {
    alert(`Не заполнена форма или не корректные данные!`)
    return;
    }
    localStorage.setItem(guid(),
    `${document.getElementById('title').value}_
     ${document.getElementById('author').value}_
     ${document.getElementById('year').value}_
     ${document.getElementById('publisher').value}_
     ${document.getElementById('pages').value}_
     ${document.getElementById('copies').value}`)
    clearForm()
    window.location.reload()
}
function search() {
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
}

function deleteBook(idStorage) {
    if(!confirm('Are you sure?')){
        return
    }
    localStorage.removeItem(idStorage)
    window.location.reload()
}

contentTable()
document.getElementById('newBook').addEventListener("click", newBook)
document.getElementById('btnSearch').addEventListener("click", search)
document.getElementsByClassName('btn-close')[0].addEventListener('click', clearForm)

for (const item of document.getElementsByClassName('edit')) {
    item.addEventListener("click", function (event) {
        // editBook(event.target.id)
        console.log(event.target.id)
    })
}
for (const item of document.getElementsByClassName('delete')) {
    item.addEventListener("click", function (event) {
        console.log(event.target.id)
        deleteBook(event.target.id)
    })
}



