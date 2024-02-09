/*
    Operador ternário

    ?    ->  if (se)
    :    ->  else (se não)
    &&   ->  if (sem o else)

    explicação do ELSE IF embaixo
*/

const salario = 11000

if(salario < 3000){
    console.log("O colaborador é Júnior.")
} else if(salario >= 3000 && salario < 10000){
    console.log("O colaborador é Sênior.")
} else{
    console.log("O colaborador é Pleno.")
}

// SÓ IF
const salario1 = 2500
salario1 < 4000 && console.log("O colaborador é Júnior.")
// && -> if (sem else)


// IF e ELSE
const salario2 = 2000
salario2 < 3000 ? console.log("O colaborador é Júnior.") : console.log("O colaborador é Sênior.")
// Ternário é usado em códigos pequenos e não funciona pulando linha.


// IF, ELSE IF e ELSE
const salario3 = 4000
salario3 < 3000 ? console.log("O colaborador é Júnior.") : salario3 >= 3000 && salario3 < 10000 ? console.log("O colaborador é Sênior.") : console.log("O colaborador é Pleno.")
// else if   ->   : salario3 >= 3000 && salario3 < 10000 ? console.log("O colaborador é Sênior.")