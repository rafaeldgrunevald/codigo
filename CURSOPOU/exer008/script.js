/*
Gerar e achar o numero expecífico do fibonacci
*/

function resposta() {
    let entrada = Number(document.querySelector("input#entrada").value)
    let saida = document.querySelector("div#resp")
    let proximo = 0
    let anterior = 0
    let atual = 1
    
    if (entrada == 1) {
        saida.innerHTML = 0

    } else if (entrada == 2) {
        saida.innerHTML = 1

    } else if (entrada == 3){
        saida.innerHTML = 1
    } else {
        for (let i = 0; i < entrada - 2; i++) {
            proximo = atual + anterior
            anterior = atual
            atual = proximo
        }
        saida.innerHTML = proximo
    }
} 

function fibo(number) {
    if (number == 1) {
        return 0
    } else if (number == 2) {
        return 1
    }
    return fibo(number - 1) + fibo(number - 2)

}
