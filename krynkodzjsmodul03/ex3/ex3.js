let arr = [
    { style: "color", value: "red" },
    { style: "font-style", value: "italic" },
    { style: "font-weight", value: "bolder" },
]

let custext = prompt("Enter your text")
Redaction(custext)

function Redaction(customText){
    let str = `<p style= \"${arr.map( item => `${item.style}: ${item.value}` ).join(`; `)}\">${customText}</p>`
    document.write(str)
}