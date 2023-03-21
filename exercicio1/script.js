//IMPRIMIR NOME E TABUADA USANDO FUNÇÃO 

//USANDO FUNÇÃO "SIMPLES", CUMPRIMENTAR
//console.log("***************Funções: nessa tabuada usei um loop e prompt******************")
// function simpatico (nome){
//     console.log(`Olá ${nome}!`)
// }
// simpatico ("beatriz")


//USANDO EXPRESSÕES DE FUNÇÃO E ARROW FUNCTIONS
//console.log("***************Usando expressão de função e arrow function*******************")

//expressão de função
const cumprimentar = function (nome){
    console.log (`Olá ${nome}`)
}
cumprimentar ("beatriz")

//arrow function
const multTable = (n) => {
     console.log(`
    ${n}x1= ${n*1}
    ${n}x2= ${n*2}
    ${n}x3= ${n*3}
    ${n}x4= ${n*4}
    ${n}x5= ${n*5}
    ${n}x6= ${n*6}
    ${n}x7= ${n*7}
    ${n}x8= ${n*8}
    ${n}x9= ${n*9}
    ${n}x10= ${n*10}`)
}
multTable(5)


//   function tabuada (n){
//     for (let i = 1; i<=10; i++){
//         console.log(n+"x"+i+"=", n*i)   
//     } 
//  }
// tabuada(Number(prompt("Insura número para tabuada")))



//Como inserir esse valor pelo prompt? let number =  prompt (); tabuada(number)
// tabuada(let number = prompt (insura um número para calcular tabuada))