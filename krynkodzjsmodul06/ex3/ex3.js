class News{
    constructor(newtitle, newtext, newtags, newtime){
        this.title = newtitle
        this.text = newtext
        this.tags = newtags
        this.time = new Date(Date.parse(newtime))
    }
    title
    text
    tags = [] 
    time
    Print(){
        let now = new Date()
        let customtime = `${this.time.getDate()}.${this.time.getMonth() + 1}.${this.time.getFullYear()}`       
        if((now.getDate() == (this.time).getDate()) &&
        (now.getMonth() == this.time.getMonth()) &&
        (now.getFullYear() == this.time.getFullYear())){
            customtime = 'Today'
        }

        if(((now.getDate() - this.time.getDate() > 0)&&(now.getDate() - this.time.getDate() < 8)) &&
        (now.getMonth() == this.time.getMonth()) &&
        (now.getFullYear() == this.time.getFullYear())){
            customtime = `${now.getDate() - this.time.getDate()} day(s) ago`
        }

        document.write(`
        <div>
            <h2>${this.title}</h2>
            <div>${customtime}</div>
            <br>
            <div>${this.text}</div>
            <br>
            <div>${this.tags.map(item => `#${item}`).join(' ')}</div>
        </div>
        `)
    }
}
class NewsTrack{
    news = []
    constructor(newnews){
        for (const item of newnews) {
            this.news.push(item)
        }
    }
    get count(){ // Геттер количества новостей
        return this.news.length
    }
    Add(newnews) { // Добавление новости
        this.news.push(newnews)
    }
    Delete(index){ // Удаление
        this.news.splice(index, 1)
        return
    }
    Sort(){ // Сортировка от новых к старым
        this.news.sort((a, b) =>
        (b.time.getDate() - a.time.getDate())||
        (b.time.getMonth() - a.time.getMonth())||
        (b.time.getFullYear() - a.time.getFullYear()))
    }
    SearchForTag(tag){ // Поиск по тегу
        let taggednews = []
        for (const item of this.news) {
            if(item.tags.includes(tag)){
                taggednews.push(item)
            }
        }
        return taggednews
    }
    ShowAll(){ // Вывод всех новостей
        for (const item of this.news) {
            item.Print()
            document.write(`\n<hr>`)
        }
    }
}
//////
let arrtags = [ // Теги
    'lorem',
    'test',
    'HI'
]
let arr = [
    new News('Exercise 2', 'Dolor corporis blanditiis quis. Doloribus similique quo sapiente. Error consequatur officiis vel. Delectus dolor eius. Id sed non vel.', arrtags, '2021-06-01'),
    new News(`Exercise 3` ,`Repellendus ut iusto quia est ut. Unde illo occaecati ut aspernatur.`, ['quidem','in','dolorum'], '2021-05-01'),
    new News(`Dangerous`, `Amet occaecati sapiente voluptates et eaque. Debitis et placeat. Neque quos perspiciatis et eius fugiat. Nobis est aliquam mollitia consectetur. Ipsa dolores eligendi repellat id eveniet tempora quia ducimus dolore. Sed deserunt quos autem officia beatae reprehenderit officia.`, ['enim','voluptatem','necessitatibus'], '2021-06-22'),
    new News(`Spotify`, `Porro reprehenderit dolor aut quia eligendi assumenda molestias delectus. Et ipsum sed aut ut eum deserunt in nobis. Qui eius ut.`, arrtags, '2020-06-10')
]
let track = new NewsTrack(arr)
//////
// Всё на страницу не влазит, поэтому комментируйте блоки кода и проверяйте по отдельности

// До сортировки //

document.write(` 
<h1>
    До сортировки
</h1>
`)
track.ShowAll()
track.Sort()

//После сортировки //

document.write(`
<h1>
    После сортировки
</h1>
`)
track.ShowAll()

//Поиск по тегу #test //

document.write(`
<h1>
    Поиск по тегу #test
</h1>
`)
new NewsTrack(track.SearchForTag(`test`)).ShowAll()

// Удалён 2 по счёту //

document.write(`
<h1>
    Удалён 2 по счёту
</h1>
`)
track.Delete(new News(`Spotify`, `Porro reprehenderit dolor aut quia eligendi assumenda molestias delectus. Et ipsum sed aut ut eum deserunt in nobis. Qui eius ut.`, arrtags, '2020-06-10'))
track.ShowAll()

// Добавлен обратно, который удалялся //

document.write(`
<h1>
    Добавлен обратно, который удалялся
</h1>
`)
track.Add(new News(`Spotify`, `Porro reprehenderit dolor aut quia eligendi assumenda molestias delectus. Et ipsum sed aut ut eum deserunt in nobis. Qui eius ut.`, arrtags, '2020-06-10'))
track.ShowAll()
