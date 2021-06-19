class Employee{
    static count = 0
    id
    constructor(newname){
        this.name = newname
        this.id = ++Employee.count
    }
    name
}
class EmpTable{
    constructor(arr){
        this.htmlCode = `<table border="1" width="100%">
        ${arr.map( item => `<tr><td>${item.id}</td><td>${item.name}</td></tr>`).join('\n')}
        </table>`
    }
    htmlCode
    getHTML(){
        return this.htmlCode
    }
}
class StyledEmpTable extends EmpTable{
    styles = `color: red`
    getHTML(){
        return `${super.getHTML().substr(0, 6)} style="${this.styles}"${super.getHTML().slice(7)}`
    }
    getStyles(){
        return `&lt;style&gt;
        table{
            ${this.styles}
        }
        &lt;/style&gt;`
    }
}

let arr = [
    new Employee('Boris'),
    new Employee('Mark'),
    new Employee('Jack'),
    new Employee('Ivan'),
    new Employee('Max')
]

let table = new StyledEmpTable(arr) 

document.write(table.getHTML())

document.write(`\nСтили:\n${table.getStyles()}`)