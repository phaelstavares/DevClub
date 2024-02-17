/*
    Calcular Desconto:
    Todos os produtos acima de R$ 30,00 tem desconto de 10%

    R$ 250,00 * 7
    1750 / 100
    17,50
*/

const cart = [250, 147, 25, 5, 289, 367]
let valorFinal = 0
let valorTotal = 0

function calcularDesconto(preco, desconto){
    const resultado = (preco * desconto) / 100
    return resultado
}

function calcularTotal(){
}

cart.forEach(valortotal => {
    calcularTotal(valortotal)
    valorTotal = valorTotal + valortotal
});

cart.forEach(valor => {
    if(valor > 30){
        const desconto = calcularDesconto(valor, 10)
        valorFinal = valorFinal + (valor - desconto)
    } else {
        valorFinal += valor // valorFinal = valorFinal + valor
    }
});


console.log(`O valor final da compra foi R$ ${valorTotal.toFixed(2)}, porém você teve desconto de 10% e ficou R$ ${valorFinal.toFixed(2)}.`)
// toFixed() é uma ferramenta interna do JavaScript que ela vai falar quantas casas decimais eu quero.