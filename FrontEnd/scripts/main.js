/*
*  Archivo main.js
*  Creado por: Orlando Arboleda Molina
*  Fecha: 5-Julio-2024
*
*  Descripción: 
*  Logico frontEnd para suministrar datos JSON, 
*  para el curso de EDyA1 en la Universidad Autónoma de Occidente
*/

const { response } = require("express");

const formElement = document.getElementById("generarCuota");
let respuesta= document.getElementById("laRespuesta");

formElement.addEventListener('submit',(event) =>{
    // para que no se recarge la pagina
    event.preventDefault();
    let nombre = document.getElementById("elNombre").value;   
    let meses = parseInt(document.getElementById("Meses").value);
    let interes = parseFloat(document.getElementById("Interes").value);
    let prestamo = parseInt(document.getElementById("Prestamo").value);
    
    let credito = {nombre, meses, interes, prestamo};
    let creditoJson = JSON.stringify(credito);
    console.log(creditoJson);

    fetch('http://localhost:3000/calcular',
    {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'            
          },
        body: creditoJson
    })

})