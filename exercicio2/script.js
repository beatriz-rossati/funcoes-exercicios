//FUNÇÃO DE SOMA
function sum (n1, n2){
    console.log(n1+n2)
}
sum (7,55) 


//FUNÇÃO QUE IMPRIMA SE O 1º NÚMERO É MAIOR OU IGUAL AO SEGUNDO
const maiorOuIgual = function (n1, n2){
    return n1>=n2
}
console.log (maiorOuIgual (30,22))


//FUNÇÃO QUE IMPRIMA UM BOOLEANO INFORMANDO SE O NÚMERO É PAR OU NÃO
const isEven = (n1) => {
    return n1%2===0
}
const numeroInserido = Number(prompt("teste se é par: "))
isEven (numeroInserido)? "é par": "é impar"
//console.log(isEven(prompt("Teste se é par:")) ? "É par" :" Nâo é par")


//RECEBE UM SALÁRIO BRUTO E RETORNA O LÍQUIDO, COM DESCONTO DE 10% INSS

function salarioLiquido (salarioBruto) {
    const taxaINSS = 0.1
    const calcSalario = salarioBruto * (1-taxaINSS)
    console.log("Seu salário liquido é:",calcSalario)
}
salarioLiquido (prompt("Insira seu salário bruto:"))
