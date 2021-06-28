for (const el of document.querySelectorAll('li')) {
    if(el.innerText.includes('http')){
        el.style.textDecoration = "underline dashed"
    }
    else{
        el.style.textDecoration = "none"
    }
}
console.log('end')