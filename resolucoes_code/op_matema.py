# Solicitar como entrada dois números e depois vamos realizar uma operação simples entre eles.

def operacao_simples():
    # Solicitando os dois números do usuário
    numero1 = float(input("Digite o primeiro número: "))
    numero2 = float(input("Digite o segundo número: "))
    
    # Solicitando a operação desejada
    operacao = input("Digite a operação desejada (+, -, *, /): ")
    
    # Realizando a operação com base na escolha do usuário
    if operacao == '+':
        resultado = numero1 + numero2
    elif operacao == '-':
        resultado = numero1 - numero2
    elif operacao == '*':
        resultado = numero1 * numero2
    elif operacao == '/':
        if numero2 != 0:  # Verificação para evitar divisão por zero
            resultado = numero1 / numero2
        else:
            resultado = "Erro: Divisão por zero não é permitida ."
    else:
        resultado = "Erro: Operação inválida."
    
    # Exibindo o resultado
    print(f"O resultado da operação {numero1} {operacao} {numero2} é: {resultado}")

# Chamando a função
operacao_simples()