let valores = []
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

    resposta.innerHTML = ""

    li.innerHTML = `Produto é ${produto} que vale ${valor} reais.` 
    lista.appendChild(li)
    valores.push(valor)
    
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