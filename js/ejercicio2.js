/*2-  Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo, cuando el usuario seleccione cancelar o ingrese el valor “0” se debe mostrar el arreglo generado, luego realizar las siguientes acciones:

Mostrar la longitud del arreglo.
Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
Añade en última posición la ciudad de París.
Escribe por pantalla el elemento que ocupa la segunda posición.
Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.
*/


let resultado=''
do {
    let ciudades=prompt('Escriba una ciudad');
if (resultado==''){
    resultado= ciudades+resultado
}else resultado= resultado+'-'+ciudades;


}while (confirm("Desea seguir?") || ciudades!=0 )
document.write(resultado)
document.write(ciudades.length);