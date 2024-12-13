## Calculadora simples com interface gráfica para uma experiência melhor de teste e para o usuário. É uma atualização do primeiro projeto (Calculadora Simples).

Autor: Leonardo Gildo

```java
import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
```

1. **`import javax.swing.*;`**  
   Importa todos os componentes da biblioteca `Swing`, usados para criar interfaces gráficas.
2. **`import java.awt.*;`**  
   Importa classes relacionadas a layouts, cores e gráficos (ex.: `BorderLayout`, `GridLayout`, `Color`).
3. **`import java.awt.event.*;`**  
   Importa classes necessárias para capturar eventos, como cliques em botões.

---

```java
public class CalculadoraVisual {
    public static void main(String[] args) {
```

4. **Declaração da classe `CalculadoraVisual`**  
   Define uma classe pública para encapsular o código da calculadora.
5. **Método `main`**  
   O ponto de entrada do programa, onde a execução começa.

---

```java
        JFrame frame = new JFrame("Calculadora Simples");
        frame.setSize(400, 500);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setLayout(new BorderLayout());
```

6. **`JFrame frame = new JFrame("Calculadora Simples");`**  
   Cria uma janela principal (`JFrame`) com o título "Calculadora Simples".
7. **`frame.setSize(400, 500);`**  
   Define o tamanho da janela como 400 pixels de largura e 500 pixels de altura.
8. **`frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);`**  
   Especifica que o programa será encerrado quando o usuário fechar a janela.
9. **`frame.setLayout(new BorderLayout());`**  
   Define o layout do `JFrame` como `BorderLayout`, que organiza os componentes em cinco regiões (Norte, Sul, Leste, Oeste e Centro).

---

```java
        JTextField campoTexto = new JTextField();
        campoTexto.setFont(new Font("Arial", Font.BOLD, 24));
        campoTexto.setHorizontalAlignment(JTextField.RIGHT);
        campoTexto.setEditable(false);
        campoTexto.setBackground(Color.LIGHT_GRAY); // Cor de fundo do visor
        frame.add(campoTexto, BorderLayout.NORTH);
```

10. **`JTextField campoTexto = new JTextField();`**  
    Cria um campo de texto para exibir números e resultados.
11. **`campoTexto.setFont(new Font("Arial", Font.BOLD, 24));`**  
    Define a fonte do texto como Arial, negrito, tamanho 24.
12. **`campoTexto.setHorizontalAlignment(JTextField.RIGHT);`**  
    Alinha o texto à direita dentro do campo.
13. **`campoTexto.setEditable(false);`**  
    Torna o campo não editável pelo usuário (apenas exibirá resultados).
14. **`campoTexto.setBackground(Color.LIGHT_GRAY);`**  
    Define o fundo do campo de texto com uma cor cinza claro.
15. **`frame.add(campoTexto, BorderLayout.NORTH);`**  
    Adiciona o campo de texto à parte superior (NORTE) da janela.

---

```java
        JPanel painelBotoes = new JPanel();
        painelBotoes.setLayout(new GridLayout(5, 4, 10, 10)); // Configuração de grid
        painelBotoes.setBorder(BorderFactory.createEmptyBorder(10, 10, 10, 10)); // Margens nas bordas
```

16. **`JPanel painelBotoes = new JPanel();`**  
    Cria um painel para organizar os botões.
17. **`painelBotoes.setLayout(new GridLayout(5, 4, 10, 10));`**  
    Configura o layout do painel como uma grade de 5 linhas e 4 colunas, com 10 pixels de espaço entre os botões.
18. **`painelBotoes.setBorder(BorderFactory.createEmptyBorder(10, 10, 10, 10));`**  
    Adiciona margens ao redor do painel para espaçar os botões das laterais da janela.

---

```java
        String[] botoes = {
            "7", "8", "9", "/",
            "4", "5", "6", "*",
            "1", "2", "3", "-",
            "0", ".", "=", "+",
            "C" // Botão para zerar
        };
```

19. **`String[] botoes = {...}`**  
    Define um array de strings contendo os textos dos botões. Inclui números, operadores matemáticos e o botão "C" (limpar).

---

```java
        final String[] operador = {""};
        final double[] numero1 = {0};
```

20. **`final String[] operador = {""};`**  
    Cria um array de uma posição para armazenar o operador matemático selecionado (ex.: "+", "-", "\*").
21. **`final double[] numero1 = {0};`**  
    Cria um array de uma posição para armazenar o primeiro número da operação.

---

```java
        for (String textoBotao : botoes) {
            JButton botao = new JButton(textoBotao);
            botao.setFont(new Font("Arial", Font.BOLD, 20));
            painelBotoes.add(botao);
```

22. **`for (String textoBotao : botoes)`**  
    Itera sobre os textos dos botões no array `botoes`.
23. **`JButton botao = new JButton(textoBotao);`**  
    Cria um botão com o texto correspondente.
24. **`botao.setFont(new Font("Arial", Font.BOLD, 20));`**  
    Configura a fonte do texto do botão como Arial, negrito, tamanho 20.
25. **`painelBotoes.add(botao);`**  
    Adiciona o botão ao painel de botões.

---

```java
            botao.addActionListener(new ActionListener() {
                @Override
                public void actionPerformed(ActionEvent e) {
                    String texto = botao.getText();
```

26. **`botao.addActionListener(...)`**  
    Adiciona um ouvinte de ação ao botão para capturar cliques.
27. **`String texto = botao.getText();`**  
    Obtém o texto exibido no botão clicado.

---

```java
                    if (texto.matches("[0-9.]")) {
                        campoTexto.setText(campoTexto.getText() + texto);
                    } else if (texto.matches("[/*\\-+]")) {
                        operador[0] = texto;
                        numero1[0] = Double.parseDouble(campoTexto.getText());
                        campoTexto.setText("");
                    } else if (texto.equals("=")) {
                        double numero2 = Double.parseDouble(campoTexto.getText());
                        double resultado = 0;

                        switch (operador[0]) {
                            case "+": resultado = numero1[0] + numero2; break;
                            case "-": resultado = numero1[0] - numero2; break;
                            case "*": resultado = numero1[0] * numero2; break;
                            case "/":
                                if (numero2 != 0) resultado = numero1[0] / numero2;
                                else campoTexto.setText("Erro");
                                break;
                        }
                        campoTexto.setText(String.valueOf(resultado));
                    } else if (texto.equals("C")) {
                        campoTexto.setText("");
                        operador[0] = "";
                        numero1[0] = 0;
                    }
                }
            });
```

28. **Lógica dos botões:**
    - Se o botão for um número/ponto (`[0-9.]`), adiciona ao texto no campo.
    - Se for um operador (`[/*\\-+]`), salva o operador e o primeiro número, e limpa o campo.
    - Se for "=", calcula o resultado com base no operador.
    - Se for "C", limpa o visor e reinicia as variáveis.

---

```java
        frame.add(painelBotoes, BorderLayout.CENTER);
        frame.setVisible(true);
    }
}
```

29. **`frame.add(painelBotoes, BorderLayout.CENTER);`**  
    Adiciona o painel de botões ao centro da janela.
30. **`frame.setVisible(true);`**  
    Torna a janela visível para o usuário.
