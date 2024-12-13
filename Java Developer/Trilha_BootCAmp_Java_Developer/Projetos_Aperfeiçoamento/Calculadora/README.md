## Explicação do código

Para efeito de aprendizagem inicial em Java esse é meu primeiro projeto como estudante de Java. Calculadora simples rodando no terminal do VSCode. Logo em breve farei essa mesma calculadora rodar em um ambiente externo.
Ao logo do código, é perceptível que a calculadora só suporta as quatro operações básicas.

### **1. Importando a classe Scanner**

```java
import java.util.Scanner; // Importa a classe Scanner para entrada de dados
```

- **`import`**: É usado para importar uma classe ou pacote específico do Java.
- **`java.util.Scanner`**: A classe `Scanner` faz parte do pacote `java.util` e é usada para capturar entradas do usuário (teclado, arquivos, etc.).
- **Por quê?** Sem essa importação, não poderíamos usar `Scanner` no nosso código.

---

### **2. Definindo a classe principal**

```java
public class CalculadoraSimples {
```

- **`public`**: Torna a classe acessível de qualquer lugar.
- **`class`**: Define que estamos criando uma classe chamada `CalculadoraSimples`.
- **`CalculadoraSimples`**: Nome da classe. É obrigatório que este seja o mesmo nome do arquivo `.java`.

---

### **3. Método principal**

```java
public static void main(String[] args) {
```

- **`public`**: O método pode ser chamado de qualquer lugar.
- **`static`**: Indica que o método pertence à classe e não a uma instância específica.
- **`void`**: O método não retorna nenhum valor.
- **`main`**: É o ponto de entrada do programa; todo programa Java começa por aqui.
- **`String[] args`**: Permite passar argumentos ao programa via linha de comando (não usamos neste caso).

---

### **4. Criando um objeto Scanner**

```java
Scanner scanner = new Scanner(System.in); // Cria um objeto Scanner
```

- **`Scanner scanner`**: Cria uma nova instância da classe `Scanner` chamada `scanner`.
- **`new Scanner(System.in)`**: Diz ao Scanner para capturar entradas do teclado (entrada padrão do sistema).
- **Por quê?** Usaremos o objeto `scanner` para capturar os dados digitados pelo usuário.

---

### **5. Exibindo o menu de operações**

```java
System.out.println("=== Calculadora Simples ===");
System.out.println("Escolha uma operação:");
System.out.println("1. Soma");
System.out.println("2. Subtração");
System.out.println("3. Multiplicação");
System.out.println("4. Divisão");
System.out.print("Digite o número da operação: ");
```

- **`System.out.println`**: Exibe texto no console e pula para a próxima linha.
- **`System.out.print`**: Exibe texto no console sem pular de linha (o cursor permanece na mesma linha).
- Exibimos as opções disponíveis para o usuário escolher qual operação deseja realizar.

---

### **6. Capturando a operação escolhida**

```java
int operacao = scanner.nextInt(); // Lê a escolha do usuário
```

- **`int operacao`**: Declara uma variável do tipo inteiro chamada `operacao`.
- **`scanner.nextInt()`**: Captura o próximo valor inteiro digitado pelo usuário e o armazena na variável `operacao`.

---

### **7. Solicitando números ao usuário**

```java
System.out.print("Digite o primeiro número: ");
double numero1 = scanner.nextDouble();

System.out.print("Digite o segundo número: ");
double numero2 = scanner.nextDouble();
```

- **`System.out.print`**: Solicita ao usuário que insira um número.
- **`double numero1` e `double numero2`**: Declaram variáveis do tipo `double` (números com casas decimais).
- **`scanner.nextDouble()`**: Captura os números digitados pelo usuário.

---

### **8. Inicializando a variável para o resultado**

```java
double resultado = 0; // Variável para armazenar o resultado
```

- **`double resultado`**: Declara uma variável para armazenar o resultado da operação.
- **Inicializamos com 0** apenas para evitar erros caso ela seja usada antes de ser calculada.

---

### **9. Estrutura de decisão com switch**

```java
switch (operacao) {
```

- **`switch`**: Verifica a variável `operacao` e executa o código correspondente ao valor.

#### **Caso 1: Soma**

```java
case 1: // Soma
    resultado = numero1 + numero2;
    System.out.println("Resultado da soma: " + resultado);
    break;
```

- Soma os dois números e exibe o resultado.
- **`break`**: Encerra o bloco do `case`.

#### **Caso 2: Subtração**

```java
case 2: // Subtração
    resultado = numero1 - numero2;
    System.out.println("Resultado da subtração: " + resultado);
    break;
```

- Subtrai o segundo número do primeiro.

#### **Caso 3: Multiplicação**

```java
case 3: // Multiplicação
    resultado = numero1 * numero2;
    System.out.println("Resultado da multiplicação: " + resultado);
    break;
```

- Multiplica os dois números.

#### **Caso 4: Divisão**

```java
case 4: // Divisão
    if (numero2 != 0) { // Verifica se o divisor não é zero
        resultado = numero1 / numero2;
        System.out.println("Resultado da divisão: " + resultado);
    } else {
        System.out.println("Erro: Divisão por zero não é permitida.");
    }
    break;
```

- Verifica se o divisor (`numero2`) não é zero.
- **Se for zero**: Exibe uma mensagem de erro.
- **Caso contrário**: Realiza a divisão e exibe o resultado.

#### **Operação inválida**

```java
default:
    System.out.println("Operação inválida.");
```

- **`default`**: Executado se nenhuma das opções anteriores for válida.

---

### **10. Fechando o Scanner**

```java
scanner.close(); // Fecha o scanner
```

- Fecha o objeto `scanner` para liberar os recursos associados à entrada.

---

### **Resumo**

Este programa:

1. Solicita uma operação do usuário.
2. Pede dois números.
3. Realiza o cálculo com base na operação escolhida.
4. Exibe o resultado.

Se precisar de mais explicações ou ajuda, é só perguntar! 😊
