package Edu.Leo.Inicio;
public class AnatomiaClasse3 {

      public static void main(String[] args) {
            
        String primeiroNome = "Leonardo";
        String segundoNome = "Gildo";
      
        String nomeCompleto = nomeCompleto (primeiroNome, segundoNome);

        System.out.println(nomeCompleto);
      }  
      public static String nomeCompleto (String primeiroNome, String segundoNome) {
        return  primeiroNome.concat(" ").concat(segundoNome);
      }
}
