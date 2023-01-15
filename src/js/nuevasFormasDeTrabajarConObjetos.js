//Acortar objetos

const crearObjeto = (nombre, edad) => {
    return {
        nombre,
        edad,
        mostrarInfo: () => {
            console.log(`${nombre} tiene ${edad} anios`);
        }
    }
};

const persona = crearObjeto('Juan', 23).mostrarInfo();