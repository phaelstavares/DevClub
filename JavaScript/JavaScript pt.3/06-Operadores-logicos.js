/*
    Operadores lógicos

    &&  ->  E  ->  Pessoa Exigente
    -  true && true = true
    -  true && false = false
    -  false && false = false

    ||  ->  Ou  -> Tanto faz
    -  true || true = true
    -  true || false = true
    -  false || false = false

    !  ->  Negação
    -  !true = false
    -  !false = true

*/

console.log(false && true && true && true) //  && = e

console.log(false || false || false || true) //  || = ou

console.log(!false) // inverter

console.log(!true) // inverter


// Exemplo de login em um Banco, digitar apenas um login pode ter acesso.
const senhaLog = false
const verfEmail = false
const token = true

if(senhaLog || verfEmail || token){
    console.log("Logado com Sucesso!")
} else {
    console.log("Seu autenticação FALHOU.")
}


// Segurança máxima, precisa de todos os logins para acessar o Banco.
const senhaLog2 = true
const verfEmail2 = true
const token2 = false

if(senhaLog2 && verfEmail2 && token2){
    console.log("Logado com Sucesso!")
} else {
    console.log("Seu autenticação FALHOU.")
}


// Utilizando ! para inverter
const senhaLog3 = true
const verfEmail3 = true
const token3 = true

if( ! (senhaLog3 && verfEmail3 && token3) ){
    console.log("Logado com Sucesso!")
} else {
    console.log("Seu autenticação FALHOU.")
}