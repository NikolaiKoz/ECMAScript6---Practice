"use strict";

var promesa = new Promise(function (resolve, reject) {
  //Accion que se ejecuta
  // resolve('Se ejecuto la promesa');
  // reject('No se ejecuto la promesa');
});
promesa.then(function () {
  alert('Se ejecuto la promesa');
});
promesa["catch"](function () {
  alert('No se ejecuto la promesa');
});