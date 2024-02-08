/*
    Operadores Type of e Delete

    typeof  ->  Qual é o tipo de dado
    delete  ->  deletar
*/

const myObject = {
    name: "Raphael",
    age: 18,
    address: "Rua dos bobos, número 0"
}

const myNumber = 100

const myNumber2 = "48"

console.log(typeof myObject)
console.log(typeof myNumber)
console.log(typeof myNumber2)


delete myObject.address // vai deletar o endereço
console.log(myObject)