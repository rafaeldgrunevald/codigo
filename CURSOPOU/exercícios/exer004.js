const prompt = require("prompt-sync")();

function promptv2(texto) {
  console.log(texto);
  let resposta = prompt("> ");
  return resposta;
}

let entrada1 = [];
let entrada2 = [];
let tamanhoent1 = promptv2("Qual o tamanho do vetor 1?");
let tamanhoent2 = promptv2("Qual o tamanho do vetor 2?");

for (i = 0; i < parseInt(tamanhoent1); i++) {
  entrada1[i] = promptv2(`Qual o valor da entrada [${i}] do primeiro vetor`);
}
for (i = 0; i < parseInt(tamanhoent2); i++) {
  entrada2[i] = promptv2(`Qual o valor do entrada [${i}] do segundo vetor`);
}

console.log(entrada1);
console.log(entrada2);
