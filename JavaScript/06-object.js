/*
    Tipos de Dados:
    1. String -> Textos
    2. Numbers -> Números
    3. Boolean -> Boleano
    4. Object -> Objetos

    Operadores aritméticos:
    + - * /
*/

const Objeto = {
    nome: "Raphael",
    idade: 18,
    endereço: {
        rua: "Dos Bobos",
        numero: 0,
        cidade: "Belo Horizonte",
        estado: "MG",
        pais: "Brasil",
    }
}

Objeto.endereço.numero = 1

console.log(Objeto)
console.log(Objeto.idade)
// pegando só a idade dentro do objeto