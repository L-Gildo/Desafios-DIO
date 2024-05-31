# receber umnúmero inteiro e verificar se é parou ímpar

def verificar_par_impar():
    # Solicitando um número inteiro do usuário
    numero = int(input("Digite um número inteiro: "))
    
    # Verificando se o número é par ou ímpar (% 2 ==0 é a demosntração do resultado da divisão por 2 e retonando 0 como resto) )
    if numero % 2 == 0: 
        print(f"O número {numero} é par.")
    else:
        print(f"O número {numero} é ímpar.")

# Chamando a função
verificar_par_impar()