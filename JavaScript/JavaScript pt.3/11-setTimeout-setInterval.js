/*
    setTimeout     ->  Executa uma vez
    setInterval    ->  Executa infinitas vezes
    clearInterval  ->  Vai parar o 'setInterval'
        
    // ------------------------------------
       
    3 formas de fazer ↓↓↓

    setTimeout(() => {
        // Executa o que estiver aqui
    }, timeout);


    setTimeout(function() {
        // Executa o que estiver aqui
    }, timeout);


    function myFunction(){
        // Executa o que estiver aqui
    }
    setTimeout(myFunction, timeout);


    // ------------------------------------


    setTimeout(function() {
        alert("Executei!")
    }, 3000); // 1000 milisegundos = 1 segundo
    
    
    
    let number = 0
    
    setInterval(() => {
        console.log(number++) // number = number + 1
    }, 1000);

*/

let number = 0
let cronometro
const h1 = document.querySelector("h1")

function start() {

    cronometro = setInterval(function(){
        number++
        h1.innerHTML = number
    }, 500) // 1000 milisegundos = 1 segundo

}

function stop() {
    clearInterval(cronometro) // Vai parar o 'setInterval'
}