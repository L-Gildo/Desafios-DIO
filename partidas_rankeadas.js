//Variáveis Ranker de vitórias
let vitorias = 200
let derrotas = 99
SaldoVitorias (vitorias, derrotas)

//Níveis de vitória segundo pontuação
    function SaldoVitorias (vitorias, derrotas){
    	let SaldoVitorias = vitorias - derrotas
        	if(SaldoVitorias <10){
				console.log("O Heroi tem saldo de " + SaldoVitorias + " vitórias e está no nível Ferro.")
            }
            else if(SaldoVitorias <=20){
                console.log("O Heroi tem saldo de " + SaldoVitorias + " vitórias e está no nível Bronze.")
            }
            else if(SaldoVitorias <=50){
                console.log("O Heroi tem saldo de " + SaldoVitorias + " vitórias e está no nível Prata.")
            }
            else if(SaldoVitorias <=80){
                console.log("O Heroi tem saldo de " + SaldoVitorias + " vitórias e está no nível Ouro.")
            }
            else if(SaldoVitorias <=90){
                console.log("O Heroi tem saldo de " + SaldoVitorias + " vitórias e está no nível Diamante.")
            }
            else if(SaldoVitorias <=100){
                console.log("O Heroi tem saldo de " + SaldoVitorias + " vitórias e está no nível Lendário.")
            }
            else if(SaldoVitorias >100){
                console.log("O Heroi tem saldo de " + SaldoVitorias + " vitórias e está no nível Imortal.")
            }
    }