/*
    ForEach (item, index, array)
*/

const users = [
    { nome: "Raphael", idade: 18, numero: "(32) 98456-1234" },
    { nome: "Julia", idade: 28, numero: "(19) 98456-1234" },
    { nome: "Elaine", idade: 17, numero: "(31) 98456-1234" },
    { nome: "Pedro", idade: 26, numero: "(11) 98456-1234" },
    { nome: "Rodolfo", idade: 33, numero: "(14) 98456-1234" },
]

users.forEach((element, index, array) => {
    // o 'element' é obrigatório, os outros dois é opcional ('element' é uma variável e pode mudar o nome).
    console.log(index)
    console.log(element)
    console.log(array)
});


users.forEach((item, index ) => {
    console.log(`${index + 1}. Nome: ${item.nome}, Idade: ${item.idade}, Telefone: ${item.numero}`)
    // ${index + 1} faz com que a contagem comece com 1 em vez de 0
});