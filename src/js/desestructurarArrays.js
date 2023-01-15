const persona = ['Jose Luis', 45, 'Argentina'];

const [nombre, edad, pais] = persona;

console.log(`Nombredesestructurado: ${nombre}`);
console.log(`Edaddesestructurada: ${edad}`);
console.log(`Paísdesestructurado: ${pais}`);

const [nombre2, , pais2] = persona;

console.log(`Nombredesestructurado: ${nombre2}`);
console.log(`Paísdesestructurado: ${pais2}`);

// Desestructuración de arreglos anidados en parametros de funciones

const mostrarInfo = ([nombre, edad, pais]) => {
    console.log(`Nombredesestructurado: ${nombre}`);
    console.log(`Edaddesestructurada: ${edad}`);
    console.log(`Paísdesestructurado: ${pais}`);
}

mostrarInfo(persona);

// Saltea el primer elemento del arreglo

const mostrarInfo2 = ([, edad, pais]) => {
    console.log(`Edaddesestructurada: ${edad}`);
    console.log(`Paísdesestructurado: ${pais}`);
}

mostrarInfo(persona);

