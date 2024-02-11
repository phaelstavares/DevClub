/*
    For
    Estrutura de Repetição - LOOP

    1 - INICIALIZAÇÃO - Criar uma variável e colocar um valor inicial para ela.
    2 - CONDIÇÃO - Enquanto for true, o laço continuará iterando. Ele irá verificar antes de cada iteração.
    3 - EXPRESSÃO FINAL - O que irá ocorrer a cada vez que o nosso laço der uma volta.


    for ([inicialização]; [condição]; [expressão final]){
        o código aqui
    }

*/

for(let i = 0; i < 15; i++){
    console.log(i)
}



const users = ["Maria", "João", "Cecília", "Ricardo", "Danilo", "Raphael", "Rafaela", "Guilherme", "Emanuele"]
// length (tamanho do array) = 9

// users.length -> Tamanho do meu array
for(let i = 0; i < users.length; i++){
    console.log(users[i])
}