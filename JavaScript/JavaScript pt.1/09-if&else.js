/*
    Controlador de Fluxo
    - if (se)
    - else (se não)

    Operadores de comparação
    > maior que
    < menor que
    == igual que
*/

const notaDoAluno = 8
const notaDeCorte = 6

if(notaDoAluno > notaDeCorte){
    console.log("Parabéns, você passou!")
}
else{
    console.log("Você não passou.")
}



const SenhaDoUsuario = 123457
const SenhaGuardada = 123456

if (SenhaGuardada == SenhaDoUsuario){
    console.log("Seja bem-vindo! Você está logado.")
}
else {
    console.log("Senha incorreta.")
}