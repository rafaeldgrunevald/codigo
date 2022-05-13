function imc() {
    let altura = document.querySelector("input#alt").value
    let peso = document.querySelector("input#peso").value
    let res = document.querySelector("div#res")
    let img = document.createElement("img")
    img.setAttribute("id", "foto")
    
    let imc = (peso / (altura * altura)) * 10
    imc = Math.trunc(imc)
    imc = imc / 10
    
    res.innerHTML = `Meu IMC é ${imc} `

    if (imc < 18.5) {
        res.innerHTML += "MAGREZA"
        img.setAttribute("src", "foto-magreza.png")
    } else if (imc >= 18.5 && imc <= 24.9) {
        res.innerHTML += "NORMAL"
        img.setAttribute("src", "foto-normal.png")
    } else if (imc >= 25.0 && imc <= 29.9) {
        res.innerHTML += "SOBREPESO"
        img.setAttribute("src", "foto-sobrepeso.png")
    } else if (imc >= 30.0 && imc <= 39.9) {
        res.innerHTML += "OBESIDADE"
        img.setAttribute("src", "foto-obesidade.png")
    } else {
        res.innerHTML += "OBESIDADE GRAVE"
        img.setAttribute("src", "foto-obesidadegrave.png")
    }

    res.innerHTML += img.outerHTML


}