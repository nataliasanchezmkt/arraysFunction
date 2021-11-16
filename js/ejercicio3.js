/* 3- Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la función Math.random para obtener números aleatorios entre 1 y 6 para cada uno de los lanzamientos de los dados. Sumar el resultado de lanzar dos dados y anotar en un array el número de apariciones de dicha suma, repitiendo 50 veces esta operación.
*/ 


// bucle que muestre numeros del 1 al 6, con math random
// guardar en algun lugar el resultado de la suma
// anotar cuantas veces aparecio la suma de esos dados

let contador2=0
let contador3=0
let contador4=0
let contador5=0
let contador6=0
let contador7=0
let contador8=0
let contador9=0
let contador10=0
let contador11=0
let contador12=0




let limite =50
let sumatoria=[];


do {
    let suma= (Math.floor(Math.random()*6)+1 ) + (Math.floor(Math.random()*6)+1)
    console.log(suma)
  
    sumatoria.push(suma)


}while(limite>sumatoria.length)

for(i=0;i<sumatoria.length;i++){
    if (sumatoria[i]===2){
        contador2++
    }
    if (sumatoria[i]===3){
        contador3++
    }
    if (sumatoria[i]===4){
        contador4++
    }
    if (sumatoria[i]===5){
        contador5++
    }
    if (sumatoria[i]===6){
        contador6++
    }
    if (sumatoria[i]===7){
        contador7++
    }
    if (sumatoria[i]===8){
        contador8++
    }
    if (sumatoria[i]===9){
        contador9++
    }
    if (sumatoria[i]===10){
        contador10++
    }
    if (sumatoria[i]===11){
        contador11++
    }
    if (sumatoria[i]===12){
        contador12++
    }
}

document.write('El numero 2 aparecio: '+ contador2+ ' veces')
document.write('<br> El numero 3 aparecio: '+ contador3+ ' veces')
document.write('<br> El numero 4 aparecio: '+ contador4+ ' veces')
document.write('<br> El numero 5 aparecio: '+ contador5+ ' veces')
document.write('<br> El numero 6 aparecio: '+ contador6+ ' veces')
document.write('<br> El numero 7 aparecio: '+ contador7+ ' veces')
document.write('<br> El numero 8 aparecio: '+ contador8+ ' veces')
document.write('<br> El numero 9 aparecio: '+ contador9+ ' veces')
document.write('<br> El numero 10 aparecio: '+ contador10+ ' veces')
document.write('<br> El numero 11 aparecio: '+ contador11+ ' veces')
document.write('<br> El numero 12 aparecio: '+ contador12+ ' veces')
