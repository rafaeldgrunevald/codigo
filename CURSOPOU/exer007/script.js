/*
Dado uma entrada (numero inteiro maior q 0 e menor q 15) faça um programa q calcule o fatorial deste numero
Não pode usar mais de 5 ifs
Não pode usar switch
*/

function fatorial() {
    let entrada = document.querySelector("input#int").value
    let resposta = document.querySelector("div#res")
    let temp = fatorialrec(entrada)


    resposta.innerHTML = `O fatorial de ${entrada} é ${temp}`
}

function fatorialrec(num) {
    if (num <= 0) {
        return 1
    } 
    return num * fatorialrec(num - 1)
}




