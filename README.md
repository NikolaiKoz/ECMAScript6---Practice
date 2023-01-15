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

Aqui estamos instalando babel, y tambien el preset de babel para ES6.

Un preset es un conjunto de plugins de babel, que nos permite compilar codigo de ES6 a ES5.




