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

const texto1 = document.querySelector("h1")

texto1.style.fontSize = "100px"
// sem o hífen e com a próxima letra maiúscula.


const button = document.querySelector(".main-button")

button.style.backgroundColor = "#852394"
// No JavaScript quando for alterar a cor do "background-color" por exemplo, é preciso mencionar no código "backgroundColor" sem o hífen e com uma letra maiúscula no local.