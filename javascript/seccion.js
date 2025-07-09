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
console.log(array[3]); //imprime el primer elemento (0 es el elemto de inicio)
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

//Funciones
/*
  Las Funciones son bloques que de codigos que realizan una tarea especifica y pueden ser reutilizadas.
*/
// Declaracion de una Funcion
function holaMundo(){
  console.log("Hola, mundo");
}

//llamada a la funcion
holaMundo(); // Esto ejecuta a la funcion y muestra "Hola, mundo" en la consola 
holaMundo(); // Estos se pueden llamar cuantas veces se desee 


//funcion con parametros 
/*
  Los parametros son variables que se pasan a una funcion para que pueda...
*/

function saludar(nombre = "Amigo"){
  console.log("!Hola," + nombre + "¡");
}

//Llamada de la funcion con arguento
saludar("Maria"); // Esto muestra "!Hola, Maria¡" en la consola
saludar("Juan"); // Esto muestra "!Hola, Juan¡" en la consola
saludar(); // Esto muestra "!Hola, amigo¡" en la consola


//Funcion con multiples parametros
function sumar(num1 = 0, num2 = 0) {
  console.log(num1 + num2);
}

sumar(5,10);

// Alcance (Scope)
/*
  El alcance se refiere a la visibilidad de las variables en diferentes partes del código.
  Hay dos tipos principales de alcance:
  - Alcance global: Las variables declaradas fuera de cualquier función son accesibles en todo el código.
  - Alcance local: Las variables declaradas dentro de una función solo son accesibles dentro de esa función.
*/

let saludos = "Hola";

if(true) {
  var variableGlobal = "soy global";
  let variableLocal = "soy Local";
  const Constante = "soy constante";
  console.log(variableGlobal,variableLocal,Constante);
}

console.log(variableGlobal,variableLocal,Constante);

//Funciones con retorno
/*
  Las funciones pueden devolver un valor utilizando la palabra clave `return`.
  Esto permite que la función produzca un resultado que puede ser utilizado posteriormente.
*/

function multiplicarConRetorno(num1,num2) {
  return num1 * num2;
}

console.log(multiplicarConRetorno(5,3));
let resultado = multiplicarConRetorno(10,5) + 5;

function multiplicarSinRetorno(num1, num2) {
  num1 * num2; // No devuelve nada, solo realiza la operación
}

console.log(multiplicarSinRetorno(5, 3)); // Esto muestra undefined en la consola
console.log(multiplicarSinRetorno(10,3) + 5)

//Recursion
/*
  La recursión es una técnica en la que una función se llama a sí misma para resolver un problema.
  Es útil para problemas que pueden dividirse en subproblemas más pequeños.
*/

/*
  Ejemplo: Imprimir números del 1 al 5 usando recursión
*/
function imprimirNumerosRecursivo(num) {
  if (num > 5) return; // Caso base: si num es mayor que 5, termina la recursión
  console.log(num); // Imprime el número actual
  imprimirNumerosRecursivo(num + 1); // Llama a la función con el siguiente número
}

imprimirNumerosRecursivo(0); // Llama a la función para iniciar la recursión


//1
function imprimir_numeros(numero, limite = 2) {
  if (numero <= limite) {
    if (numero % 2 === 0) console.log(numero);
    imprimir_numeros(numero + 1, limite);
  }
}

imprimir_numeros(0, 100);

//2
let frutas = ["uva", "melon", "tomate", "banana", "maiz"];

function imprimir_array(lista = [], numero = 0) {
  if (numero < lista.length) {
    console.log(lista[numero]);
    imprimir_array(lista, numero + 1);
  }
}

imprimir_array(frutas);

//3

function calcular_factorial(numero, acumulador = 1) {
  if (numero >= 1) {
    acumulador = acumulador * numero;
    if (numero === 1) {
      console.log("El factorial es: " + acumulador);
      return;
    }
    calcular_factorial(numero - 1, acumulador);
  } else if (numero === 0) {
    console.log("El factorial de 0 es 1");
    return;
  } else {
    console.log("Ingresa un valor valido");
  }
}

calcular_factorial(7);


for (let i = 0; i < 5; i++) {
  console.log ( "interaccion" + i );
  
}

// Loops
/*
  Los loops (bucles) son estructuras que permiten repetir un bloque de código varias veces.
  Los tipos más comunes son `for`, `while` y `do...while`.
*/
// Bucle for
let motos = ["Honda", "Yamaha", "Kawasaki", "Suzuki", "Ducati"];
for (let i = 0; i <= 100; i += 5) {
  //console.log("La moto es: " + motos[i]);
  console.log(i);
}

