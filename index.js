//definimos la funcion
async function obtenerTipoDeCambio() {
    //inicio del try
    try {
        // mensaje log de espera
        console.log("Consultando tipo de cambio...")
        // definimos una variable que espere la fetch consulta a la API
        let respuesta = await fetch("https://api.exchangerate-api.com/v4/latest/USD")
        // guardamos el json con el nombre de respuesta
        let datos = await respuesta.json()
        // ahora bien la base seta la base usada en este caso USD fecha sera la fecha y dentro de tasas sacaremos el valor de PEN EUR MXN usando los rates que intuyo que si fuera de otra api en su docuemnteacion estaria la estructura de peticion

        let resultado = {
            base: datos.base,
            fecha: datos.date,
            tasas: {
                PEN: datos.rates.PEN,
                EUR: datos.rates.EUR,
                MXN: datos.rates.MXN
            }
        }
        
        //imprimimos un mensaje de datos estructurados
        console.log("Datos estructurados:")
        // imprimimos el resultado en consola aunque no se porque usamos JSON.stringify ni resultado null y 2
        console.log(JSON.stringify(resultado, null, 2))
        
    } catch (error) {
        //si hay  yb error se imprime un mensaje con el erro
        console.log("Error al consultar la API: " + error)
    }
}
//fin de la funcion 
obtenerTipoDeCambio()