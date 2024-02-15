/*
    Estrutura de Repetição - LOOP
    For in

    São a mesma coisa:

    - users.nome
    - users["nome"]

*/

const users = {nome: "Raphael", idade: 18, endereco: "Rua dos bobos, número 0"}

for (const key in users) {
    console.log(key + ": " + users[key]) //  ou  (`${key} : ${users[key]}`)
}

console.log("\n") // pular linha no terminal

// são a mesma coisa, porém o [] da "superpoderes"
console.log(users.nome)
console.log(users["nome"])