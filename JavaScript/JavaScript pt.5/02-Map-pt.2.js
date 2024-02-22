/*
    Map -> Mapear o nosso array

    - Criar um novo array, a partir do array percorrido (array original)
    - Criar um novo array, com a mesma quantidade de itens do array original
    - Aceita 3 parâmetros
        - item do array     (OBRIGATÓRIO)
        - index
        - array completo
*/

// Se for vip usa a pulseira preta
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
console.log("\n") // espaçamento no terminal



// abaixo de 5 está reprovado
const estudantes = [
    { nome: "Raphael", nota: 8 },
    { nome: "Rodolfo", nota: 7 },
    { nome: "Viviane", nota: 4 },
    { nome: "Andressa", nota: 6},
    { nome: "Danilo", nota: 2 },
    { nome: "Beatriz", nota: 9 },
]

const verificacao = estudantes.map(estudante => {
    if (estudante.nota >= 5) {
        nota = estudante.nota + " -> Aprovado"
    } else {
        nota = estudante.nota + " -> Reprovado"
    }

    const verificando = {
        nome: estudante.nome,
        nota: nota
    }
    
    return verificando
})

console.log(verificacao)