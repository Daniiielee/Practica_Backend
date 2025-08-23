/*
*  Archivo utils.js
*  Creado por: Orlando Arboleda Molina
*  Fecha: 18-Junio-2024
*
*  Descripción: 
*  Proporciona funciones variadas y generacíon de paginas dinámicas, 
*  para el curso de EDyA1 en la Universidad Autónoma de Occidente
*/

function obtenerIMC(peso, estatura){
    return peso/(estatura*estatura);
}

function calcularcuota(prestamo, interes, meses){
    let i = interes;

    if (i > 1) {
        i = i/100
    }
    let n = meses;
    let cuota = prestamo * ((Math.pow(1 + i, n) * i) / (Math.pow(1 + i, n) - 1));

  return cuota;
}



// se indican las funciones a importar
module.exports = {obtenerIMC, calcularcuota};



