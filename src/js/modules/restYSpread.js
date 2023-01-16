//Rest

const mostrarDatos = (...datos) => {
    console.log(datos);
    }

mostrarDatos('Juan', 23, ['Pedro', 'Maria', 'Jose'], 'Argentina');

//Spread

const mostrarDatosSpread = (...datos) => {
    console.log(datos);
    }

const arrayDatos = ['Juan', 23, ['Pedro', 'Maria', 'Jose'], 'Argentina'];

mostrarDatosSpread(...arrayDatos);