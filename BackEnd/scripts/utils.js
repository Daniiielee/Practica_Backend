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

// se indican las funciones a importar
module.exports = {obtenerIMC};



