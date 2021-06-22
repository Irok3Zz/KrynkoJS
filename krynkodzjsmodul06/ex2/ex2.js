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
        <h2>${this.title}</h2>
        <div>${customtime}</div>
        <br>
        <div>${this.text}</div>
        <br>
        <div>${this.tags.map(item => `#${item}`).join(' ')}</div>
        `)
    }
}

let arrtags = [ // Теги
    'lorem',
    'test',
    'HI'
]

let news = new News('Exercise 2', 'Dolor corporis blanditiis quis. Doloribus similique quo sapiente. Error consequatur officiis vel. Delectus dolor eius. Id sed non vel.', arrtags, '2021-06-01')
news.Print()