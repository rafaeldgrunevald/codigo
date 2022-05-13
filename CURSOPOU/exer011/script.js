/*
Fazer as contas abaixo e mostrar na tela apenas os resultados
1! - 10!
2! - 9!
3! - 8!
.
.
.
*/



function subdefat() {
    let resp = document.querySelector("div#resp")
    let fat1 = 0
    let fat2 = 0
    let j = 11
    
    resp.innerHTML = ""
    
    for (var i = 1; i <= 10; i++) {
        fat1 = fatorial(i)
        j--
        fat2 = fatorial(j)
        resp.innerHTML += `${i}! - ${j}! = ${fat1 - fat2}<br>`
    }
}

function fatorial(numb) {
    if (numb <= 0) {
        return 1
    }
    
    return numb * fatorial(numb - 1)
}


//for(var j = 10; j > 0; j -= 1) {
//    fat2 = fatorial(j)
//    resp.innerHTML += `${i}! - ${j}! = ${fatorial(i - j)}<br>`
//}