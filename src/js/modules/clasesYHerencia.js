class usuario {
  constructor(nombre, apellido, libros, mascotas) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.libros = libros;
    this.mascotas = mascotas;
  }
  getFullName() {
    return `${this.nombre} ${this.apellido}`;
  }
  addMascota(mascota) {
    this.mascotas.push(mascota);
  }
  countMascotas() {
    return this.mascotas.length;
  }
  addBook(book, autor) {
    this.libros.push({ nombre: book, autor: autor });
  }
  getBookNames() {
    return this.libros.map((libro) => libro.nombre);
  }
}

const usuario1 = new usuario(
    "Jose Luis",
    "Gonzalez",
    [{ nombre: "El señor de los anillos", autor: "J.R.R. Tolkien" }],
    ["Perro", "Gato"]
);

console.log(usuario1.getFullName());
console.log(usuario1.countMascotas());
usuario1.addMascota("Pez");
console.log(usuario1.countMascotas());
usuario1.addBook("El principito", "Antoine de Saint-Exupéry");
console.log(usuario1.getBookNames());

document.write(`<h1>Clases y Herencia</h1>`);
document.write(`<p>Nombre: ${usuario1.getFullName()}</p>`);

//herencia

class estudiantes extends usuario {
  constructor(nombre, apellido, libros, mascotas, cursos) {
    super(nombre, apellido, libros, mascotas);
    this.cursos = cursos;
  }
  addCourse(curso) {
    this.cursos.push(curso);
  }
  getCourseNames() {
    return this.cursos;
  }
}