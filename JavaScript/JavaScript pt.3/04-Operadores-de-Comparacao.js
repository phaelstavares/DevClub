/*
    Operadores de comparação

    ==    ->  Igual / Compara o valor, mas não o tipo
    ===   ->  TOTALMENTE igual / Compara o VALOR e o TIPO

    !=    ->  Diferente / Ele compara o valor, mas não o tipo
    !==   ->  TOTALMENTE Diferente / Compara o VALOR e o TIPO

*/

const number01a = 30
const number02a = "30"

if(number01a == number02a){
    console.log("São iguais")
} else {
    console.log("Não são iguais")
}

console.log(number01a != number02a) // comparando se o VALOR é diferente
console.log(number01a !== number02a) // comparando se o TIPO é diferente




const number01b = 30
const number02b = "30"
console.log(number01b == number02b) // compara somente o valor, por isso é 'true'


const number01c = 30
const number02c = "30"
console.log(number01c === number02c) // compara o valor e o tipo, por isso é 'false' (o tipo não é igual)