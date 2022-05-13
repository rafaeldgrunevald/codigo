function carregar() {
    let msg = document.getElementById("msg")
    let foto = document.getElementById("imagem")
    let data = new Date()
    let hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    
    if(hora >= 0 && hora < 12) {
        // BOM DIA!
        foto.src = "fotomanha.png"
        document.body.style.background = "#e2cd9f"
    } else if (hora >= 12 && hora <= 18) {
        // BOA TARDE!
        foto.src = "fototarde.png"
        document.body.style.background = "#b9846f"
    } else {
        // BOA NOITE!
        foto.src = "fotonoite.png"
        document.body.style.background = "#515154"
    }
}
