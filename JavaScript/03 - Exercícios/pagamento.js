const precoEtiqueta = 98.0;
const formaPagamento = [
  `À vista débito`,
  `À vista dinheiro ou PIX`,
  `2X`,
  `Acima de 2x`,
];

const pagamento1 = precoEtiqueta * 0.9;
const pagamento2 = precoEtiqueta * 0.85;
const pagamento3 = precoEtiqueta;
const pagamento4 = precoEtiqueta * 1.1;

if (formaPagamento === `À vista débito`) {
  console.log(`Valor a pagar no débito: ${pagamento1.toFixed(2)}`);
} else if (formaPagamento === `À vista dinheiro ou PIX`) {
  console.log(`Valor a pagar no dinheiro ou PIX: ${pagamento2.toFixed(2)}`);
} else if (formaPagamento === `2X`) {
  console.log(`Valor a pagar em 2 vezes é de: ${pagamento3.toFixed(2)}`);
} else {
  console.log(
    `Valor a pagar parcelado em mais de 2 vezes é de: ${pagamento4.toFixed(2)}`
  );
}
