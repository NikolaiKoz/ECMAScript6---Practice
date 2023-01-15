"use strict";

var persona = {
  nombre: 'Tony',
  edad: 45,
  clave: 'Ironman'
};
var nombre = persona.nombre,
  edad = persona.edad,
  clave = persona.clave;
console.log("Nombredesestructurado: ".concat(nombre));
console.log("Edaddesestructurada: ".concat(edad));
console.log("Clavedesestructurada: ".concat(clave));

//Objeto con parametros por defecto

var estudian = {
  nombre: 'Tony',
  edad: 45,
  clave: 'Ironman'
};
var nombre2 = estudian.nombre2,
  edad2 = estudian.edad2,
  clave2 = estudian.clave2,
  _estudian$rango = estudian.rango,
  rango = _estudian$rango === void 0 ? 'Capitán' : _estudian$rango;
console.log("Nombredesestructurado: ".concat(nombre2));
console.log("Edaddesestructurada: ".concat(edad2));
console.log("Clavedesestructurada: ".concat(clave2));
console.log("Rangodesestructurado: ".concat(rango));