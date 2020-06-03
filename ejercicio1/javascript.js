/**
 * Este metodo multiplica los numeros dentro del array y los multiplica por cada numero del array 
 * excepto a el mismo
 * @param {*} a es el array que se recibe por parametros
 * @param {*} id este tiene como objetido identificar el tag a donde se va a imprimir
 */
function metodo(a,id) {
	a = a;
	document.getElementById("div"+id).innerHTML = "";
	document.getElementById("div"+id).innerHTML += "Respuesta: [";
	for (var i = 0; i < a.length; i++) {
		total= 1;
		for (var j = 0; j < a.length; j++) {
			if(a[i] != a[j]) {
				total = total*a[j]
			}
		}
		document.getElementById("div"+id).innerHTML += " "+total+" ";
	}
	document.getElementById("div"+id).innerHTML += "]";
}

