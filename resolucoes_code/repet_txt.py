# Agora vamos solicitar uma string e um número inteiro como entrada. Depois teremo que retornar a string repetida o número de vezes informado

def repetir_string():
    texto = input("Digite uma string: ")
    numero = int(input("Digite um número inteiro: "))  # Convertendo a entrada para um número inteiro
    
    resultado = (texto + " ") * numero  # Repetindo a string o número de vezes informado
    print(resultado)

# Chamando a função
repetir_string()