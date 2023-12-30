
package aula04;

public class Aula04 {

    public static void main(String[] args) {
        Caneta c1 = new Caneta("Bic", "Azul", 0.5f);
        // c1.setModelo("Bic");
        // c1.modelo = "Bic"; = Por ser publico, vai funcionar.
        
        // c1.setPonta(0.5f);
        // c1.ponta = 0.5f; = Acesso privado, vai dar erro.
        
        c1.status();
        // System.out.println("TIPO DA CANETA: " + c1.getModelo());
        
        
        Caneta c2 = new Caneta("Bic", "Vermelho", 0.5f);
        c2.status();
    }    
}
