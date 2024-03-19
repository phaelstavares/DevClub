/*
    Var x Let x Const

    - Quando essas variáveis são globais eu consigo acessar elas em um 'if', por exemplo, mas se elas estiverem dentro de um 'if' somente o 'var' pode acessar o lado de fora e isso o torno perigoso, por isso NÃO é recomendado utilizá-lo.
*/

var meuVar01 = "Olá"
let meuLet01 = "Oi"
const meuConst01 = "Hey"

if(true) {
    var meuVar02 = "Olá mundo"
    let meuLet02 = "Oi mundo"
    const meuConst02 = "Hey mundo"

    console.log(meuVar01, meuLet01, meuConst01)
    // conseguem acessar do lado de fora e de dentro, porque são globais e estão do lado de fora

    console.log(meuLet02, meuConst02) // conseguem acessar somente do lado de dentro
}

console.log(meuVar02) // consegue acessar do lado de dentro e de fora (isso é perigoso, por isso não usamos mais var)

// console.log(meuLet02, meuConst02) não consegue acessar do lado de fora, somente do lado de dentro



let meuLet03 = "Bom dia!"
meuLet03 = "Boa tarde!"
console.log(meuLet03) // Boa tarde!
// o 'let' deixa trocar o valor o 'const' NÃO deixa



const meuObjeto03 = { nome: "Raphael" }
meuObjeto03.nome = "João"
console.log(meuObjeto03)
// não pode atribuir um novo valor para a variável, mas pode alterar o valor das propriedades internas da variável.



/*
    const meuObjeto04 = [1, 2, 3]
    meuObjeto04 = [2, 4, 6]
    console.log(meuObjeto04)

    // NÃO consigo fazer isso
*/

const meuObjeto05 = [1, 2, 3]
meuObjeto05[0] = 4 // meuObjeto05[ posição que vai alterar o array ] = novo elemento
console.log(meuObjeto05)
// consigo fazer assim