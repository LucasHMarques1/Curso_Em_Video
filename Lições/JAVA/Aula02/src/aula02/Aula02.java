
package aula02;

public class Aula02 {

    public static void main(String[] args) {
        Caneta c1 = new Caneta();
        c1.modelo = "Compactor";
        c1.cor = "Azul";
        c1.ponta = 0.5f;
        c1.tampada = true;
        c1.destampar();
        c1.tampar();
        c1.rabiscar();
        c1.carga = 90;
        c1.status();
        
        Caneta c2 = new Caneta();
        c2.status();
    }
    
}
