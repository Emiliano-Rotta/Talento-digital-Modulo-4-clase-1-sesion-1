// Ejercicios de Interpolación de Variables
// 1. Ejercicio: Saludo personalizado
// Consigna: Crea una variable nombre con tu nombre y usa interpolación de variables para imprimir un saludo como "Hola, mi nombre es [nombre]".

// var nombre = "Emiliano"
// console.log(`Hola, mi nombre es ${nombre}`)

//------------------------------------------
// 2. Ejercicio: Descripción del objeto
// Consigna: Crea variables producto, precio y cantidad, y usa interpolación de variables para imprimir "El producto [producto] cuesta [precio] dólares y tienes [cantidad] unidades".

// var producto = "PC"
// var precio = 100
// var cantidad = 10
// console.log(`El producto ${producto} cuesta ${precio} dólares y tienes ${cantidad} unidades `)


//------------------------------------------

// 3. Ejercicio: Operaciones matemáticas
// Consigna: Crea dos variables a y b con valores numéricos e imprime la suma de ambas en una frase como "La suma de [a] y [b] es [resultado]".

// var a = 100
// var b = 10
// console.log(`La suma de ${a} y ${b} es ${a + b} `)

//---------------------------------


// Ejercicios sobre el Uso Global y en Bloque de var y let
// 4. Ejercicio: var en ámbito global
// Consigna: Declara una variable var fuera de una función, luego vuelve a declararla dentro de la función y muestra su valor dentro y fuera de la función.

// var nombre = "Emiliano"
// const saludar = () => {
//     var nombre = "Ghiselle"
//     console.log(nombre)
// }
// saludar()
// console.log(nombre)

//---------------------------------

// 5. Ejercicio: let en ámbito de bloque
// Consigna: Declara una variable let dentro de un bloque if y luego intenta acceder a esa variable fuera del bloque. (deberá arrojar error)

// if(true){
//     let nombre = "Emiliano";
//     console.log(nombre)
// }
// // console.log(nombre) // lo comento porque arroja error

//---------------------------------

//6.Ejercicio: Reasignación de var
// Consigna: Declara una variable var, reasígnale un valor dentro de una función y luego imprime el valor fuera de la función.

// var edad = 25
// function cambiarEdad() {
//     edad = 30;
//     console.log(edad)
// }
// cambiarEdad()
// console.log(edad)


//---------------------------------

//7.  Ejercicio: Reasignación de let en bloque
// Consigna: Declara una variable let dentro de un bloque y reasígnale un valor en otro bloque, mostrando que son variables diferentes.

let edad = 25
if(true) {
    let edad = 30;
    console.log(edad)
}
console.log(edad)

//---------------------------------

// Ejercicios de Destructuring con Objetos y Arrays
// 8. Ejercicio: Destructuring básico de objetos
// Consigna: Usa destructuring para extraer las propiedades nombre y edad de un objeto persona y mostrarlas en consola.


//---------------------------------


//9. Ejercicio: Destructuring con alias en objetos
// Consigna: Usa destructuring para extraer la propiedad modelo de un objeto coche y renombrarla como carModel.


//---------------------------------


//10. Ejercicio: Destructuring de arrays
// Consigna: Usa destructuring para extraer los dos ultimos elementos de este array: const frutas = ["Manzana", "Banana", "Naranja"];


//---------------------------------
