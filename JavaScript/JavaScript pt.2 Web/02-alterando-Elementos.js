/*
    document -> HTML

    getElementById -> Trás UM elemento pelo ID
    getElementByClassName -> Trás TODOS os elementos com essa classe
    getElementByTagName -> Trás TODOS os elementos com essa TAG
    getElementByName -> Trás TODOS os elementos com esse NAME

    querySelector -> Trás UM elemento, o PRIMEIRO que encontrar
    querySelectorAll -> Trás TODOS os elementos que encontrar
*/

const element1 = document.querySelector("#main-input")

element1.placeholder = "Agora é esse texto"
console.log("element1.placeholder")



const element2 = document.querySelector("img")

element2.src = "../img/Banner-DevClub-Video.png"
console.log(element2.src)