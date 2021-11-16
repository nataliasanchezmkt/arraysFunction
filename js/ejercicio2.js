/*2-  Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo, cuando el usuario seleccione cancelar o ingrese el valor “0” se debe mostrar el arreglo generado, luego realizar las siguientes acciones:

Mostrar la longitud del arreglo.
Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
Añade en última posición la ciudad de París.
Escribe por pantalla el elemento que ocupa la segunda posición.
Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.
*/
// hay q hacer un arreglo vacio y un prompt por aparte que es una let y con push en el array unificarlo


let ciudades=[]

do{let city=prompt('ingrese un ciudad');
ciudades.push(city)
}while(confirm('Desea continuar?'))

function lista (){
for(let i=0; i<ciudades.length;i++){
    document.write(ciudades[i]+' <br>');
}}



// 1

document.write ('<br> '+ciudades.length)
// 2
 
document.write('<br> '+ciudades[0])
document.write('<br> '+ciudades[2])
document.write('<br> '+ciudades [ciudades.length-1])

// 3

ciudades.push('Paris')

function lista()


// 4
document.write('<br>'+ciudades[1]);
// 5
ciudades[2]='Barcelona'
function lista()