"use strict";

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var usuario = /*#__PURE__*/function () {
  function usuario(nombre, apellido, libros, mascotas) {
    _classCallCheck(this, usuario);
    this.nombre = nombre;
    this.apellido = apellido;
    this.libros = libros;
    this.mascotas = mascotas;
  }
  _createClass(usuario, [{
    key: "getFullName",
    value: function getFullName() {
      return "".concat(this.nombre, " ").concat(this.apellido);
    }
  }, {
    key: "addMascota",
    value: function addMascota(mascota) {
      this.mascotas.push(mascota);
    }
  }, {
    key: "countMascotas",
    value: function countMascotas() {
      return this.mascotas.length;
    }
  }, {
    key: "addBook",
    value: function addBook(book, autor) {
      this.libros.push({
        nombre: book,
        autor: autor
      });
    }
  }, {
    key: "getBookNames",
    value: function getBookNames() {
      return this.libros.map(function (libro) {
        return libro.nombre;
      });
    }
  }]);
  return usuario;
}();
var usuario1 = new usuario("Jose Luis", "Gonzalez", [{
  nombre: "El señor de los anillos",
  autor: "J.R.R. Tolkien"
}], ["Perro", "Gato"]);
console.log(usuario1.getFullName());
console.log(usuario1.countMascotas());
usuario1.addMascota("Pez");
console.log(usuario1.countMascotas());
usuario1.addBook("El principito", "Antoine de Saint-Exupéry");
console.log(usuario1.getBookNames());
document.write("<h1>Clases y Herencia</h1>");
document.write("<p>Nombre: ".concat(usuario1.getFullName(), "</p>"));

//herencia
var estudiantes = /*#__PURE__*/function (_usuario) {
  _inherits(estudiantes, _usuario);
  var _super = _createSuper(estudiantes);
  function estudiantes(nombre, apellido, libros, mascotas, cursos) {
    var _this;
    _classCallCheck(this, estudiantes);
    _this = _super.call(this, nombre, apellido, libros, mascotas);
    _this.cursos = cursos;
    return _this;
  }
  _createClass(estudiantes, [{
    key: "addCourse",
    value: function addCourse(curso) {
      this.cursos.push(curso);
    }
  }, {
    key: "getCourseNames",
    value: function getCourseNames() {
      return this.cursos;
    }
  }]);
  return estudiantes;
}(usuario);