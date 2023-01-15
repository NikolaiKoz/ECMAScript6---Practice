"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var persona = ['Jose Luis', 45, 'Argentina'];
var nombre = persona[0],
  edad = persona[1],
  pais = persona[2];
console.log("Nombredesestructurado: ".concat(nombre));
console.log("Edaddesestructurada: ".concat(edad));
console.log("Pa\xEDsdesestructurado: ".concat(pais));
var nombre2 = persona[0],
  pais2 = persona[2];
console.log("Nombredesestructurado: ".concat(nombre2));
console.log("Pa\xEDsdesestructurado: ".concat(pais2));

// Desestructuración de arreglos anidados en parametros de funciones

var mostrarInfo = function mostrarInfo(_ref) {
  var _ref2 = _slicedToArray(_ref, 3),
    nombre = _ref2[0],
    edad = _ref2[1],
    pais = _ref2[2];
  console.log("Nombredesestructurado: ".concat(nombre));
  console.log("Edaddesestructurada: ".concat(edad));
  console.log("Pa\xEDsdesestructurado: ".concat(pais));
};
mostrarInfo(persona);

// Saltea el primer elemento del arreglo

var mostrarInfo2 = function mostrarInfo2(_ref3) {
  var _ref4 = _slicedToArray(_ref3, 3),
    edad = _ref4[1],
    pais = _ref4[2];
  console.log("Edaddesestructurada: ".concat(edad));
  console.log("Pa\xEDsdesestructurado: ".concat(pais));
};
mostrarInfo(persona);