//Operadore Aritméticos

//Suma (+): Se utiliza para sumar dos números.
let resultado = 5 + 3; //resultado contendrá el valor 8

//Resta (-): Se utiliza para restar un número de otro.
let resultado1 =  10 - 4; //resultado contendrá el varo 6. 

//Multiplicación (*): Se utiliza para mutiplicar dos números.
let resultado2 = 6 * 3; //resultado contendrá el valor 18.

//División (/): Se utiliza para dividir un número por otro. La división por cero produce un valoro especial llamada "Infinity" (infinito).
let resultado3 = 15 / 3; //resultado contendrá el valor 5

//Módulo (%): Se utiliza para obtener el resto de una división entre dos números.
let resultado4 = 10 % 3 //resultado contendrá el valor 1 (el resto de 10 dividido por 3)

//Incremento (++): Se utiliza para aumentar en 1 el valor de una variable. 
let numero = 5;
numero++;
//Ahora número contendrá el valor 6

//Decremento (--): Se utiliza para disminuir en 1 el valor de una variable.
let numero1 = 8;
numero1--; //ahora número contendrá el valor 7



//Doble igual - igualdad abstracta
5 == "5" //true ya que JavaScript convierte la cadena "5" a un número antes de la comparación.

//Triple igual - igualdad estricta
5 === "5" //false, porque no son del mismo tipo y los tipos también difieren.


//Ejercicio de convertir de Grados Celcius a Farenheit
let gradosCelsius = prompt("Ingresa los grados Celcius a convertir:");
gradosFahrenheit = (gradosCelsius * (9/5)) + 32;
console.log("Los grados Fahrenheit son: " + gradosFahrenheit + "°F");
