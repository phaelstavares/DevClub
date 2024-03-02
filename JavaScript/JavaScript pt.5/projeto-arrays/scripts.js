const lista = document.querySelector("ul")
const botaoMostrarTudo = document.querySelector(".botaoMostrarTudo")
const botaoDesconto = document.querySelector(".adicionar-desconto")

function mostrarTudo(produtosArray) {
    let meuLi = ""

    produtosArray.forEach(produto => {
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

function mostrarDesconto() {
    const novosPrecos = menuOptions.map(produto => ({
        ...produto, // vai manter os elementos que não foram alterados e alterar oq que foram
        price: produto.price - (produto.price * 0.10), // 10% de desconto
    }))

    mostrarTudo(novosPrecos)
}

botaoMostrarTudo.addEventListener("click", () => mostrarTudo(menuOptions))
botaoDesconto.addEventListener("click", mostrarDesconto)