class User {
    vida
    vida_total
    xp
    xp_total
    lvl
    lvl_ant
    poção
    constructor() {
        this.vida = 100
        this.vida_total = this.vida
        this.xp = 0
        this.xp_total = 100
        this.lvl = 1
        this.lvl_ant = this.lvl
        this.poção = 5
    }
    addXP() {
        this.xp += getRandomInt(5, 35)
        if (this.xp > 100) {
            this.lvl++
            this.xp = 0
        }
    }
    drinkPot() {
        this.poção--
        this.vida = this.vida_total
    }
    upLvl() {
        this.vida_total += 15
        this.vida = this.vida_total
        this.xp_total += 20
        this.lvl_ant = this.lvl
    }
}
let user = new User()
let dia = 1
let moeda = 0
let bomba = 0

class Enemy {
    vida
    vida_total
    constructor() {
        this.vida = getRandomInt(88, 188)
        this.vida_total = this.vida
    }
}
let enemy1 = new Enemy()

let info_vida = document.querySelector("p#vida")
let info_xp = document.querySelector("p#xp")
let info_data = document.querySelector("p#dia")
let info_pot = document.querySelector("p#poção")
let info_bomba = document.querySelector("p#bomba")
let info_moeda = document.querySelector("p#moeda")
let info = document.querySelector("div#info1")
let info_enemy = document.querySelector("div#info2")
let info_level = document.querySelector("p#level")
let info_envida = document.querySelector("p#vidaenemigo")

info_envida.innerHTML = `VIDA: ${enemy1.vida}/${enemy1.vida_total}`

function ataque() {
    user.vida -= getRandomInt(1, 50)
    info_vida.innerHTML = `VIDA: ${user.vida}/${user.vida_total} <br>`

    enemy1.vida -= getRandomInt(1, 50)
    info_envida.innerHTML = `VIDA: ${enemy1.vida}/${enemy1.vida_total} <br>`
        
    if (enemy1.vida <= 0) {
        user.addXP()
        info_xp.innerHTML = `XP: ${user.xp}/${user.xp_total} <br>`
        enemy1 = new Enemy()
        info_envida.innerHTML = `VIDA: ${enemy1.vida}/${enemy1.vida_total} <br>`
        moeda += 20
        info_moeda.innerHTML = `MOEDAS: ${moeda}`
    }
        
    if (user.vida <= 0) {
        info_vida.innerHTML = ""
        info_xp.innerHTML = ""
        info_data.innerHTML = ""
        info_level.innerHTML = ""
        info.innerHTML = "VOCÊ MORREU!"
    }

    if (user.lvl > user.lvl_ant) { // Ve se o player upou de lvl
        user.upLvl() // Chama a função q altera os valores para o proximo lvl
        info_vida.innerHTML = `VIDA: ${user.vida}/${user.vida_total} <br>` // Printa isso na tela
        info_xp.innerHTML = `XP: ${user.xp}/${user.xp_total} <br>`
    }
    
    info_level.innerHTML = `LEVEL: ${user.lvl} <br>`
    info_xp.innerHTML = `XP: ${user.xp}/${user.xp_total} <br>`

} 

function descanço() {
    user.vida = user.vida_total
    info_vida.innerHTML = `VIDA: ${user.vida}/${user.vida_total} <br>`
    dia++
    info_data.innerHTML = `DIA: ${dia} <br>`
}

function beberpot() {
    if (user.poção <= 0) { // Ve se o player tem poções
        alert("Você esta sem POÇÕES!")
        let temp = prompt("Deseja comprar? SIM/NÃO")

        if (temp == "SIM" && moeda >= 20) {
            moeda -= 25
            info_moeda.innerHTML = `MOEDA: ${moeda}`
            user.poção++
            info_pot.innerHTML = `POÇÃO: ${user.poção}`
        }
    } else { // Bebe poção e recupera vida 
        user.drinkPot()
        info_vida.innerHTML = `VIDA: ${user.vida}/${user.vida_total} <br>`
        info_pot.innerHTML = `POÇÃO: ${user.poção}`
    }
}

function usarbomba() {
    if (bomba <= 0) {
        alert("Você esta sem BOMBAS!")
        let temp = prompt("Deseja comprar? SIM/NÃO")

        if (temp == "SIM" && moeda >= 20) {
            moeda -= 20
            info_moeda.innerHTML = `MOEDA: ${moeda}`
            bomba++
            info_bomba.innerHTML = `BOMBA: ${bomba}`
        }
    } else {
        enemy1.vida -= 20
        info_envida.innerHTML = `VIDA: ${enemy1.vida}/${enemy1.vida_total} <br>`
        bomba--
        info_bomba.innerHTML = `BOMBA: ${bomba}`
    }
}

function getRandomInt(min, max) {
    min = Math.ceil(min) // Define o menor valor randomicamente gerado
    max = Math.floor(max) // Define o maior valor randocicamente gerado
    return Math.floor(Math.random() * (max - min)) + min
    // Vai pegar o valor entre 0 e 1 que o Math.random vai gerar e multiplicar pelo minimo - maximo (que no caso é 99)
    // Depois disso vai somar com o minino 
}