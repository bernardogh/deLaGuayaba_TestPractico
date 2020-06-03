=begin
    Este metodo imprime el numero mas alto del arreglo con la 
    funcion max que devuelve el numero mas alto
=end
def ejercicio3
    myArray = [13,2,13,35,1];
    puts "#{myArray.max}"
end
=begin
una segunda opcion planteada sin el uso del max y hecha a desde 0
=end
def ejercicio3Option2
    myArray = [13,2,13,35,1];
    count = myArray[0];
    for i in myArray
        for j in myArray
            if i > j
                if i > count
                    count = i
                end
            end
        end
    end
    puts "#{count}"
end
#ejecucion del metodo
ejercicio3
=begin
    Se encuentra comentada la impresion de dicha opcion debido a
    la solicitud de solo imprimir el numero
=end
#ejercicio3Option2



