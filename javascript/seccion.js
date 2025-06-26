//Esto es un comentario de una linea
/*
  comentario de multiples
  lineas
*/

//variables
/*
  las variables son espacios de memoria que almacenan un valor
*/
//declaracion de una variable
let nombre = "Alex"; // variable de tipo string
console.log(nombre); // Imprime "Alex"
//Reasignacion de una variable
nombre = "Juan"; //reasignacion
console.log(nombre); // Imprime "Juan"

//tipos de datos
let number = 42; // Numero
let float = 3.14; // Numero de punto flotante (osea decimales)
let string = "hola, mundo" // cadena de texo
let boolean = true; // booleano solo puede ser (true/false)
//let array = [1, 2, 3,]; // array (lista)
let array = ["pera", "manzana", "uva",]; // lo mismo pero con string
console.log(array); //imprime ["pera", "manzana", "uva",]
console.log(array[7]); //imprime el primer elemento (0 es el elemto de inicio)
let nulo = null; // nulo (sin valor)
let indefinido; // undefined (sin asiginar)
let objeto = {nombre: "Alex", edad: 30}; //objeto
console.log(objeto); // imprime (nombre: "Alex", edad: 30)
console.log(objeto.nombre); //imprime  "Alex"

let sumas= 5 + 3; // suma
let restas = "a10" - "2"; // Resta

//practica
let prueba = "pedro"

//operadores  aritmeticos
/*
  los operadores aritmeticos son utilzados para operaciones matematicas
  - Suma +
  - Resta -
  - Multiplicacion *
  - divicion: /
  - Modulo (resto de la division)
  - Exponente: **
*/

let suma = 5 + 3; // Suma 8
let resta = 5 - 3; // Resta 2
let multiplicacion = 5 * 3; // Multiplicación 15
let division = 5 / 3; // División 1.6666666666666667
let modulo = 5 % 3; // Módulo (resto de la división) 2
let exponente = 5 ** 3; // Exponente (5 elevado a la 3) 125


//operadores comparativos
/*
  - Igualda: ==
  - Desigualdad: !=
  - Igualdad Estricta: ===
  - Desigualdad Estricta !==
  - Mayor que: >
  - Menor que: <
  - Mayor o igual que: >=
  - Menor o igual que: <=
*/
let igualdad = 5 == "5"; // Igualdad (true, porque el valor es el mismo)
let desigualdad = 5 != "5"; // Desigualdad (false, porque el valor es el mismo)
let igualdadEstricta = 5 === "5"; // Igualdad estricta (false, porque el tipo es diferente)
let desigualdadEstricta = 5 !== "5"; // Desigualdad estricta (true, porque el tipo es diferente)
let mayorQue = 5 > 3; // Mayor que (true)
let menorQue = 5 < 3; // Menor que (false)
let mayorOIgualQue = 5 >= 5; // Mayor o igual que (true)
/*

// Operadores Logicos
/*
  Los Operadores logicos son utilizados para combinar expresiones booleanas
  - AND: &&
  - OR: ||
  - NOT: !
*/

//Operadores de asignación
/*
  Los operadores de asignación son utilizados para asignar valores a variables.
  - Asignación simple: =
  - Suma y asignación: +=
  - Resta y asignación: -=
  - Multiplicación y asignación: *=
  - División y asignación: /=
  - Módulo y asignación: %=
*/
let asignacion = 5; // Asignación simple
/*
  Para las siguientes operaciones, se toma el valor actual de la variable 'asignacion'
  y se realiza la operación con el valor indicado, luego se asigna el resultado de nuevo a 'asignacion'.
*/
asignacion += 3; // Suma y asignación (asignacion = asignacion + 3)
asignacion -= 2; // Resta y asignación (asignacion = asignacion - 2)
asignacion *= 2; // Multiplicación y asignación (asignacion = asignacion * 2)
asignacion /= 4; // División y asignación (asignacion = asignacion / 4)
asignacion %= 3; // Módulo y asignación (asignacion = asignacion % 3)

// switch
/*
  La estructura switch se utiliza para ejecutar diferentes bloques de código basados en el valor de una expresión.
  Es útil cuando se tienen múltiples condiciones que dependen del mismo valor.
*/

let dia = 1; // Supongamos que 1 es Lunes, 2 es Martes, etc.
switch (dia) {
  case 1:
    console.log("Lunes");
    break;
  case 2:
    console.log("Martes");
    break;
  case 3:
    console.log("Miércoles");
    break;
  case 4:
    console.log("Jueves");
    break;
  case 5:
    console.log("Viernes");
    break;
  case 6:
    console.log("Sábado");
    break;
  case 7:
    console.log("Domingo");
    break;
  default:
    console.log("Día no válido");
}

// if else
/*
  La estructura if-else se utiliza para ejecutar un bloque de código si una condición es verdadera,
  y otro bloque si la condición es falsa.
*/

let edad = 18; // Supongamos que la edad es 18
if (edad < 0 || edad > 120) {
  console.log("Edad no válida");
} else if (edad < 18) {
  console.log("Eres menor de edad");
} else {
  console.log("Eres mayor de edad");
}


let inputs = prompt("Ingrese un número entre 1 y 10:");


let input = prompt("Ingrese un número entre 1 o 2:");



