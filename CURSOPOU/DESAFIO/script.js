/*
Dado uma entrada que é um numero de 1 a 1000000
verifique se este numero é primo
*/

function primos() {
  let numb = document.querySelector("input#numb").value;
  let resp = document.querySelector("div#resp");
  let j = "";

  resp.innerHTML = "";

  if (numb == 1) {
    resp.innerHTML += "É primo!";
  } else if (numb == 2) {
    resp.innerHTML += "Não é primo!";
  } else {
    for (let i = 2; i < numb; i++) {
      if (numb % i == 0) {
        j = "Não é primo";
        i = numb + 1;
      } else {
        j = "É primo";
      }
    }
    resp.innerHTML += j;
  }
}
