function testar() {   
    let numb = Number(document.querySelector("input#numb").value)
    let resp = document.querySelector("div#resp")
    let temp = 1
    let x = ""

    for (let i = 0; i < numb; i+= temp){
        temp = temp * 16
        if (temp % numb == 0) {
            x = "É uma potência de 2"
            break
        } else {
            x = "Não é potência de 2"
        }
    }

    resp.innerHTML = x
}
