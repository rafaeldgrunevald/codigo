let num = [5, 8, 2, 9, 3]

num.push(1) // .push coloca dentro do vetor oque esta dentro daqueles parenteses
num.sort() // Metodo interno de todo vetor, ele vai colocar em ordem

let pos = num.indexOf(8)

console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)

if (pos == -1) {
    console.log("O valor não foi encontrado!")
} else {
    console.log(`O valor esta na posição ${pos}`)
}



