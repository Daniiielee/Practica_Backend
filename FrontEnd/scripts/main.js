document.addEventListener("DOMContentLoaded", () => {
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
        .then(response => response.text())
        .then(data =>
            {
                console.log("Respuesta del servidor:", data);
                let mensaje=data;
                respuesta.value=mensaje;
            })

    })
});