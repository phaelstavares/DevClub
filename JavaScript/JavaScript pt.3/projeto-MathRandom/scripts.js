function buttonClick() {
    const min = Math.ceil(document.querySelector(".input-entre").value)
    const max = Math.floor(document.querySelector(".input-e").value)
    // '.value' é para somente mostrar o valor.

    const result = Math.floor(Math.random() * (max - min +1)) + min;
    
    alert(result)
}