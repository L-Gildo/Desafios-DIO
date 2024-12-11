// Faça um programa para calcular o valor de uma viagem.

// Você terá 5 variáveis. Sendo elas:
// 1 - Proço do etanol;
// 2 - Preço da gasolina;
// 3 - O tipo de combustível que está no seu carro;
// 4 - Gasto médio de combustível so carro por KM;
// 5 - Distância em KM da viagem;

// Imprima no console o valor que será gasto para realizar esta viagem.

const valorEtanol = 4.04;
const valorGasolina = 6.1;
const gastoPorKM = 0.1;
const distanciaKM = 300;
const tipoCombustivel = "gasolina";
const gastoViagemETN = valorEtanol * gastoPorKM * distanciaKM;
const gastoViagemGAS = valorGasolina * gastoPorKM * distanciaKM;

if (tipoCombustivel === "etanol") {
  console.log("Sua viagem custará: " + gastoViagemETN);
} else {
  console.log("Sua viagem custará: " + gastoViagemGAS);
}
