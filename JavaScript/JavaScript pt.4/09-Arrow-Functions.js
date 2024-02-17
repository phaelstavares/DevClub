/*
    Arrow Functions

    - function padrão -> function() {}
    - arrow function -> () => {}

    Não escrevemos 'function'
    Além disso, usamos o sinal '=>' para criá-la, o que lembra uma flecha.
*/

// function padrão
function myName(nome){
    return `Meu nome é ${nome}`
}

console.log(myName('Raphael'))



// arrow function
const myName2 = (nome) => `Seu nome é ${nome}`
// se o 'arrow function' tiver somente uma linha, não precisa de colocar o 'return'

console.log(myName2('Julia'))



const numbers = (num1, num2) => {
    return num1 * num2
    // precisa utilizar o 'return' porque não está na mesma linha.
}
console.log(numbers(3, 5))