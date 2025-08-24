function obtenerIMC(peso, estatura){
    return peso/(estatura*estatura);
}

function armarInformacion(informacion){
    let nombre = informacion.nombre;
    let cuota = informacion.cuota;
    let prestamo = informacion.prestamo;
    let meses = informacion.meses;
    let interes = informacion.interes;

    return `  ${nombre} - $${cuota} -- $${prestamo} -- ${meses} meses -- interes ${interes}%`;
}

function calcularcuota(prestamo, interes, meses){
    let i = interes;

    if (i > 1) {
        i = i/100
    }
    let n = meses;
    let cuota = prestamo * ((Math.pow(1 + i, n) * i) / (Math.pow(1 + i, n) - 1));
    let newCuota= cuota.toFixed(2);

  return newCuota;
}



// se indican las funciones a importar
module.exports = {obtenerIMC, calcularcuota, armarInformacion};



