const prompt = require("prompt-sync")();

let nota1 = promptv2("Qual foi sua primeira nota?");
let nota2 = promptv2("Qual foi sua segunda nota?");
let nota3 = promptv2("Qual foi sua terceira nota?");
let nota = parseInt(nota1) + parseInt(nota2) + parseInt(nota3);

nota = nota / 3;

if (isNaN(nota)) {
  console.log("VOCÊ É IMBECIL, BABACA, SUA MÃE TE ODEIA!");
} else {
  console.log(nota);

  if (nota >= 7) {
    console.log("Passou!");
  } else {
    console.log("Reprovou!");
  }

  /* Outra maneira de escrever o if acima é: nota >= 7? "Passou":"Reprovou!" 
     Onde isso significa
     teste? true: false
  */
}

function promptv2(texto) {
  console.log(texto);
  let resposta = prompt("> ");
  return resposta;
}
