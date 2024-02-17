/*
    Função void (vazia), não retorna nada.
    Função return, retorna um valor para quem chamou a função.

    'return' tem que ser o último elemento, quando a função encontra o 'return' ela para de funcionar.
*/

// void
function soma(valor1, valor2){
    console.log(valor1 + valor2)
}

const result = soma(10, 20)
console.log(result, " Resultado") // não retorna



// return
function sob(valor1, valor2){
    return valor1 + valor2
    // 'return' tem que ser o último elemento, quando a função encontra o 'return' ela para de funcionar.
}

console.log(sob(10, 70), " é o resultado.") // retorna