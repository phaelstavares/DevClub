const lista = document.querySelector("ul")
const botaoMostrarTudo = document.querySelector(".botaoMostrarTudo")
const botaoDesconto = document.querySelector(".adicionar-desconto")
const somarTudo = document.querySelector(".somar-tudo")
const filtrarTudo = document.querySelector(".filtrar-tudo")

function formatarDinheiro(valor) {
    const novaMoeda = valor.toLocaleString("pt-br", {style: "currency", currency: "BRL"});

    return novaMoeda
}

function mostrarTudo(produtosArray) {
    let meuLi = ""

    produtosArray.forEach(produto => {
        meuLi +=  /* meuLi = meuLi + */ `
            <li>
                <img src=${produto.src} alt="${produto.name}">
                <p>${produto.name}</p>
                <p class="preço-item"> ${formatarDinheiro(produto.price)}</p>
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

function SomarTodosItens() {
    const valorTotal = menuOptions.reduce((acumulador, valorAtual) => acumulador + valorAtual.price, 0)
    console.log(valorTotal)


    lista.innerHTML = `
        <li>
            <p>O valor total dos itens do menu é <span class="preço-item"> ${formatarDinheiro(valorTotal)} </span></p>
        </li>
    `
}

function filtrarTudoVegano() {
    const filtrarSoVegano = menuOptions.filter(produto => produto.vegan)
    
    mostrarTudo(filtrarSoVegano)
}

botaoMostrarTudo.addEventListener("click", () => mostrarTudo(menuOptions))
botaoDesconto.addEventListener("click", mostrarDesconto)
somarTudo.addEventListener("click", SomarTodosItens)
filtrarTudo.addEventListener("click", filtrarTudoVegano)