/*
  Ciclo for in
  El ciclo `for...in` se utiliza para iterar sobre las propiedades enumerables de un objeto.
  Es útil cuando necesitas acceder a las claves de un objeto.
*/
let persona = {
  nombre: "Juan",
  edad: 30,
  ciudad: "Madrid",
};

for (let propiedad in persona) {
  console.log(propiedad + ": " + persona[propiedad]); // Muestra cada clave y su valor
}

// Resolución con For-in y For-of
for (let categoria in supermercado) {
  for (let elemento of supermercado[categoria]) {
    console.log(elemento);
  }
}

// Resolución con For-in y forEach (función de flecha)
for (let categoria in supermercado) {
  supermercado[categoria].forEach((elemento) => {
    console.log(elemento);
  });
}

/**
 * Ejercicio 4:
 * Segun el siguiente arreglo de arreglos (matriz), crea:
 * - Un bucle que imprima la suma de todos los numeros.
 * - Un bucle que imprima la suma de cada fila.
 */
const numeros = [
  [1, 2, 3, 0],
  [4, 5, 6, 8],
  [7, 8, 9, 6],
];

// Suma de todos los números
let sumap = 0;
for (let i = 0; i < numeros.length; i++) {
  for (let j = 0; j < numeros[i].length; j++) {
    sumap += numeros[i][j];
  }
}
console.log("La suma de todos los números es: " + suma); // Usamos i para identificar la fila

// Suma de cada fila
let sumaFila = 0;
for (let i = 0; i < numeros.length; i++) {
  for (let j = 0; j < numeros[i].length; j++) {
    sumaFila += numeros[i][j];
  }
  console.log("La suma de la fila " + i + " es: " + sumaFila);
  sumaFila = 0;
}

/*
  Ciclo for of
  El ciclo `for...of` se utiliza para iterar sobre los elementos de un iterable, como un array o una cadena de texto.
  Es útil cuando necesitas acceder a los valores de un iterable.
*/
let canciones = ["Despacito", "Shape of You", "Blinding Lights"];
for (let cancion of canciones) {
  console.log("Canción: " + cancion); // Muestra cada canción
}


/*
  Ciclo while
  El ciclo `while` ejecuta un bloque de código mientras una condición sea verdadera.
  Es útil cuando no sabes cuántas veces necesitas iterar.
*/

let contador = 0;
while (contador < 5) {
  console.log("Contador: " + contador); // Muestra el valor del contador
  contador++; // Incrementa el contador
}

/*
  Ciclo do...while
  El ciclo `do...while` ejecuta un bloque de código al menos una vez y luego verifica la condición.
  Es útil cuando necesitas asegurarte de que el código se ejecute al menos una vez.
*/
let numero = 0;
do {
  console.log("Número: " + numero); // Muestra el valor del número
  numero++; // Incrementa el número
} while (numero < 3); // Continúa mientras el número sea menor que 3

/*
  Que son los prototipos y como funcionan
  Los prototipos son una característica de JavaScript que permite la herencia y la reutilización de código.
  Cada objeto en JavaScript tiene un prototipo, que es otro objeto del cual hereda propiedades y métodos.
  Puedes agregar propiedades y métodos a un prototipo para que todos los objetos que heredan de
  ese prototipo tengan acceso a ellos.
*/

/*
  Metodos de strings
*/
/*
  Metodos de strings
  Los métodos de strings son funciones que se pueden aplicar a cadenas de texto para realizar diversas operaciones.
  Algunos de los métodos más comunes son:
  - `toUpperCase()`: Convierte la cadena a mayúsculas.
  - `toLowerCase()`: Convierte la cadena a minúsculas.
  - `substring()`: Extrae una parte de la cadena.
  - `indexOf()`: Busca la posición de un carácter o subcadena en la cadena
  - `replace()`: Reemplaza una parte de la cadena por otra.
  - `split()`: Divide la cadena en un array de subcadenas.
  - `trim()`: Elimina los espacios en blanco al inicio y al final de la cadena.
  - `includes()`: Verifica si una subcadena está presente en la cadena.
  - `charAt()`: Devuelve el carácter en una posición específica.
  - `length`: Propiedad que devuelve la longitud de la cadena.
  - `startsWith()`: Verifica si la cadena comienza con una subcadena específica.
  - `endsWith()`: Verifica si la cadena termina con una subcadena específica.
  - `repeat()`: Repite la cadena un número específico de veces.
  - `concat()`: Une dos o más cadenas.
*/
let texto = "  Hola, JavaScript!  ";
console.log(texto.toUpperCase()); // Convierte a mayúsculas
console.log(texto.toLowerCase()); // Convierte a minúsculas
console.log(texto.substring(2, 10)); // Extrae una parte de la cadena
console.log(texto.indexOf("JavaScript")); // Busca la posición de "JavaScript"
console.log(texto.replace("JavaScript", "mundo")); // Reemplaza "JavaScript" por "mundo"
console.log(texto.replaceAll(" ", "")); // Reemplaza todos los espacios en blanco por nada
console.log(texto.split("a")); // Divide la cadena en un array
console.log(texto.trim()); // Elimina los espacios en blanco al inicio y al final
console.log(texto.includes("Hola")); // Verifica si "Hola" está presente
console.log(texto.charAt(3)); // Devuelve el carácter en la posición 3
console.log(texto.length); // Devuelve la longitud de la cadena
console.log(texto.startsWith("  Hola")); // Verifica si comienza con "  Hola"
console.log(texto.endsWith("!  ")); // Verifica si termina con "!
console.log(texto.repeat(2)); // Repite la cadena dos veces
console.log(texto.concat(" ¡Bienvenido!")); // Une " ¡Bienvenido!" a la cadena original

