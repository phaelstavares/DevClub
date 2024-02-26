const formulario = document.querySelector(".formulario-contato")
const sombraformulario = document.querySelector(".sombra-formulario")

function cliqueiNoBotao() {
    formulario.style.left = "50%"
    formulario.style.transform = "translateX(-50%)"
    sombraformulario.style.visibility = "visible"
}

function esconderClicandoSombra() {
    formulario.style.left = "-300px"
    formulario.style.transform = "translateX(0)"
    sombraformulario.style.visibility = "hidden"
}