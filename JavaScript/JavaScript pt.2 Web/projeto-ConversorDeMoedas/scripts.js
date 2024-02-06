const buttonConverte01 = document.querySelector(".buttonConverte")
const moedaSelect = document.querySelector(".moedas-a-escolher")

function converteValores(){
    const inputValor = document.querySelector(".input-valor").value
    const valorMoeda01 = document.querySelector(".valor-moeda-01") // Valor em real
    const valorMoeda02 = document.querySelector(".valor-moeda-02") // Outras moedas

    const dolarDoDia = 5.1 // Dolar do dia
    const euroDoDia = 6.2 // Euro do dia



    if(moedaSelect.value == "dolar"){
        // Se o select estiver selecionado o valor de 'dolar' entre aqui
        valorMoeda02.innerHTML = new Intl.NumberFormat("en-us", {
            style: "currency",
            currency: "USD"
        }).format(inputValor / dolarDoDia) // O valor do input dividido pelo valor da moeda.

    }

    if(moedaSelect.value == "euro"){
        // Se o select estiver selecionado o valor de 'euro' entre aqui
        valorMoeda02.innerHTML = new Intl.NumberFormat("de-de", {
            style: "currency",
            currency: "EUR"
        }).format(inputValor / euroDoDia)
    }

    

    valorMoeda01.innerHTML = new Intl.NumberFormat("pt-br", {
        style: "currency",
        currency: "BRL"
    }).format(inputValor)
    // Configuração padrão do JS para aparecer corretamente quando converter os valores. Real Brasileiro
}

buttonConverte01.addEventListener("click", converteValores)