# testar se uma palavra é um palíndromo

def verificar_palindromo():
    # Solicitando a palavra do usuário
    palavra = input("Digite uma palavra: ")
    
    # Convertendo a palavra para minúsculas para uma comparação insensível a maiúsculas/minúsculas
    palavra = palavra.lower()
    
    # Invertendo a palavra
    palavra_invertida = palavra[::-1]
    
    # Verificando se a palavra original é igual à palavra invertida
    if palavra == palavra_invertida:
        print(f"A palavra '{palavra}' é um palíndromo.")
    else:
        print(f"A palavra '{palavra}' não é um palíndromo.")

# Chamando a função
verificar_palindromo()