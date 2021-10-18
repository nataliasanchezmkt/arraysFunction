/*2- Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.*/

function recorrido (frase){
    if (frase==frase.toLowerCase()){
        document.write('Formada por minusculas')

    }
    else if (frase== frase.toUpperCase()){
        document.write('Frase en mayusculas')
    }else{document.write('Mezcla de mayusculas y minusculas')}
}
let frase=prompt('Ingrese una frase');
recorrido(frase)