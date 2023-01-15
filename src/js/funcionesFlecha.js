const nombres = ['Juan', 'Pedro', 'Luis', 'Maria', 'Jose'];

console.log(`Arreglo original: ${nombres}`);

const nuevoArreglo = nombres.map( nombre => nombre.toUpperCase() );

console.log(`Nuevo arreglo: ${nuevoArreglo}`);