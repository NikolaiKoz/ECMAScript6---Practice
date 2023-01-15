"use strict";

//Nuevas formas de declara variables en ES6

var nombreVar = "Juan";
console.log("nombreVar: " + nombreVar);
var nombreVar = "Pedro";
console.log("nombreVar 2: " + nombreVar);

//Var permite redeclarar la variable y sobreescribir su valor pero no es recomendable hacerlo

var nombreLet = "Luis";
console.log("nombreLet: " + nombreLet);

// let nombreLet = "Maria"; //No se puede redeclarar la variable con let ya que marca error

console.log("nombreLet 2: " + nombreLet);
function saludar() {
  var nombre = "Juan";
  console.log("Hola " + nombre);
}
saludar();

// console.log("Hola " + nombre); Let y const solo existen dentro del scope donde fueron declaradas.