let vida = 100
let info_vida = document.querySelector("p#vida")

let xp = 0
let info_xp = document.querySelector("p#xp")

let dia = 1
let info_data = document.querySelector("p#dia")

let info = document.querySelector("div#info")

let lvl = 0
let info_level = document.querySelector("p#level")

function ataque() {
    vida -= getRandomInt(1, 50)
    info_vida.innerHTML = `VIDA: ${vida}/100 <br>`
        
    xp += getRandomInt(1, 25)
    info_xp.innerHTML = `XP: ${xp}/100 <br>`
        
    if (vida <= 0) {
        info_vida.innerHTML = ""
        info_xp.innerHTML = ""
        info_data.innerHTML = ""
        info.innerHTML = "VOCÊ MORREU!"
    }

    if (xp > 100) {
        lvl++
        info_level.innerHTML = `LEVEL: ${lvl} <br>`
        xp = 0
        info_xp.innerHTML = `XP: ${xp}/100 <br>`
    }
} 

function descanço() {
    vida = 100
    info_vida.innerHTML = `VIDA: ${vida}/100 <br>`
    dia++
    info_data.innerHTML = `DIA: ${dia} <br>`
}

function getRandomInt(min, max) {
    min = Math.ceil(min) // Define o menor valor randomicamente gerado
    max = Math.floor(max) // Define o maior valor randocicamente gerado
    return Math.floor(Math.random() * (max - min)) + min
    // Vai pegar o valor entre 0 e 1 que o Math.random vai gerar e multiplicar pelo minimo - maximo (que no caso é 99)
    // Depois disso vai somar com o minino 
}


