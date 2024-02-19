const result = document.querySelector(".resultado") // pegando o parágrafo para escrever o resultado
const humanoPontuacao = document.querySelector("#pontuacao-humano")
const botPontuacao = document.querySelector("#pontuacao-maquina")


let humanoScoreNumber = 0
let botScoreNumber = 0


// escolha humana
const clickBotao = (escolhaHumana) => {
    jogarGame(escolhaHumana, playBot())
    // pegando a escolha 'humana' e a escolha do 'bot' colocando no jogarGame para exibir
}


// a escolha aleatória do bot
const playBot = () => {
    const escolha = ["pedra", "papel", "tesoura"]
    const randomNumber = Math.floor(Math.random() * 3) // número aleatório

    return escolha[randomNumber]
}


const jogarGame = (humano, bot) => {
    console.log("Humano: " + humano + " Bot: " + bot)

    if(humano === bot) {
        result.innerHTML = "Resultado: Empate!"
    }
    
    else if(
        (humano === "papel" && bot === "pedra") || 
        (humano === "pedra" && bot === "tesoura") || 
        (humano === "tesoura" && bot === "papel")){

        humanoScoreNumber++
        humanoPontuacao.innerHTML = humanoScoreNumber
        
        result.innerHTML = "Resultado: Você ganhou!"
    }
    
    else {
        botScoreNumber++
        botPontuacao.innerHTML = botScoreNumber

        result.innerHTML = "Resultado: O bot ganhou!"
    }
}