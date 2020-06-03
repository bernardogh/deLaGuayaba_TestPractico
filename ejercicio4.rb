=begin
Este metodo responde a la funcionalidad del ejercicio 4 
en el cual se busca imprimir un histograma mediante un array predefinido
se realiza obteniendo el numero mayor y el menor del array con estos valores se recorre
el array desde el valor menor hasta el valor y contando las veces en que aparece un vector
y concatenando en forma de astericos para finalizar imprimiendo cada linea
=end
def ejercicio4
    array = Array.[](1,2,1,3,3,1,2,1,5,1);
    maximun = array.max;
    minimun = array.min;
    puts "El resultado esperado es:"
    for i in minimun..maximun
        text = "#{i}: ";
        for j in array
            if i == j
                text = text+"*";
            end 
        end
        puts text
    end
end
# llamada al metodo
ejercicio4



