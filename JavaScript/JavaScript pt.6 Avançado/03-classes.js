/*
    Classes

    As classes devem começar com letra MAIÚSCULA.

    constructor -> é um método especial dentro de uma classe que é chamado automaticamente quando um novo objeto dessa classe é criado.
*/

/*
const person = {
    nome: "Raphael",
    idade: 19,
    talk: function () {
        console.log(`Olá, meu nome é ${this.nome}.`)
    }
}

person.talk()
*/

class Person { // classes devem começar com letra MAIÚSCULA.
    constructor(nome, idade) {

        this.nome = nome
        this.idade= idade
    }

    talk(){
        console.log(`Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos.`)
    }
}

const newPerson = new Person("Raphael", 19)
const newPerson2 = new Person("Maria", 23)
const newPerson3 = new Person("Joaquim", 38)

newPerson.talk()
newPerson2.talk()
newPerson3.talk()