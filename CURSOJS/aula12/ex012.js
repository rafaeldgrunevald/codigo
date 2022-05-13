let agora = new Date() // Pega a info de Data, horas, minutos etc do teu pc
let hora = agora.getHours() // Função q pega a data e escolhe somente as hrs
console.log(`Agora são exatamente ${hora} horas.`)

if (hora < 12){
    console.log("Bom Dia!")
} else if (hora <= 18){
    console.log("Boa Tarde!")
} else {
    console.log("Boa Noite!")
}
