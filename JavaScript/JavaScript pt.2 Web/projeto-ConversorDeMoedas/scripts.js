const buttonConverte01 = document.querySelector(".buttonConverte")
const moedaSelect = document.querySelector(".moedas-a-escolher")

function converteValores(){
    const inputValor = document.querySelector(".input-valor").value
    const valorMoeda01 = document.querySelector(".valor-moeda-01") // Valor em real
    const valorMoeda02 = document.querySelector(".valor-moeda-02") // Outras moedas

    const dolarDoDia = 5.1 // Dolar do dia
    const euroDoDia = 6.2 // Euro do dia
    const libraDoDia = 6.24 // Libra do dia


    if (moedaSelect.value == "dolar"){
        // Se o select estiver selecionado o valor de 'dolar' entre aqui
        valorMoeda02.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputValor / dolarDoDia) // O valor do input dividido pelo valor da moeda.

    }

    if (moedaSelect.value == "euro"){
        // Se o select estiver selecionado o valor de 'euro' entre aqui
        valorMoeda02.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputValor / euroDoDia)
    }

    if (moedaSelect.value == "libra"){
        // Se o select estiver selecionado o valor de 'euro' entre aqui
        valorMoeda02.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "GBP"
        }).format(inputValor / libraDoDia)
    }



    valorMoeda01.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputValor)
    // Configuração padrão do JS para aparecer corretamente quando converter os valores. Real Brasileiro
}


function changeMoeda(){
    const moedaNome = document.getElementById('moeda-nome') // não preciso colocar # na frente
    const moedaImagem = document.getElementById('moeda-img')

    if (moedaSelect.value == "dolar") {
        moedaNome.innerHTML = "Dólar Americano"
        moedaImagem.src = "./assets/dolar.png"
    }

    if (moedaSelect.value == "euro") {
        moedaNome.innerHTML = "Euro" // trocando texto
        moedaImagem.src = "./assets/euro.png" // trocando a imagem
    }

    if (moedaSelect.value == "libra") {
        moedaNome.innerHTML = "Libra"
        moedaImagem.src = "./assets/libra.png"
    }
    converteValores() // Chamando a função quando o select trocar a imagem e converter junto para não confundir o usuário.
}

moedaSelect.addEventListener("change", changeMoeda)
buttonConverte01.addEventListener("click", converteValores)