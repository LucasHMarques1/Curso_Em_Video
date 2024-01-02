
package aula07;

public class Aula07 {

    public static void main(String[] args) {
        Lutador l[] = new Lutador[6];
        l[0] = new Lutador("Pretty Boy","França", 31, 1.75f, 68.9f, 11, 2, 1 );
        l[1] = new Lutador("PutScript", "Brasil", 29, 1.68f, 57.8f, 14, 0 ,3);
        l[2] = new Lutador("Teste1", "Argentina", 39, 1.88f, 97.8f, 27, 4 ,2);
        l[3] = new Lutador("Teste2", "Eua", 22, 1.78f, 59.8f, 8, 4 ,6);
        l[4] = new Lutador("Teste3", "Portugal", 35, 1.98f, 99.8f, 98, 30 ,0);
        l[5] = new Lutador("Teste4", "Portugal", 45, 1.58f, 69.8f, 8, 0 ,0);
        
        Luta UEC01 = new Luta();
        UEC01.marcarLuta(l[0], l[1]);
        UEC01.lutar();
    }
    
}
