/*
    Else if

    if (se)
    else if (se não se)
    else (se não)
*/

const temperature = 37

if(temperature === 36) { // temperatura igual a 36
    console.log("Você está saudável")

} else if(temperature > 36 && temperature <= 37) { // temperatura maior que 36 e menor ou igual a 37
    console.log("Cuidado, você pode ter febre")

} else if(temperature > 37){ // temperatura maior que 37
    console.log("Você está com febre")
    
} else { // temperatura menor que 36
    console.log("Você está com hipotermia")
}