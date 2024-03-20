/*
    this -> este, esta, isto...

    No JavaScript, o this referência:
    - Node.js -> module.exports
    - Web     -> window

    Escopo:
    - Global -> Quando começamos a escrever nossa aplicação. No contexto global, o this faz referência ao objeto global, que é o objeto window no navegador de internet ou ao objeto global no Node.js.

    - Local -> Por exemplo, dentro de uma função!
*/

const person = {
    nome: "Raphael",
    idade: 19,
    talk: function () {
        console.log(this.nome, this.idade)
    }
}

person.talk()



function myFunction() {
    this.console.log("Agora eu sou o global")
}

myFunction()