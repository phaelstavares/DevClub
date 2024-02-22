/*
    Map -> Mapear o nosso array

    - Criar um novo array, a partir do array percorrido (array original)
    - Criar um novo array, com a mesma quantidade de itens do array original
    - Aceita 3 parâmetros
        - item do array     (OBRIGATÓRIO)
        - index
        - array completo
*/

const numero = [1, 2, 3, 4, 5, 6, 7]

const dobro = numero.map((item, index, arrayOriginal) => {
    
    console.log(item + " -> item")
    console.log(index + " -> index")
    console.log(arrayOriginal + " arrayOriginal")

    return item * 2
})

console.log("\n") // espaçamento no terminal
console.log(numero)
console.log(dobro)