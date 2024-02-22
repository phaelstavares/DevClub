/*
    Reduce
    - Retorna um valor (pode ser um novo array, um objeto, string, number, etc.)
    - Aceita 4 parâmetros
        - acumulador    (OBRIGATÓRIO)
        - valor atual   (OBRIGATÓRIO)
        - index
        - array completo
*/

const lista = [1, 2, 3, 4, 5, 6, 7]

const soma = lista.reduce((acumulador, valorAtual) => {
    console.log(acumulador + " acumulador")
    console.log(valorAtual + " valor atual")
    return acumulador + valorAtual

}, 0) // valor inicial do 'acumulador'

console.log(soma)



// somando o valor de mercado das companhias
const companhias = [
    {nome: "Samsung", valorMercado: 50, ceo: "Kim Hyun Suk", fundacao: 1938},
    {nome: "Apple", valorMercado: 845, ceo: "Tim Cook", fundacao: 1976},
]

const somasComp = companhias.reduce((acumulador, valorAtual) => {
    return acumulador + valorAtual.valorMercado

}, 0) // valor inicial do 'acumulador'

console.log("\n") // espaçamento no terminal
console.log(somasComp)



// comparando o preço por kg e somando o total
const carrinho = [
    {produto: "Maçã", precoKg: 3.55, kg: 1},
    {produto: "Abóbora", precoKg: 5, kg: 1.3},
    {produto: "Morango", precoKg: 11.9, kg: 3}
]

const somaCarrinho = carrinho.reduce((acumulador, valorAtual) => {
    const multi = valorAtual.precoKg * valorAtual.kg
    const result = acumulador + multi
    return result

}, 0) // valor inicial do 'acumulador'

console.log("\n") // espaçamento no terminal
console.log(`A sua compra ficou em: R$ ${somaCarrinho.toFixed(2)}`)
// toFixed() é uma ferramenta interna do JavaScript que ela vai falar quantas casas decimais eu quero.