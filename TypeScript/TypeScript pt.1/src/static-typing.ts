/*
    Tipos primitivos:
    number -> números inteiros, números decimais
    string -> textos, caracteres
    boolean -> true ou false

    Para rodar o código no terminal -> npx tsx src/static-typing.ts

*/

let idade: number = 19;
let nome: string = "Raphael";
let estaVivo: boolean = true;

idade = 20;
nome = "Rodrigo";
estaVivo = false;


// Inferência de Tipos
let animal = "Gato";
let quantidade = 4;

animal = "Cachorro";
quantidade = 1;


// Parâmetros e retornos de funções
function soma(num1: number, num2: number): number {
    const resultado = num1 + num2;

    return resultado;
}

console.log(soma(4, 5))


// Função com retorno opcional
function saudacao(nome: string): string | void {
    if (nome) {
        return `Olá, ${nome}!`;
    }
}


// Função com parâmetros opcionais
function tamanho(valor: string | number): number {
    if (typeof valor == "string") {
        return valor.length
    }

    return valor;
}

console.log(tamanho("Olá")) // vai contar a quantidade de letras
console.log(6)