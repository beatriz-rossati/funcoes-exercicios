//FUNÇÃO SOMA, COM VALOR PASSADO PELO PROMPT E IMPRESSO
function soma(n1, n2) {
    return n1 + n2
}

let numero1 = Number(prompt("Insira o 1º número para a soma:"))
let numero2 = Number(prompt("Insira o 2º número para a soma:"))
console.log(`O valor da soma de ${numero1} e ${numero2} é: ${soma(numero1, numero2)}`)

//FUNÇÃO SUBTRAÇÃO, COM PROMPT E CONSOLE.LOG
function subtracao(n1, n2) {
    console.log("O resultado da múltiplicação entre,", numero1, "e", numero2, "é:", n1 - n2)
}

subtracao(
    numero1 = prompt("Insira o 1º número para a subtração:"),
    numero2 = prompt("Insira o 2º número para a subtração:")
)

//FUNÇÃO MULTIPLICAÇÃO, COM PROMPT E CONSOLE.LOG
const multiplicacao = function (n1, n2) {
    console.log("O resultado da múltiplicação entre,", numero1, "e", numero2, "é:", n1 * n2)
}

multiplicacao(
    numero1 = prompt("Insira o 1º número para a multiplicação:"),
    numero2 = prompt("Insira o 2º número para a multiplicação:")
)

//FUNÇÃO DIVISÃO, COM PROMPT E CONSOLE.LOG
const divisao = (n1, n2) => {
    return n1 / n2
}

divisao(
    numero1 = prompt("Insira o 1º número para a divisão:"),
    numero2 = prompt("Insira o 2º número para a divisão:")
)

console.log(`O valor da divisão de ${numero1} por ${numero2} é: ${divisao(numero1, numero2)}`)

//aqui colocaram tbm todas as contas e só depois pediram o valor no prompt