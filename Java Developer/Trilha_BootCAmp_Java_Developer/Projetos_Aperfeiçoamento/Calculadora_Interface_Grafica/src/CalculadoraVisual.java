import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

public class CalculadoraVisual {
    public static void main(String[] args) {

        // CRIA UM FRAME PRINCIPAL (Janela Principal)
        JFrame frame = new JFrame("Calculadora Simples");
        frame.setSize(400, 500);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setLayout(new BorderLayout());

        // CAMPO DE TEXTO PARA EXIBIR OS NÚMEROS E RESULTADOS
        JTextField campoTexto = new JTextField();
        campoTexto.setFont(new Font("Arial", Font.BOLD, 24));
        campoTexto.setHorizontalAlignment(JTextField.RIGHT);
        campoTexto.setEditable(false);
        campoTexto.setBackground(Color.LIGHT_GRAY); // Cor de fundo do visor
        frame.add(campoTexto, BorderLayout.NORTH);

        // PAINEL PARA OS BOTÕES
        JPanel painelBotoes = new JPanel();
        painelBotoes.setLayout(new GridLayout(5, 4, 10, 10)); // Configuração de grid
        painelBotoes.setBorder(BorderFactory.createEmptyBorder(10, 10, 10, 10)); // Margens nas bordas

        // ARRAY COM OS TEXTOS DOS BOTÕES
        String[] botoes = {
            "7", "8", "9", "/",
            "4", "5", "6", "*",
            "1", "2", "3", "-",
            "0", ".", "=", "+",
            "C" // Botão para zerar
        };

        // VARIÁVEIS AUXILIARES
        final String[] operador = {""};
        final double[] numero1 = {0};

        // ADICIONA OS BOTÕES
        for (String textoBotao : botoes) {
            JButton botao = new JButton(textoBotao);
            botao.setFont(new Font("Arial", Font.BOLD, 20));
            painelBotoes.add(botao);

            botao.addActionListener(new ActionListener() {
                @Override
                public void actionPerformed(ActionEvent e) {
                    String texto = botao.getText();

                    // OPERAÇÕES
                    if (texto.matches("[0-9.]")) { // Números e ponto
                        campoTexto.setText(campoTexto.getText() + texto);
                    } else if (texto.matches("[/*\\-+]")) { // Operadores
                        operador[0] = texto;
                        numero1[0] = Double.parseDouble(campoTexto.getText());
                        campoTexto.setText("");
                    } else if (texto.equals("=")) { // Resultado
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
                    } else if (texto.equals("C")) { // Limpar o visor e resetar variáveis
                        campoTexto.setText("");
                        operador[0] = "";
                        numero1[0] = 0;
                    }
                }
            });
        }

        frame.add(painelBotoes, BorderLayout.CENTER);

        // EXIBE A JANELA
        frame.setVisible(true);
    }
}

