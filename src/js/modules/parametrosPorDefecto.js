
const registrarUsuario = (nombre, pais = 'No especificado', correo, telefono = 'No especificado') => {
    console.log(nombre, pais, correo, telefono);
}

registrarUsuario('Oscar', undefined, '', '123456789');