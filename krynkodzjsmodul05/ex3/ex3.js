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

let arr = [
    new Employee('Boris'),
    new Employee('Mark'),
    new Employee('Jack'),
    new Employee('Ivan'),
    new Employee('Max')
]

let table = new EmpTable(arr)

document.write(table.getHTML())