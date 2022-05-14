let area = document.querySelector("div#area")
let btns = []

function maisbtn() {
    let newbtn = document.createElement("input")
    newbtn.type = "button"
    newbtn.value = "Ola meu chapa"
    newbtn.addEventListener("click", sumir)
    
    area.appendChild(newbtn)
    btns.push(newbtn)
}

function sumir(event) {
    console.log(btns)
    btns.shift().remove() // shift() remove do vetor, retorna o botão removido e ai o remove tira o botão do HTML
}

function multibtn() {
    let temp = btns.length

    for (let i = 0; i < temp; i++) {
        let newbtn2 = document.createElement("input")
        newbtn2.type = "button"
        newbtn2.value = "Ola meu chapa"
        newbtn2.addEventListener("click", sumir)
        area.appendChild(newbtn2)
        btns.push(newbtn2)
    }
    console.log(btns)
}

function divbtn() {
    for (let i = 0; i < btns.length; i++) {
        btns.shift().remove()
        console.log(btns)
    }
}

function clearbtn() {
    btns = []
    area.innerHTML = ""
}