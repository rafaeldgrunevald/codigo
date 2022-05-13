function transofrm() {
    let milhas = Number(document.querySelector("input#milhas").value)
    let resp = document.querySelector("div#resp")
    let transformado = 0
    let km = 1.609
    
    transformado = milhas * km
    resp.innerHTML = `Suas ${milhas} milhas em km equivalem a ${transformado}.`
}