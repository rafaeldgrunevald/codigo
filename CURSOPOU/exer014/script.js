let valores = []
let listass = []
let soma = 0
let resposta = document.querySelector("p#resp")

function mostra() {
    let produto = document.querySelector("input#prod").value
    let valor = Number(document.querySelector("input#valor").value)
    let lista = document.querySelector("ul#list")
    let li = document.createElement("li")
    
    let excluir = document.createElement("input")
    excluir.type = "button"
    excluir.value = "Limpar Lista"
    excluir.addEventListener("click", sumir)
    
    let excluir_indivi = document.createElement("input")
    excluir_indivi.type = "button"
    excluir_indivi.value = "Limpar Produto"
    excluir_indivi.addEventListener("click", sumir_indivi)
    
    resposta.innerHTML = ""

    li.innerHTML = `Produto é ${produto} que vale ${valor} reais.` 
    lista.appendChild(li)
    lista.appendChild(excluir_indivi)
    valores.push(valor)
    listass.push(li)
    excluir_indivi.pos = listass.length - 1

    soma += valores[valores.length - 1]    

    resposta.innerHTML += `Soma dos valores é ${soma}. <br>` 
    resposta.appendChild(excluir) 
}

function sumir() {
    let lista = document.querySelector("ul#list")
    lista.innerHTML = ""
    valores = []
    soma = 0
    resposta.innerHTML = ""
}

function sumir_indivi(event) {
    let pos = event.currentTarget.pos
    listass[pos].remove() // Remove retira o elemento to HTML
    listass[pos] = "" // Remove da Array listass a li expecifica
    soma -= valores[pos]
    resposta.innerHTML = `Soma dos valores é ${soma}. <br>`
    event.currentTarget.remove() // Remove o elemento do botão do HTML
}