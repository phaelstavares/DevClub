/*
    document -> HTML

    getElementById -> Trás UM elemento pelo ID
    getElementByClassName -> Trás TODOS os elementos com essa classe
    getElementByTagName -> Trás TODOS os elementos com essa TAG
    getElementByName -> Trás TODOS os elementos com esse NAME

    querySelector -> Trás UM elemento, o PRIMEIRO que encontrar
    querySelectorAll -> Trás TODOS os elementos que encontrar
*/

const input = document.getElementById("main-input")
console.log(input)


const elements = document.getElementsByClassName("paragraph-js")
console.log(elements)


const tagName = document.getElementsByTagName("h1")
console.log(tagName)


const byName = document.getElementsByName("nome-completo")
console.log(byName)


const query = document.querySelector("#main-input")
console.log(query)


const queryAll = document.querySelectorAll("input")
console.log(queryAll)