/*VARIABLES */

/*Variable constante*/ 

const nameStudent = "¡Hola UPB"
/*No se puede cambiar el valor de una constante*/
/*nameStudent = "¡Hola Diplomado!"*/

/*Diferencia entre var y let*/
if (true){

    let blockScope ="Sí existe"
    var globalScope ="Sí existe"
}

console.log("variable var:", globalScope);
/*No se puede acceder a la variable let porque su scope es de bloque*/
/*console.log("variable let:", blockScope);*/


/*Tipos de datos*/

let int = 25;
let float =25.4;
let boolean = true;
let string = "UPB";
let nulo = null;
let indefinido = undefined;

console.log("Entero", int);
console.log("float", float);
console.log("Booleano", boolean);
console.log("Cadena", string);
console.log("Nulo", nulo);
console.log("indefinido", indefinido);

/*Funciones*/

/*Diferentes formas de declarar una funcion */

/*Forma 1: con palabra reservada function*/


function declaracionUno (){

    console.log("Forma 1 de declarar una función");
}

declaracionUno ()


/*Forma 2: funcion flecha */

const declaracionDos = () => {
    console.log( "forma 2 de declarar una función");
}

declaracionDos("Forma 2")

/*Sin parámetros y con parámetros */

/*Sin parámetros */
const sinParametros = () => {
    console.log("Función sin parámetros");
}

sinParametros()

/*Recibiendo parámetros */
const conParametros = (esUna, queRecibe="parámetros") =>{
    console.log(esUna + " que recibe " + queRecibe);
}

const parametros = " parámetros "
conParametros(" Función ", parametros)

/*Función que retorna un valor */

const funcionQueRetorna = (a, b) => {
    return a + b;
}

const resultado = funcionQueRetorna(1,2);

console.log(resultado);

/*Función anónima */

/*Con la palabra function */

setTimeout(function() {
    console.log('¡Hola! Esto es después de 2 segundos');
}, 2000);


/*tipo flecha*/

setTimeout(() => {
    console.log('¡Hola! Esto es después de 2 segundos');
}, 2000);