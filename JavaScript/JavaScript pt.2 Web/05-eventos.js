/*
    Eventos

    "on" -> TAG eventos no HTML (JavaScript)

    Desafio:
    Pegar o valor digitado no input, clicar no botão e mudar o valor do parágrafo. (Concluído)
*/

function cliqueNoBotao() {
    const input1 = document.querySelector("#main-input")
    const parg = document.querySelector(".paragrafo")

    parg.innerHTML = input1.value

    console.log(input1.value)
}

function digiteiNoInput() {
    console.log("Digite no input")
}