// OPCIONAL - importa funciones que son exportadas en el archivo utils.js
const misFunciones = require('./scripts/utils')

// importa a express y cors
const express = require('express')
const cors = require('cors')

// crea aplicación usando express y puerto
const app = express()
const port = 3000

//#region 
app.use(
  express.json()
)

app.use(cors());
//#endregion

app.get('/', (req, res)=>{
  res.send("hola");
})

app.post('/calcular', (req, res) => {  
  console.log('en post');
  let credito = req.body;
  const nombre = credito.nombre;
  const meses = credito.meses;
  const interes = credito.interes;
  const prestamo = credito.prestamo;
  const cuota = misFunciones.calcularcuota(prestamo,interes,meses);
  // Crea objeto JavaScript
  const newCredito = {nombre, meses, interes, prestamo, cuota};
  console.log( newCredito );
  let mensaje=misFunciones.armarInformacion(newCredito);
  res.send(mensaje);
})

// se pone en escucha y despliega el primer mensaje
app.listen(port, () => {
  console.log('Estoy ejecutandome en http://localhost:'+port)
})