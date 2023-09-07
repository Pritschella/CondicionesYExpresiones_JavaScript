console.log("Estoy vivooooooo");

/*
Operador

Elemento que nos permite realizar una operación entre dos o más elementos.

- Operadores aritméticos (+, -, *, /)
- Operadores de asignación (=, ==, === / asignación, igualdad, igualdad estricta o estrictamente igual)

- Operadores lógicos (&&, ||, !)
- Operadores de comparación (<, >, <=, >=, ==, ===)

- Operadores de cadenas (tolowerCase, toUpperCase, trim, toString, concat) se verán en otro tema.

*/

/*Operadores aritméticos

Son operadores que nos permiten tomar valores como sus operandos y retornar un valor numérico único. Corresponden a operaciones matemáticas.

    Suma (+)
    Resta (-)
    Multiplicación (*)
    División (/)
    Residuo / Módulo (%)
    Exponenciación (**)
    Incremento (++)
    Decremento (--)

*/

//Variables
let numero1 = 10;
let numero2 = 2;
let numero3 = "5";

//Operaciones
suma = numero1 + numero2; //12
resta = numero1 - numero2; //8
multiplicación = numero1 * numero2;
division = numero1 / numero2;
residuo = numero1 % numero2;
exponenciacion = 10 ** 2; //es obsoleto porque ya hay un método para esto.

//Impresión del valor con incremento
console.log("Valor del número 1 antes del incremento: ", numero1);

//NOTA: Cuando usamos incremntos el valor se reasigna (suma y reasigna en la misma operacion)
incremento = numero1++; //11
decremento = numero2--; //1

//Forma extensa de un incremento
numero1 = numero1 + 1;

console.log("Valor del número 1 después del incremento: ", numero1);

//Incremento de 10 en 10
numero1 += 10; //2 suma y reasigna al mismo tiempo
numero1 = 10 +10;


//Ejemplo
//2{5*6(4) + [3-(5-76)]};
//operacionCompleja =  10 + 5 / 2(5 - 6);



//Impresiones en pantalla
console.log("Suma de 10 + 2: ", suma); //1 forma de mostrar la suma
console.log("Suma de 10 + 2: ", (numero1 + numero2)); //segunda forma
console.log("Suma de 10 + 2: " , 10 + 2); //tercera forma
console.log("Resta de 10 - 2: ", resta);

/*
Operadores de comparación

Operadores que nos permiten comparar dos datos, y al hacerlo obtendremos un valor booleano (true o false)

    - mayor que (>)
    - menor que (<)
    - mmayor o igual que (>=)
    - menor o igual que (<=)
    - igual (==)
    - estrictammente igual (===)
    - no es igual (!=)
    - no es estrictamente igual (!==)


    Igual (==) 

    Sirve para comparar que dos valores sean iguales

*/

let numeroComparacion1 = 23;
let numeroComparacion2 = 13;
let numeroComparacion3 = 13;
let numeroComparacion4 = "13";

//Recordar en tema de DOM y en validaciones posteriores (expresiones regulares)
// 13 == "13" //true
// 13 === "13" //false

// 23 > 12  true
// 23 < 12 false

if(edadFelipe >= 18){
    console.log("Puedes ir a la pachangona");
}else{
    console.log("Te quedas en casa");
}


//Dos negaciones es una afirmación
// !Vamos a comer (esto significa que NO vamos a comer) (no vamos a comer)
// !no me guusta Java (esto indica que SÍ me gusta Java) (no no me gusta Java) (no * no = sí)

/*

Operadores de asignación

Son los operadores que utilizan para asignar un valor a una variable. Se usa el operador =

let edad = 31;
let saldo = 0;

*/


/* Operadores lógicos

Nos devuelven un resultado a partir de que se cumpla (o no) una condición, el resultado es booelano (true o false).

    - AND &&: Sirve para determinar si dos expresiones son verdaderas. Si ambas son verdaderas, el resultado es verdadero. Si alguna de ellas es falsa, todo el resultado es falso. Si ambas son falsas, todo es falso.


*/

let tengoUnCrush = true;
let miCrushMeQuiere = true;

if(tengoUnCrush && miCrushMeQuiere){
    console.log("Estoy feliz");
}else{
    console.log("Háganse a un lado, me quiero automorir");
}

/*

    - OR ||: Sirve para determinar si dos expresiones son falsas. Si cualquiera de las dos afirmaciones es verdadra, todo es verdadero. Si las dos son falsas, todo es falso. 

*/

if(hayChilaquilesverdes || hayCarneEnSuJugo){
    console.log("Felipe desayuna chido");
}else{
    console.log("Felipe no desayuna chido");
}

/*

NOT (!): Regresa lo contrario de lo que evalúamos


*/

//Este código está incompleto, puede causar errores (explicacón de anidación de operadores lógicos)
/*let escenario1 = (edadFelipe >= 18 && saldoFelipe  = !0);
let escenario2 = (edadFelipe >=18 && amigosQueInviten = true);

if( escenario1 || escenario29){
    console.log();
}*/

//El NOT se utiliza más cuando cambiamos una contraseña, o para validar si ya estás registrado o no.





