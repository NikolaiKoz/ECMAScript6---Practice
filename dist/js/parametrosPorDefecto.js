"use strict";

var registrarUsuario = function registrarUsuario(nombre) {
  var pais = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'No especificado';
  var correo = arguments.length > 2 ? arguments[2] : undefined;
  var telefono = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'No especificado';
  console.log(nombre, pais, correo, telefono);
};
registrarUsuario('Oscar', undefined, '', '123456789');