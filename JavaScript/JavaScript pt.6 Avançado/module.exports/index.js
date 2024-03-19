// quando eu exporto um elemento, posso colocar qualquer nome
const person = require("./nome")
const soma = require("./soma")
const multi = require("./multi")
// importando o elemento de outro arquivo .js

console.log(person) // { nome: "Raphael", idade: 19 }

console.log(soma(3, 5)) // 3 + 5 = 8

console.log(multi(3, 5)) // 3 * 5 = 15


// OU eu posso exportar todos elementos do mesmo arquivo ao mesmo tempo

const todos = require("./todos")

console.log(todos.person2)

console.log(todos.soma2(3, 8))

console.log(todos.multi2(3, 3))


// OU

const { person3, soma3, multi3 } = require("./todos2") // dessa forma tem que colocar o nome exato do elemento para exportar

console.log(person3)

console.log(soma3(5, 4))

console.log(multi3(6, 9))