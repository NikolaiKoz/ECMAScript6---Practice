"use strict";

//Acortar objetos

var crearObjeto = function crearObjeto(nombre, edad) {
  return {
    nombre: nombre,
    edad: edad,
    mostrarInfo: function mostrarInfo() {
      console.log("".concat(nombre, " tiene ").concat(edad, " anios"));
    }
  };
};
var persona = crearObjeto('Juan', 23).mostrarInfo();