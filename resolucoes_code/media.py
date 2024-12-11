# calcular a média de três notas fornecidas na entrada do usuário

def calcular_media():
    # Solicitando as três notas do usuário
    nota1 = float(input("Digite a primeira nota: "))
    nota2 = float(input("Digite a segunda nota: "))
    nota3 = float(input("Digite a terceira nota: "))
    
    # Calculando a média das notas
    media = (nota1 + nota2 + nota3) / 3
    
    # Exibindo o resultado
    print(f"A média das notas é: {media:.2f}")

# Chamando a função
calcular_media()