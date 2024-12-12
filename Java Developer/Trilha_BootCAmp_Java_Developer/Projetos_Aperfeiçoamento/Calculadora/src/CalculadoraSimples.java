import java.util.Scanner; // Importa a classe Scanner para entrada de dados. Esssa classe faz parte da biblioteca do JAVA. Serve para ler o dado.

public class CalculadoraSimples {
      
      public static void main(String[] args) {
            Scanner scanner = new Scanner(System.in); // Cria um objeto Scanner

            // Menu de operações
            System.out.println("=== Calculadora Simples ===");
            System.out.println("=== Feita por Leo Gildo ===");
            System.out.println("Escolha uma operação:");
            System.out.println("1. Soma");
            System.out.println("2. Subtração");
            System.out.println("3. Multiplicação");
            System.out.println("4. Divisão");
            System.out.println("Digite o número da operação: ");

            int operacao = scanner.nextInt(); // Lê a escolha do usuário

            //Solicitando os dados para o cálculo
            System.out.print("Digite o primeiro número: ");
            double numero1 = scanner.nextDouble();

            System.out.print("Digite o segundo número: ");
            double numero2 = scanner.nextDouble();

            double resultado = 0; // Variável para armazenar o resultado.

            // Verifica qual operação o usuário escolheu
            switch (operacao) {
                  case 1: // Soma
                        resultado = numero1 - numero2;
                        System.out.println("Resultado da soma é: " + resultado);                        
                        break;
                  case 2: // Subtração
                        resultado = numero1 + numero2;
                        System.out.println("Resultado da subtração é: " + resultado);                        
                        break;
                  case 3: // Multiplicação
                        resultado = numero1 * numero2;
                        System.out.println("Resultado da multiplicação é: " + resultado);                        
                        break;
                  case 4: // Divisão
                        if (numero2 != 0) { // Verificar se o denominador é diferente de zero
                              resultado = numero1 / numero2;
                              System.out.println("Resultado da divisão é: " + resultado);                           
                        } else {
                              System.out.println("Erro: Divisão por zero não é permitida pela matemática!");
                        }                                              
                        break;            
                  default:
                        System.out.println("Operação Inválida para essa calculadora");
            }

            scanner.close(); // Fecha o scanner
      }
}
