/*
    Desafio 1 - Map, Reduce & Filter

    Adicionar 10% do valor de mercado a todas as companhias -> MAP
    Filtrar somente companhias fundadas abaixo de 1990 -> FILTER
    Soma o valor de mercado das restantes -> REDUCE
*/

const companhias = [
    { nome: 'Intel', valorMercado: 117, ceo: 'Brian Krzanich', fundacao: 1968 },
    { nome: 'Samsung', valorMercado: 50, ceo: 'Kim Hyun Suk', fundacao: 1938 },
    { nome: 'Microsoft', valorMercado: 415, ceo: 'Satya Nadella', fundacao: 1975 },
    { nome: 'Facebook', valorMercado: 383, ceo: 'Mark Zuckerberg', fundacao: 2004 },
    { nome: 'Apple', valorMercado: 845, ceo: 'Tim Cook', fundacao: 1976 },
    { nome: 'Spotify', valorMercado: 30, ceo: 'Daniel Ek', fundacao: 2006 }
]

// Em vez de criar várias variáveis, posso criar uma só e ir linkando o 'Filter' e 'Reduce'.
const compMap = companhias.map(valor => {
    valor.valorMercado = valor.valorMercado + (valor.valorMercado / 10)

    return valor

}).filter(fund => {
    return fund.fundacao < 1990

}).reduce((acumulador, valorTotal) => {
    return acumulador + valorTotal.valorMercado

}, 0) // valor inicial do acumulador

console.log(compMap)
console.log("\n") // espaçamento no terminal



/*
    Desafio 2

    Subtrair 10% do valor de mercado a todas as companhias -> MAP
    Filtrar somente companhias fundadas depois de 1980 -> FILTER
    Soma o valor de mercado das restantes -> REDUCE
*/

const novasCompanhias = companhias.map(valor => {
    valor.valorMercado = valor.valorMercado.toFixed() - (valor.valorMercado / 10)
    // toFixed() é uma ferramenta interna do JavaScript que ela vai falar quantas casas decimais eu quero.
    
    return valor
    
}).filter(datafundacao => {
    return datafundacao.fundacao > 1980

}).reduce((acumulador, valorTotal) => {
    return acumulador + valorTotal.valorMercado

}, 0) // valor inicial do acumulador

console.log(novasCompanhias)