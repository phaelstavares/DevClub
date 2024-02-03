/*
    document -> HTML

    getElementById -> Trás UM elemento pelo ID
    getElementByClassName -> Trás TODOS os elementos com essa classe
    getElementByTagName -> Trás TODOS os elementos com essa TAG
    getElementByName -> Trás TODOS os elementos com esse NAME

    querySelector -> Trás UM elemento, o PRIMEIRO que encontrar
    querySelectorAll -> Trás TODOS os elementos que encontrar

    -----------------------------------------------------------------

    Alterando e Acessando Textos

    textContent -> Pega todo o conteúdo
    innerText -> Pega APENAS o texto
    innerHTML -> Permite adicionar HTML e texto
*/

const element1 = document.querySelector(".paragraph-js")

element1.innerHTML = "O novo texto é esse, <b>viu?</b>"

console.log(element1.textContent) // só HTML
console.log(element1.innerText) // leva em conta o CSS
console.log(element1.innerHTML) // trás TUDO -> Permite adicionar TAG'S HTML