const result = document.querySelector(".resultado") // pegando o parágrafo para escrever o resultado
const humanoPontuacao = document.querySelector("#pontuacao-humano")
const botPontuacao = document.querySelector("#pontuacao-maquina")
const escolhas = document.querySelector(".escolhas")


let humanoScoreNumber = 0
let botScoreNumber = 0


// ENUMS
const GAME_OPTIONS = { // valores fixos/evita cometer erros em códigos grandes
    PEDRA: "pedra",
    PAPEL: "papel",
    TESOURA: "tesoura"
}


// escolha humana
const clickBotao = (escolhaHumana) => {
    jogarGame(escolhaHumana, playBot())
    // pegando a escolha 'humana' e a escolha do 'bot' colocando no jogarGame para exibir
}


// a escolha aleatória do bot
const playBot = () => {
    const escolha = [GAME_OPTIONS.PEDRA, GAME_OPTIONS.PAPEL, GAME_OPTIONS.TESOURA]
    const randomNumber = Math.floor(Math.random() * 3) // número aleatório

    return escolha[randomNumber]
}


const jogarGame = (humano, bot) => {
    console.log("Humano: " + humano + " Bot: " + bot)

    if(humano === bot) {
        result.innerHTML = "Resultado: <span> Empate! &#x1F504; </span>"
    }
    
    else if(
        (humano === GAME_OPTIONS.PAPEL && bot === GAME_OPTIONS.PEDRA) || 
        (humano === GAME_OPTIONS.PEDRA && bot === GAME_OPTIONS.TESOURA) || 
        (humano === GAME_OPTIONS.TESOURA && bot === GAME_OPTIONS.PAPEL)){

        humanoScoreNumber++
        humanoPontuacao.innerHTML = humanoScoreNumber
        
        result.innerHTML = "Resultado: <span> Você ganhou! &#x2705; </span>"

    }
    
    else {
        botScoreNumber++
        botPontuacao.innerHTML = botScoreNumber

        result.innerHTML = "Resultado: <span> O bot ganhou! &#x274C; </span>"
    }

    escolhas.innerHTML = `Você escolheu: <span>${humano}</span> <br> O bot escolheu: <span>${bot}</span>`
}