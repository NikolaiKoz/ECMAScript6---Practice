const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman'
};

const { nombre, edad, clave } = persona;

console.log(`Nombredesestructurado: ${nombre}`);
console.log(`Edaddesestructurada: ${edad}`);
console.log(`Clavedesestructurada: ${clave}`);

//Objeto con parametros por defecto

const estudian = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman'
};

const { nombre2, edad2, clave2, rango = 'Capitán' } = estudian;

console.log(`Nombredesestructurado: ${nombre2}`);
console.log(`Edaddesestructurada: ${edad2}`);
console.log(`Clavedesestructurada: ${clave2}`);
console.log(`Rangodesestructurado: ${rango}`);

