"use strict";

var nombres = ['Juan', 'Pedro', 'Luis', 'Maria', 'Jose'];
console.log("Arreglo original: ".concat(nombres));
var nuevoArreglo = nombres.map(function (nombre) {
  return nombre.toUpperCase();
});
console.log("Nuevo arreglo: ".concat(nuevoArreglo));