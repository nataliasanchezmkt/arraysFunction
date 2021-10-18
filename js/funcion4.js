/*4- Escriba un script que muestre la tabla de multiplicar de un número ingresado por pantalla, la creación de la tabla debe ser realizada con una función y mostrar solo los resultados del 1 al 10 del número elegido por el usuario.

*/

function tabla(i){
    document.write (i+"*1="+i*1+ '<br>')
    document.write (i+"*2="+i*2+ '<br>')
    document.write (i+"*3="+i*3+ '<br>')
    document.write (i+"*4="+i*4+ '<br>')
    document.write (i+"*5="+i*5+ '<br>')
    document.write (i+"*6="+i*6+ '<br>')
    document.write (i+"*7="+i*7+ '<br>')
    document.write (i+"*8="+i*8+ '<br>')
    document.write (i+"*9="+i*9+ '<br>')
    document.write (i+"*10="+i*10+ '<br>')
}

let i=parseInt(prompt('ingrese un numero'))
tabla(i)