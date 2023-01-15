const promesa = new Promise(
    (resolve, reject) =>{
        //Accion que se ejecuta
        // resolve('Se ejecuto la promesa');
        reject('No se ejecuto la promesa');
    }
);

promesa.then(() => {
    alert('Se ejecuto la promesa');
});

promesa.catch(() => {
    alert('No se ejecuto la promesa');
});