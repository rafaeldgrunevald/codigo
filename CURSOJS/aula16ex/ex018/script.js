let numeros = []
let resposta = document.querySelector("p#resp")

function addtab() {
    let numb = Number(document.querySelector("input#numb").value)
    let tab = document.querySelector("select#seltab")
    let item = document.createElement("option")

    if (numb.length == 0 || numb > 100 |numb < 1| numb == numeros.includes(numb)) {
        alert("Valor inválido ou já encontrado na lista.")
    } else {
        item.text = `Valor ${numb} adicionado`
        tab.appendChild(item)
        numeros.push(numb)
        resposta.innerHTML = ""
    }
}

function teste() {
    if (numeros.length == 0) {
        return alert("Adicione valores antes de finalizar!")
    } else {
        let soma = 0
        let maior = 0
        let media = 0
        numeros.sort()
        
        for (let i = 0; i < numeros.length; i++){
            maior = numeros[i]
            soma = soma + numeros[i]
            media = soma / numeros.length
        }

        resposta.innerHTML = `Ao todo, temos ${numeros.length} números cadastrados. <br><br>`
        resposta.innerHTML += `O maior valor informado foi ${maior}. <br><br>`
        resposta.innerHTML += `O menor valor informado foi ${numeros[0]}. <br><br>`
        resposta.innerHTML += `Somando todos os valores, temos ${soma} <br><br>`
        resposta.innerHTML += `A média dos valores digitados é ${Math.round(media)}`
    }
    
}