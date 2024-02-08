function buttonClick() {
    const min = Math.ceil(document.querySelector(".input-entre").value)
    const max = Math.floor(document.querySelector(".input-e").value)
    // '.value' é para somente mostrar o valor.


    // Operador de Comparação >= (maior ou igual que)
    if(min >= max){
        alert("O primeiro valor tem q ser MENOR que o segundo.")

        // se o 'min' for MENOR que o 'max', o código roda o else
    } else {
        const result = Math.floor(Math.random() * (max - min +1)) + min;
    
        alert(result)
    }
}