
//INTRODUCCION - JAVASCRIPT#1

//document.write("Bienvenidos");

//alert ('mensaje usando la función "alert"');s

//alert(2+3+2+5);

/* 
alert("Hola")
["Bienvenidos a","CodingTube"].forEach(alert); */

//console.log("introduccion a javascript");

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////7

/* let userAge = 18;
userAge=31; */

/* let userAge;
let birthYear;

userAge = prompt("ingresa tu edad");

birthYear = 2023 - userAge;

document.write(`tu tienes ${userAge} años de edad y naciste en el año ${birthYear}`); */

//console.log("CodingTube")

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 1. Operadores Aritmeticos
let operando1= 3;
let operando2= 2;
let resultado;

resultado= operando1 + operando2;
resultado= operando1 - operando2;
resultado= operando1 * operando2;
resultado= operando1 / operando2;
resultado= operando1 % operando2;
resultado= operando1 ** operando2;

resultado= ++operando1;


console.log(resultado);
console.log(operando1);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 2. Operadores de Asignación

/* let resultado= 5;


resultado += 3;

console.log(resultado); */

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 3. Operadores de comparación
/* 
console.log (2>3);
console.log(3=='3');
console.log(3==="3");

a= 5;
b="5";

console.log (a!=b); */

//////////////////////////////////////////////////////////////////////////////////////////////////////////

// 4. Operadores Logicos 
/* let operando1= false;
let operando2= false;

console.log(operando1&&operando2); */
/* 

/////////////////////////////////////////////////////////////////////

//  5. Operador ternario 

let patas= 4;
let accion= "ladra";

if (patas==4 && accion == "ladra"){
    console.log("Es un perro")
}
else{
    console.log("No es un perro")
} 

///////////////////////////////////////////////////////////////////////////////////////////

// CONDICIONALES IF/ELSE

/* let condicion= 4;

document.write("linea de codigo 1<br>");
document.write("linea de codigo 2<br>");
document.write("linea de codigo 3<br>");

if(condicion==1){
    document.write("codigo en caso que se cumpla el if<br>");
    document.write("codigo en caso que se cumpla el if<br>");
    document.write("codigo en caso que se cumpla el if<br>");
} else{
    document.write("codigo en caso que no se cumpla el if<br>");
    document.write("codigo en caso que no se cumpla el if<br>");
    document.write("codigo en caso que no se cumpla el if<br>");

}

document.write("linea de codigo 4<br>");
document.write("linea de codigo 5<br>");
document.write("linea de codigo 6<br>"); */

/* let hora = prompt("ingrese la hora por favor");

if (hora>=6 && hora<=12){
    document.write("Buenos dias");
} else if (hora>=13 && hora <=18){
    document.write("Buenas tardes");
} else{
    document.write("Buenas noches");
} */

/////////////////////////////////////////////////////////////////////////////////////////////////

// CICLO WHILE 

let cont=1;
while(cont<=100){
    document.write(cont+ " ");
    cont++;
}





