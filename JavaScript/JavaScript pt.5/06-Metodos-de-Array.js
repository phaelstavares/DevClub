/*
    Métodos de Array's

    - push: Adiciona um item no array.
    - length: Mostra o tamanho do array. A quantidade de itens dentro do array.
    - sort: Organiza o array
    - delete: Deleta um item do array. O item é deletado, mas o espaço fica vazio. Retornando undefined.
    - every:  Esse método testa se todos os elementos do Array passam em uma condição. Passamos uma função que retorna true ou false. Se todos os retornos forem true, significa que todos os elementos passaram no teste, e a função retornará true. Se algum item não estiver de acordo, ele retornará false.
    - some: faz algo parecido com o .every(). A diferença é que o .every() só retorna true se todos os elementos passarem no teste. O .some() retorna true se pelo menos um elemento do Array passar no teste.
    - fill: Preenche posições do array como desejarmos
    - find: Usamos esse método quando queremos encontrar algum elemento dentro no Array. Para isso, passamos uma função que irá retornar true ou false. O primeiro true que for retornado irá finalizar a função e retornar o elemento em que estamos.
    - findIndex: Faz o mesmo que o .find(), mas retorna o índice do elemento encontrado ao invés de retornar o próprio elemento.
    - concat - Esse método é usado para juntar dois arrays. Ele não altera os arrays originais, mas cria um novo array com a soma dos dois arrays escolhidos.
    
    - join - O método join() junta todos os elementos de um array.
    - pop - Remove o último elemento de um array.
    - shift - Remove o primeiro elemento de um array.

    - slice - O método slice() retorna um novo array, apenas com as informações escolhidas
    - splice - Esse metódo remove ou adiciona elementos em um array em uma posição específica.
    - includes - Esse método nos diz se há ou não um determinado item no array. Retorna true ou false.
*/

// push (o item adicionado sempre será colocado na última posição do array)
const meuArray = [1, 2, 3]
meuArray.push(4)
meuArray.push("Abacate")
console.log(meuArray)


// length (mostra a quantidade de itens dentro do array)
console.log(meuArray.length)


// sort (organiza o array)
const meuArray2 = ["limão", "maçã", "uva", "abóbora"]
meuArray2.sort()
console.log(meuArray2)


// delete (deleta um item do array, mas a posição continua)
const meuArray3 = ["abacate", "limão", "maçã", "uva", "abóbora"]
delete meuArray3[2]
console.log(meuArray3)


// every (se todos os retornos forem true, significa que todos os elementos passaram no teste, se um não passar ele retorna como false)
const users = [
	{name: 'Nico', credit: 600},
	{name: 'Maria', credit: 900},
	{name: 'Joana', credit: 300},
	{name: 'Vanessa', credit: 200},
];
const isTrue = users.every(user => user.credit > 500)
console.log(isTrue)


// some (retorna true se pelo menos um elemento do array passar no teste)
const isTrue2 = users.some(user => user.credit > 800)
console.log(isTrue2)


// fill (preenche posições do array como desejarmos)
const numeros = [1, 2, 3, 4]
numeros.fill("OVOS", 1, 3) // o que vai ser colocado / posição inicial / posição final
console.log(numeros)


// find (usamos esse método quando queremos encontrar algum elemento dentro no array)
const findUser = users.find(user => user.name === "Maria")
console.log(findUser)


// findIndex (retorna a posição do elemento encontrado ao invés de retornar o próprio elemento)
const findIndexUser = users.findIndex(user => user.name === "Nico")
console.log(findIndexUser)


// concat (cria um novo array e junta os dois arrays escolhidos)
const array1 = ["a", "b", "c"]
const array2 = [1, 2, 3]
const array3 = array1.concat(array2)
console.log(array3)


// join (junta todos os elementos de um array)
const elementos = ["água", "fogo", "ar", "terra"]
const meusElementos = elementos.join(" / ")
console.log(meusElementos)


// pop (remove o último elemento de um array)
const elementos2 = ["água", "fogo", "ar", "terra"]
elementos2.pop()
console.log(elementos2)


// shift (remove o primeiro elemento de um array)
const numeracao = [1, 2, 3, 4]
numeracao.shift()
console.log(numeracao)


// slice (retorna um novo array, apenas com as informações escolhidas)
const nomes = ["João", "Victoria", "Maria", "Lucas", "Felipe"]
const novosNomes = nomes.slice(1, 3) // começa / termina e não pega onde terminou
console.log(novosNomes)


// splice (remove ou adiciona elementos em um array em uma posição específica)
const meses = ["Jan", "Fev", "Mar", "Abr", "Mai"]
meses.splice(2, 1, "MARÇO")
console.log(meses)


// includes (diz se há ou não um determinado item no array, retorna true ou false)
const animais = ["gato", "cachorro", "coelho"]
console.log(animais.includes("gato"))