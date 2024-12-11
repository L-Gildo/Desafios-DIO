/* Fazer um programa para calcular o valor de uma viagem

Vão ser três variáveis:
1 - Preço do combustível;
2 - Gasto médio de combustível do carro por KM;
3 - Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem.
*/

const valor_combustivel = 5.79;
const gasto_por_KM = 0.1;
const distancia = 320;

const gastoViagem = distancia * gasto_por_KM * valor_combustivel;

console.log("Valor gasto na viagem é de: " + gastoViagem);
