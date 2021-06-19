class Marker{
    constructor(newcolor){
        this.color = `${newcolor}`
    }
    capacity = 100
    color = "\"red\""
    Write(text){
        let i = 0
        for (; i < text.length; i++) {
            if(this.capacity == 0){
                text = text.slice(0, i)
                alert('Закончился маркер')
                break
            }
            if(text[i] == ' '){
                continue
            }
            this.capacity -= 0.5
        }
        document.write(
            `<span style=\"color: ${this.color}\" >
                ${text}
            </span>`
        )
        return i
    }
}
class ReloadingMarker extends Marker{
    Reload(){
        let answ = prompt('Reload marker?\n y - yes, n - no')
        if(answ == `y`){
            this.capacity = 100
        }
    }
}

let action = Number(prompt(`Choose marker: 1. Simple marker 2. Reloading marker`))
switch (action) {
    case 1:{
        let customtext = prompt(`Write text`)
        let color = prompt(`Choose color(default - red)`)
        if((color == '') || (color == null)){
            color = 'red'
        }
        let mark = new Marker(color)
        mark.Write(customtext)
        break;
    }
    case 2:{
        let customtext = prompt(`Write text`)
        let color = prompt(`Choose color(default - red)`)
        if((color == '') || (color == null)){
            color = 'red'
        }
        let mark = new ReloadingMarker(color)
        while (mark.capacity != 0) {
            customtext = customtext.slice(-mark.Write(customtext))
            mark.Reload()
        }
        break;
    }
    default:
        break;
}