// Ejercicios de strings
/*
  1. Crea una función que reciba un string pero retorne cuantas palabras tiene.
  2. Crea una función que reciba un string y cuente cuantas vocales tiene
  3. Crea una función que reciba un string y retorne el string al revés.
  4. Crea una función que reciba un string y retorne si este es un palíndromo o no.
*/

//1
function contar_palabras(texto) {
  return texto.trim().split(" ").length;
}

console.log(contar_palabras("Hola a todos en la clase"));

//2
function contar_vocales(texto) {
  contador = 0;
  for (let letra of texto.toLowerCase()) {
    if ("aeiouáéíóú".includes(letra)) {
      contador++;
    }
  }
  return contador;
}

console.log(contar_vocales("Este mensaje es Supercalifragilisticoexpialidoso"));

//3
function invertir_texto(texto) {
  let palabraInvertida = "";
  for (let i = texto.length - 1; i >= 0; i--) {
    palabraInvertida += texto[i];
    //palabraInvertida = palabraInvertida + texto[i]
  }
  return palabraInvertida;
}

console.log(invertir_texto("Yo soy tu padre"));

//4
function verificar_palindromo(texto) {
  let acentos = ["á", "é", "í", "ó", "ú"];
  let vocales = ["a", "e", "i", "o", "u"];
  for (let i = 0; i < acentos.length; i++) {
    texto = texto.toLowerCase().replaceAll(acentos[i], vocales[i]);
    console.log("Remplazando acentos", texto)
  }
  texto = texto.replaceAll(" ", "").replaceAll(",", "").replaceAll(".","");
  console.log("Replazandos ',', ' ', '.'", texto)
  if (texto === invertir_texto(texto)) {
    console.log("Es un palindromo");
  } else {
    console.log("No es un palindromo");
  }
}

verificar_palindromo("A ti no, bonita.")

//Metodos de arrays
/*
  Los métodos de arrays son funciones que se pueden aplicar a arrays para realizar diversas operaciones.
  Algunos de los métodos más comunes son:
  - `push()`: Agrega uno o más elementos al final del array.
  - `pop()`: Elimina el último elemento del array y lo devuelve.
  - `shift()`: Elimina el primer elemento del array y lo devuelve.
  - `unshift()`: Agrega uno o más elementos al inicio del array.
  - `splice()`: Cambia el contenido de un array eliminando o reemplazando elementos existentes y/o agregando nuevos elementos en su lugar.
  - `slice()`: Devuelve una copia superficial de una porción del array dentro de un nuevo array.
  - `forEach()`: Ejecuta una función proporcionada una vez por cada elemento del array.
  - `map()`: Crea un nuevo array con los resultados de la llamada a la función proporcionada en cada elemento del array.
  - `filter()`: Crea un nuevo array con todos los elementos que cumplan la condición implementada por la función proporcionada.
  - `reduce()`: Aplica una función contra un acumulador y cada valor del array (de izquierda a derecha) para reducirlo a un único valor.
  - `find()`: Devuelve el primer elemento del array que cumple con la condición proporcionada en la función.
  - `includes()`: Verifica si un elemento está presente en el array.
*/
let frutasArray = ["melon", "tomate", "banana", "manzana", "pera"];
frutasArray.push("uva"); // Agrega "uva" al final del array
frutasArray.pop(); // Elimina el último elemento y lo devuelve
frutasArray.shift(); // Elimina el primer elemento y lo devuelve
frutasArray.unshift("fresa");   // Agrega "fresa" al inicio del array
frutasArray.splice(2, 1, "Kiwi"); // Elimina el elemento en el índice 2 y agrega "kiwi"
let nuevoArray = frutasArray.slice(1, 4); // Crea un nuevo array con los elementos del índice 1 al 3