/*
Programa não recebe nenhuma entrada
mas quando aperta um botão na tela
calcula todos os fatorias de 1 a 10
de uma fez só e mostra na tela
*/

function aparece() {
    let resp = document.querySelector("div#resp")
    let fat = 0

    resp.innerHTML = ""

    for (let i = 1; i <= 10; i++) {
        fat = fatorial(i)
        resp.innerHTML += `Fatorial de ${i} é  ${fat} <br>`
    }
}

function fatorial(numb) {
    if (numb <= 0) {
        return 1
    }
    
    return numb * fatorial(numb - 1)
}