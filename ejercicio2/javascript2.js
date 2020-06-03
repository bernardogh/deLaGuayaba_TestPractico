/**
 * Manejo de la funcionalidad mediante javascript
 * @author Bernardo Gomez Huertas
 * @version 1.0
 */

/**
 * Metodo que permite imprimir dentro del html lo solicitado en el ejercicio 2
 */
function impresion() {
    document.getElementById("diviando").innerHTML = "La respuesta es:<br>";
    var number = document.getElementById("input1").value;
    var total=0;
    if(number == 0) {
        document.getElementById("diviando").innerHTML = "la respuesta es: 1";
    } else {
        for (let index = 0; index <=number; index++) {
            document.getElementById("diviando").innerHTML += "la respuesta de "+index+"! :"+fibonnaci(index) + "<br>";
        }

    }
} 
/**
 * Metodo para ejecutar el fibonacci mediante un for para que el numero se recorra de uno 
 * en uno hasta llegar a 1 y se multiplique este con el numero anterior
 * @param {*} numbess 
 */
function fibonnaci(numbess) {
    total=1;
    for (let index = numbess; index >= 0; index--) {
        if(index == 0 || index == 1) {
        } else {
            total = total * index;
        }
    }
    return total;
}