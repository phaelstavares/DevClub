/*
    Function Argumentos/Parâmetros
    
    Function -> Funções
    - Trecho de código que é executado SOMENTE quando solicitado.
    - A variável criada dentro de 'function' só funciona dentro da função.
*/

function nomeNaTela(name){
    console.log(`O nome é: ${name}`)
}

nomeNaTela("Raphael")
nomeNaTela("Rodolfo")
nomeNaTela("Alice")
nomeNaTela("Matheus")



function nomeNaTela2(name1, name2){
    console.log(`O nome é: ${name1} e ${name2}`)
}

nomeNaTela2("Regina", "Ronaldo")



function valorPadrao(valor = "Esse é o valor padrão"){ // valor padrão
    console.log(valor)
}

valorPadrao() // se eu não colocar nenhum valor aqui, o valor padrão irá aparecer na tela.



function somaPadrao(num1 = 0, num2 = 0){ // valor padrão
    console.log(num1 + num2)
}

somaPadrao() // se eu não colocar nenhum valor aqui, o valor padrão irá aparecer na tela.



// soma
function valores(valor1, valor2){
    console.log("A soma é:", valor1 + valor2)
}

valores(40, 50)
valores(5, 5)



// subtração
function subtracao(num1, num2){
    console.log("A subtração é:", num1 - num2)
}

subtracao(9, 1)



// multiplicação
function multiplica(num1, num2){
    console.log("A multiplicação é:", num1 * num2)
}

multiplica(5, 3)



// divisão
function divisao(num1, num2){
    console.log("A divisão é:", num1 / num2)
}

divisao(70, 7)



// potência
function potencia(num1, num2){
    console.log("A potência é:", Math.pow(num1,num2))
}

potencia(2, 2)



// raiz
function raiz(num1){
    console.log("A raiz é:", Math.sqrt(num1,2))
}

raiz(25)