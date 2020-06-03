/**
 * Ejercicio 5 del Test practico, el objetivo del mismo es el valor con mayor ocurrencia y mostrarlo en pantalla
 * @author Bernardo Gomez Huertas
 * @version 1.0
 */
public class Ejercicio5 {
    /**
     * Metodo main tiene como objetivo permitir la ejecucion del programa
     * @param arg
     */
    public static void main(String[] arg) {
        int array[] = {1,2,2,2,4,6,7,8,8,8};
        ejercicio5(array);
    }

    /**
     * Este metodo maneja la logica de las ocurrencias este consiste en 2 loops uno anidado 
     * dentro de otro que permita comparar cada 1 con todos campos del array y asi si encuentra 
     * uno igual a otro lo suma a las ocurrencias y si este es igual o supera al las numero 
     * mayor hasta el momento en que lo encuentre y se sustituye.
     * @param array recibe un array con el permite ejecutar la funcionalidad solicitada
     */
    public static void ejercicio5(int[] array){    
        int ocurrencias = 0;
        int valor = 0;
        for(int i = 0; i < array.length; i++){
            int temp = 0;
            for(int j = 0; j < array.length; j++){
                if(array[i] == array[j]) {
                    temp += 1;
                    if(temp >= ocurrencias) {
                        ocurrencias = temp;
                        valor = array[i];
                    }
                }
            
            }
        }
        System.out.println("El resultado esperado es: ");
        System.out.println("valor "+valor);
        System.out.println("ocurrencias "+ocurrencias);
    }
}





