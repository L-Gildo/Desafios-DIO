// Exercício 1 - faça um algorítmo  que dado as 3 notas tiradas por um aluno em um semestre da faculdade
//  calcule e imprima a sua média e a sua classificação conforme a tabela abaixo.

//  Média = (nota1 + nota2 + nota3) / 3;

//  Classificação:
//  - Média menor que 5, reprovação;
//  - Média entre 5 e 7, recuperação;
//  - Média acima de 7, passou de semestre;

const nota1 = 6;
const nota2 = 3;
const nota3 = 4;

const media = (nota1 + nota2 + nota3) / 3;

console.log(`Média do aluno: ${media.toFixed(2)}`);

if (media >= 7) {
  console.log("Parabéns! Você passou o semestre!");
} else if (media >= 5 && media < 7) {
  console.log(
    "Infelizmente, você ainda não passou. Mas pode reverter em RECUPERAÇÃO! "
  );
} else {
  console.log("Infelizmente, você NÃO passou. Continue se esforçando!");
}
