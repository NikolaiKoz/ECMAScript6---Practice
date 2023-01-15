"use strict";

//Strings

var nombre = 'Juan';
console.log('Nombre comienza con J: ' + nombre.toLocaleLowerCase().startsWith('J'));
console.log('Nombre termina con n: ' + nombre.toLocaleLowerCase().endsWith('n'));
console.log('Nombre incluye con n: ' + nombre.toLocaleLowerCase().includes('n'));

//Arrays

var arratAmigos = ['Juan', 'Pedro', 'Pablo', 'Juan'];
console.log('Array incluye a Juan: ' + arratAmigos.includes('Juan'));

//Obtener elemento de mas de 4 caracteres

console.log('Array incluye a Juan: ' + arratAmigos.find(function (amigo) {
  return amigo.length > 4;
}));
console.log('Array incluye a Juan: ' + arratAmigos.findIndex(function (amigo) {
  return amigo.length > 4;
}));