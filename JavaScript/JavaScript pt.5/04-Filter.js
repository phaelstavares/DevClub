/*
    Filter
    - Cria um novo array, a partir do array percorrido (array original)
    - Cria um novo array APENAS com os elementos filtrados
    - Aceita 3 parâmetros
	    - item do array    (OBRIGATÓRIO)
	    - index
	    - array completo

    return true  -> item atual passa pro novo array
    return false -> item atual NÃO passa pro novo array
*/

// se o número for maior que 100 ele vai para a nova lista
const lista = [20, 3, 250, 15, 49, 172, 98, 2, 538, 995]

const novaLista = lista.filter(numero => {
    if (numero > 100) {
        return true
    } else {
        return false
    }
})

console.log(novaLista)



// ou posso fazer assim também, se o número for menor que 100 ele vai para a nova lista
const novaLista2 = lista.filter(numero => numero < 100) // economizar código

console.log(novaLista2)



// se o número for menor que 100 e PAR ele aparece na lista
const novaLista3 = lista.filter(numero => numero < 100 && numero % 2 === 0) // se for PAR

console.log(novaLista3)


// ou


// se o número for maior que 100 e PAR ele aparece na lista
const novaLista4 = lista.filter(numero => {
    if (numero > 100 && numero % 2 === 0){ // se for PAR
        return true
    } else {
        return false
    }
})

console.log(novaLista4)



// desafio: a companhia tem que valer mais que 100b e ser fundada depois de 1970
const companhias = [
    {nome: "Samsung", valorMercado: 50, ceo: "Kim Hyun Suk", fundacao: 1938},
    {nome: "Apple", valorMercado: 845, ceo: "Tim Cook", fundacao: 1976},
    {nome: "Spotify", valorMercado: 300, ceo: "Daniel EK", fundacao: 2006},
]

const novasCompanhias = companhias.filter(companhia => companhia.valorMercado > 100 && companhia.fundacao > 1970)
console.log(novasCompanhias)