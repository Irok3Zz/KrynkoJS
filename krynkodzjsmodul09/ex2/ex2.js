function main(id) {
    console.log(`Start of main(${id})`)
    let ul = document.getElementById(id)
    if(ul.hidden){
        ul.hidden = false
    }
    else{
        ul.hidden = true
    }
}