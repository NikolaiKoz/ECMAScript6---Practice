# ECMASCRIPT 6 (ES)

Es una nueva version de Javascript, que se esta implementando en los navegadores, y que tiene nuevas caracteristicas.
Basicamente ofrece nuevas formas de escribir codigo, y nuevas formas de hacer cosas que antes no se podian hacer con una sintaxis mas limpia y mas facil de entender.

## Herramientas

* [Babel](https://babeljs.io/) - Compilador de ES6 a ES5
* [Webpack](https://webpack.github.io/) - Empaquetador de modulos
* [ES6 Features](http://es6-features.org/) - Lista de caracteristicas de ES6
* [ES6 Katas](http://es6katas.org/) - Katas para practicar ES6
* [ES6 Overview in 350 Bullet Points](https://ponyfoo.com/articles/es6) - Resumen de ES6 en 350 puntos

## Navengadores

* [Can I Use](http://caniuse.com/) - Compatibilidad de ES6 en los navegadores

Existen navegadores que no soportan ES6, pero que si soportan ES5, por lo que se puede usar ***Babel*** para compilar el codigo de ES6 a ES5, y asi poder usar ES6 en navegadores que no lo soportan. Para verificar que caracteristicas de ES6 soporta un navegador, se puede usar [Can I Use](http://caniuse.com/). Por ejemplo una caracteristica de ES6 que no soporta por algun navegador, es el uso de ***let*** y ***const***, por lo que se puede usar ***var*** en su lugar.

Con la ayuda de ***Babel*** se puede compilar el codigo de ES6 a ES5, y asi poder usar ES6 en navegadores que no lo soportan.

## Babel

[Babel](https://babeljs.io/) es un compilador de ES6 a ES5, que se puede usar en el navegador o en el servidor. Nos permite compilar codigo de ES6 a ES5, y asi poder usar ES6 en navegadores que no lo soportan. Por lo que los archivos en los que trabajaremos estaran dentro de una carpeta llamada src, y los archivos compilados estaran dentro de una carpeta llamada dist. Esto se realiza de forma general, en la carpeta src es donde trabajaremos, y en la carpeta dist es donde se compilara el codigo de ES6 a ES5.

### Instalacion

Primero debemos iniciar un proyecto de node, para esto ejecutamos el siguiente comando:

    npm init

Luego instalamos babel:

    npm install --save-dev @babel/core @babel/cli @babel/preset-env

Una vez que el codigo este compilado ya no es necesario tener babel, por lo que se puede instalar babel como dependencia de desarrollo, para que no se instale en el servidor.
Para ello se agrega la bandera ***--save-dev*** al comando de instalacion.

    npm install --save-dev @babel/core @babel/cli @babel/preset-env

Aqui estamos instalando babel, tambien el preset de babel para ES6 y babel cli.

Un preset es un conjunto de plugins de babel, que nos permite compilar codigo de ES6 a ES5.

- Luego para comprobar de instalarlo ingresamos al package.json y agregamos el siguiente script:

    "scripts": {
      "build": "babel src -d dist"
    }

- Por mi estructura de carpetas, el comando seria el siguiente:

    "scripts": {
      "build": "babel ./src/js -d ./dist/js"
    }

Esto significa que el codigo de ES6 esta en la carpeta src en la carpeta js, y que el codigo compilado se guardara en la carpeta dist en la carpeta js.

para correr este comando se ejecuta el siguiente comando:

    npm run build

Ahora ya tenemos babel instalado y se ejecutamos el script en la carpeta dist se crearan los archivos, pero no estaran compilados ***babel*** funciona en dos pasos, primero lee el codigo y luego lo compila, asi que ahora debemos ***configurar*** babel.

### Configuracion

Para configurar babel, debemos crear un archivo llamado ***babel.config.json*** en la raiz del proyecto, y dentro de este archivo debemos agregar lo siguiente:

    {
      "presets": ["@babel/preset-env"]
    }

Ahora si ejecutamos el comando ***npm run build***, se compilara el codigo de ES6 a ES5, y se guardara en la carpeta dist.

Pero cada vez que se modifique un archivo, se debe volver a ejecutar el comando ***npm run build***, para que se vuelva a compilar el codigo, por lo que se puede usar ***babel-cli*** para que se compile el codigo cada vez que se modifique un archivo.

Para ello se puede modificar el script en el package.json, agregando la bandera ***--watch*** al comando de babel:

    "scripts": {
      "build": "babel src -d dist --watch"
    }


Para detener el proceso de ***babel-cli*** se debe presionar ***ctrl + c***.

### Variables

En ES6 se pueden declarar variables con ***let*** y ***const***, que son variables de bloque, y no de funcion, por lo que no se pueden acceder desde fuera del bloque en el que se declararon.

    function test() {
      let x = 31;
      if (true) {
        let x = 71;  // different variable
        console.log(x);  // 71
      }
      console.log(x);  // 31
    }
    test();

En el ejemplo anterior, se declaro una variable ***x*** con ***let*** dentro de una funcion, y luego se declaro otra variable ***x*** con ***let*** dentro de un bloque, y se imprimio el valor de cada variable, y se puede ver que la variable ***x*** dentro del bloque es diferente a la variable ***x*** fuera del bloque.

#### Var, Let y Const

En ES6 se pueden declarar variables con ***var***, ***let*** y ***const***, que son variables de bloque, y no de funcion, por lo que no se pueden acceder desde fuera del bloque en el que se declararon.

    function test() {
      var x = 31;
      if (true) {
        var x = 71;  // same variable
        console.log(x);  // 71
      }
      console.log(x);  // 71
    }
    test();

En el ejemplo anterior, se declaro una variable ***x*** con ***var*** dentro de una funcion, y luego se declaro otra variable ***x*** con ***var*** dentro de un bloque, y se imprimio el valor de cada variable, y se puede ver que la variable ***x*** dentro del bloque es la misma que la variable ***x*** fuera del bloque.

#### Let

En ES6 se pueden declarar variables con ***let***, que son variables de bloque, y no de funcion, por lo que no se pueden acceder desde fuera del bloque en el que se declararon.

    function test() {
      let x = 31;
      if (true) {
        let x = 71;  // different variable
        console.log(x);  // 71
      }
      console.log(x);  // 31
    }
    test();

En el ejemplo anterior, se declaro una variable ***x*** con ***let*** dentro de una funcion, y luego se declaro otra variable ***x*** con ***let*** dentro de un bloque, y se imprimio el valor de cada variable, y se puede ver que la variable ***x*** dentro del bloque es diferente a la variable ***x*** fuera del bloque.

#### Const

En ES6 se pueden declarar variables con ***const***, que son variables de bloque, y no de funcion, por lo que no se pueden acceder desde fuera del bloque en el que se declararon.

    function test() {
      const x = 31;
      if (true) {
        const x = 71;  // different variable
        console.log(x);  // 71
      }
      console.log(x);  // 31
    }
    test();

En el ejemplo anterior, se declaro una variable ***x*** con ***const*** dentro de una funcion, y luego se declaro otra variable ***x*** con ***const*** dentro de un bloque, y se imprimio el valor de cada variable, y se puede ver que la variable ***x*** dentro del bloque es diferente a la variable ***x*** fuera del bloque.

- ***const*** debe ser utilizada practicamente siempre, ya que no se puede modificar el valor de la variable, y si se intenta modificar el valor de la variable, se lanzara un error, solo se debe usar ***let*** cuando se necesite modificar el valor de la variable.

- ***var*** no se debe usar, ya que no se puede acceder a la variable desde fuera del bloque en el que se declaro, y si se intenta acceder a la variable desde fuera del bloque, se lanzara un error.