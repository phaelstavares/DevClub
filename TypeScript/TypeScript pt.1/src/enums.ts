/*
    Para rodar o código no terminal -> npx tsx src/enums.ts
*/

const GENERO = {
    masculino: "masculino",
    feminino: "feminino",
    outro: "outro",
};

enum Genero {
    MASCULINO = "Masculino",
    FEMININO = "Feminino",
    OUTRO = "Outro",
}

type Pessoa = {
    nome: string;
    idade: number;
    genero: string;
}
;
const pessoa: Pessoa = {
    nome: "Raphael",
    idade: 19,
    genero: Genero.MASCULINO,
};

function displayPessoaInfo(pessoa: Pessoa): void {
    console.log(`${pessoa.nome}`);
    console.log(`${pessoa.idade}`);
    console.log(`${pessoa.genero}`);
}

displayPessoaInfo(pessoa);