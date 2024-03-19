const person2 = {
    nome: "Rodolfo",
    idade: 30
}

function soma2(primeiroNumero, segundoNumero) {
    return primeiroNumero + segundoNumero
}

function multi2(primeiroNumero, segundoNumero) {
    return primeiroNumero * segundoNumero
}

module.exports = { person2, soma2, multi2 } // exportar todos os elementos (fica visível para os outros arquivos .js)