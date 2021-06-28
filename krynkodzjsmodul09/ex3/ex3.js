function main(){
    let calendar = document.getElementById('Calendar')
    
    calendar.hidden = false
    let time = new Date(Number(document.getElementById(`Year`).value), Number(document.getElementById(`Mon`).value) - 1, 1)
    document.getElementById('MonYear').innerText = `${time.toLocaleString('en', {month: 'long'})}, ${time.getFullYear()}`
    console.log(calendar.rows[0].cells)
    
    for (let lastday = lastDay(time.getFullYear(), time.getMonth() + 1), day = 0, j = time.getDay() - 1, i = 1; i < calendar.rows.length; i++) {
        if(j == -1){
            calendar.rows[i].cells[calendar.rows[i].cells.length - 1].innerText = ++day
            j = 0
            ++i
        }
        for (; j < calendar.rows[i].cells.length; j++) {
           calendar.rows[i].cells[j].innerText = ++day
           if(day == lastday){
               return
           }
        }
        j = 0
    }
}
function lastDay(year, mon) {
    let date1 = new Date(year, mon - 1, 1);
    let date2 = new Date(year, mon, 1);
    let date3 = Math.round((date2 - date1) / 1000 / 3600 / 24);
    return date3
}