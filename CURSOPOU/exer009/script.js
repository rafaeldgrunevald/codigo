/* 
Recebendo como entrada um numero inicial e um numero final
mostre todas as tabuadas ate o 10 desses numeros
*/

function calc() {
    let inicial = document.querySelector("input#txti").value
    let final = document.querySelector("input#txtf").value
    let resp = document.querySelector("div#resp")

    resp.innerHTML = ""
    
    for (let t = Number(inicial); t <= Number(final); t++) { // Faz com que o valor inicial se iguale ao valor final
        for (let k = 1; k <= 10; k++) { // Faz com que k se repita até virar 10
            resp.innerHTML += `${t} vezes ${k} = ${t * k}<br>` // ${t * k} multiplica o numero inicial com o k
        }
    }
    



}