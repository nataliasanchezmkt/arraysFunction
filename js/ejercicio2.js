/*2-  Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo, cuando el usuario seleccione cancelar o ingrese el valor “0” se debe mostrar el arreglo generado, luego realizar las siguientes acciones:

Mostrar la longitud del arreglo.
Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
Añade en última posición la ciudad de París.
Escribe por pantalla el elemento que ocupa la segunda posición.
Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.
*/
// hay q hacer un arreglo vacio y un prompt por aparte que es una let y con push en el array unificarlo
let ciudades = [];
 let resultado=''
do {
    let cadena=prompt('Escriba su frase');
if (resultado==''){
    resultado= cadena+resultado
}else resultado= resultado+'-'+cadena;


}while (confirm("Desea seguir?"));
ciudades.push(resultado)
ciudades.length