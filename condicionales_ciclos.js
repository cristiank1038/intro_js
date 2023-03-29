var bool = true;

if(bool) { //Si acaso la condicional se cumple O es TRUE
    console.log("Variable verdadera");
} else {
    console.log("Variable falsa");
}

var num1 = 5;
var num2 = 5;
if(num1 < num2) { // a === b; a !== b; a < b; a > b; a <= b; a >= b
    console.log("Num1 es menor a Num2");
} else if (num1 > num2) {
    console.log("Num1 es mayor a Num2");
} else {
    console.log("Num1 y Num2 SON IGUALES");
}

var temperatura = 20;
var estaLloviendo = false; //NO está lloviendo

if(temperatura >= 18) {
    if(!estaLloviendo) { //Si NO está lloviendo
        console.log("Estás en México");
    }
}

if(temperatura >= 18 && !estaLloviendo) { //&& AMBAS condiciones se deben de cumplir
    console.log("Vamos a dar un paseo");
}

if(temperatura >= 18 || !estaLloviendo) { // || Si una u otra de las condiciones se cumple
    console.log("No está tan mal para pasear");
}

var entendimos = false;
if(!entendimos) { //AQUI buscamos a las personas que NO entendieron
    console.log("Tranquilo, seguimos practicando");
} else {
    console.log("Felicidades, vamos un paso adelante");
}

/* CICLOS */
//i = 0;
//0 < 5 SI
//IMPRIMIMOS HOLA
//i = 1;
//1 < 5
//IMPRIMIMOS HOLA
// i = 2;
//2 < 5
//IMPRIMIMOS HOLA
//i = 3
//3 < 5
//IMPRIMIMOS HOLA
//i = 4
//4 < 5
//IMPRIMIMOS HOLA
//i = 5
// 5 < 5 NO
for (var i=1; i<=5; i+=3) {
    console.log("HOLA!" + i);
}

var x = 0;
/*
x = 0; 
0 < 3
IMPRIMIR ADIOS
x = 1
1 < 3
IMPRIMIR ADIOS
x = 2
2 < 3
IMPRIMIR ADIOS
x = 3
3 < 3
 */
while(x < 3) {
    console.log("ADIOS!");
    x++;
}

