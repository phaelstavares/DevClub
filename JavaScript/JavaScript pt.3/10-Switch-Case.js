/*
    Switch Case -> Controlador de Fluxo
    É parecido com o if e else, porém são valores exatos.
*/

const temperature = 28 // não tem esse valor, portanto vai cair no 'default'.

switch (temperature) {
    case 10:
        console.log("Tá frio")
        break;

    case 20:
        console.log("Tá meio frio")
        break;

    case 30:
        console.log("Tá quente")
        break;

    default:
        console.log("Não sei te dizer")
        break;
}