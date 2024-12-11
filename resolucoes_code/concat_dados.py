# Vamos receber dois dados do usuário e concatena-los em uma única string

def concatenar_informacoes():
    nome = input("Digite seu nome: ")
    idade = input("Digite sua idade: ")
    mensagem = f"Seu nome é {nome}, e sua idade é de {idade} anos"
    print(mensagem)

# Chamando a função
concatenar_informacoes()