/*
    Para rodar o código no terminal -> npx tsx src/interfaces-e-tipos-personal.ts
*/

type Coordenada = {
    x: number;
    y: number;
};

function calcularDistancia(pontoA: Coordenada, pontoB: Coordenada): number {
    const dx = pontoB.x - pontoA.x;
    const dy = pontoB.y - pontoA.y;

    const resultado = Math.sqrt(dx * dx + dy * dy);

    return resultado;
}

const coordenadaA: Coordenada = {
    x: 20,
    y: 8,
};

const coordenadaB: Coordenada = {
    x: 15,
    y: 30,
};

console.log(calcularDistancia(coordenadaA, coordenadaB));


/////////////////////////////////////////////////////////


interface Car {
    brand: string;
    model: string;
    year: number;
    startEngine: () => void;
}

const myCar: Car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2023,
    startEngine: () => {
        console.log("Motor iniciado!")
    },
}

function drive(car: Car): void {
    console.log(`Dirigindo ${car.brand} - ${car.model} de ${car.year}`);

    car.startEngine();
}

drive(myCar)