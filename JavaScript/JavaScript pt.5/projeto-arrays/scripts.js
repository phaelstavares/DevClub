const lista = document.querySelector("ul")
const botaoMostrarTudo = document.querySelector(".botaoMostrarTudo")
let meuLi = ""

function mostrarTudo() {
    menuOptions.forEach(produto => {
        meuLi +=  /* meuLi = meuLi + */ `
            <li>
                <img src=${produto.src} alt="${produto.name}">
                <p>${produto.name}</p>
                <p class="preço-item">R$ ${produto.price}</p>
            </li>
        `
    })
    
    lista.innerHTML = meuLi
}

botaoMostrarTudo.addEventListener("click", mostrarTudo)