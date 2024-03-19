const person3 = {
    nome: "Maria",
    idade: 25
}

function soma3(primeiroNumero, segundoNumero) {
    return primeiroNumero + segundoNumero
}

function multi3(primeiroNumero, segundoNumero) {
    return primeiroNumero * segundoNumero
}

module.exports = { person3, soma3, multi3 } // exportar todos os elementos (fica visível para os outros arquivos .js) 