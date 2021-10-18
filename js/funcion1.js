/*1- Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una cadena de texto que indica si el número es par o impar. Mostrar por pantalla el resultado devuelto por la función.
*/
 function numero(i){
    if(i%2==0){
        document.write('Es un numero par ' + i)
    }else{document.write('Es un numero impar '+ i)}
 }

 let i= parseInt(prompt('ingrese un n'))
 numero(i)
