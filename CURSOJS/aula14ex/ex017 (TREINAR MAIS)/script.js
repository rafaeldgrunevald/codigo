function tabuada() {
    let numb = document.querySelector("input#numb").value
    let tab = document.querySelector("select#seltab")
    
    if (numb.length == 0) {
        alert("Por favor, digite um número!")
    } else {
        tab.innerHTML = ""
        for (let i = 1; i <= 10; i++) {
            let item = document.createElement("option")
            item.text = `${numb} x ${i} = ${numb * i}`
            item.value = `tab${i}`
            tab.appendChild(item)
        }
        
    }
    
    



}   
