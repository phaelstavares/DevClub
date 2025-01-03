/* 
    T -> tipo genérico

    Para rodar o código no terminal -> npx tsx src/generics.ts
*/

function getPrimeiroElemento<T>(data: T[]): T | null {
    if (!data.length) {
        return null
    }

    const [primeiroElemento] = data;

    return primeiroElemento;
}

const stringArray: string[] = ["Lucas", "Fernando", "Gabriela", "Maria"];
const numberArray: number[] = [1, 6, 8, 4, 9];

console.log(getPrimeiroElemento<string>(stringArray))
console.log(getPrimeiroElemento<number>(numberArray))