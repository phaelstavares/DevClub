/*
    Map -> Mapear o nosso array

    - Criar um novo array, a partir do array percorrido (array original)
    - Criar um novo array, com a mesma quantidade de itens do array original
    - Aceita 3 parâmetros
        - item do array
        - index
        - array completo
*/

const lista = [
    { nome: "Raphael", vip: true },
    { nome: "Victoria", vip: false },
    { nome: "Felipe", vip: true },
    { nome: "Danilo", vip: true },
    { nome: "Ana", vip: true },
    { nome: "Rodolfo", vip: false },
]

const novaLista = lista.map( usuario => {
    const novosUsuarios = {
        nome: usuario.nome,
        pulseira: usuario.vip ? "preta" : "verde" //  ( ?  ->  if )  ( :  ->  else )
    }

    return novosUsuarios
})

console.log(novaLista)