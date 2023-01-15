"use strict";

//Rest

var mostrarDatos = function mostrarDatos() {
  for (var _len = arguments.length, datos = new Array(_len), _key = 0; _key < _len; _key++) {
    datos[_key] = arguments[_key];
  }
  console.log(datos);
};
mostrarDatos('Juan', 23, ['Pedro', 'Maria', 'Jose'], 'Argentina');

//Spread

var mostrarDatosSpread = function mostrarDatosSpread() {
  for (var _len2 = arguments.length, datos = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    datos[_key2] = arguments[_key2];
  }
  console.log(datos);
};
var arrayDatos = ['Juan', 23, ['Pedro', 'Maria', 'Jose'], 'Argentina'];
mostrarDatosSpread.apply(void 0, arrayDatos);