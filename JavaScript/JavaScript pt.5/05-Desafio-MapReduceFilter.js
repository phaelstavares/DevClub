/*
    Desafio 1 - Map, Reduce & Filter

    Adicionar 10% do valor de mercado a todas as companhias -> MAP
    Filtrar somente companhias fundadas abaixo de 1990 -> FILTER
    Soma o valor de mercado das restantes -> REDUCE
*/

const companhias = [
    {nome: "Samsung", valorMercado: 50, ceo: "Kim Hyun Suk", fundacao: 1938},
    {nome: "Apple", valorMercado: 845, ceo: "Tim Cook", fundacao: 1976},
    {nome: "Spotify", valorMercado: 300, ceo: "Daniel EK", fundacao: 2006},
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