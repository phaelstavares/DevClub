/*
    Eventos
    addEventListener -> É a maneira de registrar uma espera de evento.
*/

const input01 = document.querySelector("#main-input")
const select02 = document.querySelector("select")
const button03 = document.querySelector(".main-button")



select02.addEventListener("change", function(){
    console.log("Troquei o valor")
})



function troqueiValor(event){
    console.log(event)
}

input01.addEventListener("keypress", troqueiValor)



function troqueiValor02(event){
    console.log(event)
}

button03.addEventListener("click", troqueiValor02)

/*
    ou
    
    button03.addEventListener("click", function(event){
        console.log(event)
    })
    
*/