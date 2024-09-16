//Repasar la interpolacion ``

// var nombre = "Juan"
// var apellido = "Oyarce"

// console.log("hola " + nombre + " " + apellido)
// console.log(`Hola ${nombre} ${apellido}`)

// var numUno = 10
// var numDos = 20
// var suma = numDos + numUno
// console.log("El resustado de la suma es: 30")
// console.log("El resultado de la suma es: " + (numUno + numDos))
// console.log(`El resultado de la suma es: ${numUno + numDos}`)

// var saludo = `Hola ${saludo} `
// console.log(saludo)

// var saludo = `Hola ${saludo} `
// console.log(saludo)

//-----------------------------------------------------------------
// var y let en ambito global, de bloque, etc


// var: Se puede redeclarar y modificar en cualquier contexto (global, función), y no respeta el ámbito de bloque.
// let: No permite ser redeclarada en el mismo ámbito, pero puede ser reasignada. Respeta el ámbito de bloque, lo que la hace más segura en estructuras como bucles y condicionales.

// ambito global. var se puede redeclarar y modificar en el ámbito global.

// var nombre = "Marion"
// console.log(nombre)

// var nombre = "David"  //la buena practica para redeclarar una variable es: nombre = "David"
// console.log(nombre)

// //-------------------------
// let edad =  30
// console.log(edad)

// // let edad =  25 //Esto arroja error de sintaxis
// edad = 25
// console.log(edad)

//-------------------------
//-------------------------

// const funcionVar = () => {
//     var mensaje = "Hola"
//     if(true) {
//         var mensaje = "Chau"
//         console.log(mensaje)
//     }
//     console.log(mensaje)
// }

// funcionVar()

// const funcionLet = () => {
//     let mensajeLet = "Hola"
//     if(true) {
//         let mensajeLet = "Chau"
//         console.log(mensajeLet)
//     }
//     console.log(mensajeLet)
// }

// funcionLet()

//--------------------------------
//--------------------------------

// for (var i = 0; i < 3; i++) {
//     console.log("adentro", i) 
// }
// console.log("afuera", i) 
 //0, 1, 2, 3


// for (let j = 0; j < 3; j++) {
//     console.log("adentro", j) 
// }
// console.log("afuera", j) 

//--------------------------------
//--------------------------------
// console.log(hostingVar)
// var hostingVar = "Esto es Hosting"
// console.log(hostingVar)

// console.log(hostingLet)  // Error: Cannot access 'hoistedLet' before initialization
// let hostingLet = "Esto es Hosting"
// console.log(hostingLet)

//----------------------------------------------------------
//               Destructuring


//Destructuring básico con objetos

// const alumno = {
//     nombre: "Erick",
//     edad: 20,
//     pais: "Chile"
// }

// let { nombre, edad, pais } = alumno

// console.log(nombre)
// console.log(edad)
// console.log(pais)

// Destructuring objetos con alias

const tutor = {
    nombre: "Rodrigo",
    edad: 25,
    pais: "Chile",
    region: "Capital"
}

let { nombre: nombreTutor, edad: edadTutor, pais: paisTutor, region: regionTutor = "no tiene region"} = tutor

console.log(nombreTutor)
console.log(regionTutor)

// Destructuring con valores por defecto en objetos

const profesor = {
    nombre: "Emiliano",
    edad: 31,
    pais: "Argentina"
}

let { nombre: nombreProfesor, edad: edadProfesor, pais: paisProfesor, region: regionProfesor = "no tiene region" } = profesor

console.log(nombreProfesor)
console.log(regionProfesor)
