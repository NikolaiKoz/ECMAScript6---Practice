//Strings

const nombre = 'Juan';

console.log('Nombre comienza con J: ' + nombre.toLocaleLowerCase().startsWith('J'));

console.log('Nombre termina con n: ' + nombre.toLocaleLowerCase().endsWith('n'));

console.log('Nombre incluye con n: ' + nombre.toLocaleLowerCase().includes('n'));

//Arrays

const arratAmigos = ['Juan', 'Pedro', 'Pablo', 'Juan'];

console.log('Array incluye a Juan: ' + arratAmigos.includes('Juan'));

//Obtener elemento de mas de 4 caracteres

console.log('Array incluye a Juan: ' + arratAmigos.find(amigo => amigo.length > 4));

console.log('Array incluye a Juan: ' + arratAmigos.findIndex(amigo => amigo.length > 4));


