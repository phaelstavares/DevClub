const person = {
    nome: "Raphael",
    idade: 19,
    talk: function () {
        console.log("Hello")
    }
}

function soma(primeiroNumero, segundoNumero) {
    return primeiroNumero + segundoNumero
}

function multi(primeiroNumero, segundoNumero) {
    return primeiroNumero * segundoNumero
}

// module.exports = { person, soma, multi }
this.personExport = person // não estava dando só 'person' então coloquei mais um nome na frente
this.soma = soma
this.multi = multi