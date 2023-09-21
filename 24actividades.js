//ACTIVIDAD 1

var nombre = "Carlos";
console.log(nombre)

var numero = 1000;
console.log(numero);

var objeto = {
    nombre : "Juan",
    apellido : "Perez",
    telefono : "55443322"
}
console.log(objeto)

//ACTIVIDAD 2

var bandera = false;
console.log(typeof bandera);

function miFuncion(){}
console.log(typeof miFuncion)

var simbolo = Symbol("mi simbolo");
console.log(typeof simbolo);

class Persona{
    constructor(nombre, apellido){
        this.nombre=nombre;
        this.apellido=apellido;
    }
}
console.log(typeof Persona);

var x;
console.log(typeof x);

x = undefined;
console.log(typeof x);

var y = null;
console.log(typeof y);

//ACTIVIDAD 3

var y = null;
console.log(typeof y);

var autos = ['BMW', 'Audi','Volvo']
console.log(autos);
console.log(typeof autos);

var z = '';
console.log(z);
console.log(typeof z);

//ACTIVIDAD 4

var nombre = 'Juan';
var apellido = 'Perez';

var nombreCompleto = nombre + ' ' + apellido;
console.log(nombreCompleto);

var nombreCompleto2 = 'Carlos' + ' ' + 'Lara';
console.log(nombreCompleto2);

var x = nombre + 2 + 4;
console.log(x);

x = nombre + (2+4);
console.log(x)

x = 2 + 4 + nombre;
console.log(x)

//ACTIVIDAD 5

let nombre;
nombre = "Juan";
console.log(nombre);

const apellido = "Perez";

//ACTIVIDAD 6

let nombreCompleto = "Juan Perez";
nombreCompleto = "Carlos Lara";
console.log(nombreCompleto);
console.log(nombreCompleto);

let alnombreCompleto;
let _nombreCompleto;
let $nombreCompleto;

let ruptura = 10;

//ACTIVIDAD 7

let a =3,b = 2;
let z = a + b;
console.log("Resultado de la suma :" + z);

z =  a -b;
console.log("Resultado de la resta : " + z );

z = a * b;
console.log("Resultado de la mult:"+z);

z = a*b;
console.log("Resultado de la division:"+z);

z = a%b;
console.log("Resultado de operacio modulo ( residuo):"+z);

z=a**b;
console.log("Resultado de operador exponente: "+ z)


//ACTIVIDAD 8

let a =3,b = 2;
let z = a + b;

z = ++a;
console.log(a);
console.log(z);

z = b++;
console.log(b);
console.log(z);

z = --a;
console.log(b);
console.log(z);

z = b--;
console.log(b);
console.log(z);

//ACTIVIDAD 9

let a =3, b = 2,c=1,d=4;
let z = a * b + c / d ;
console.log(z);

z = c + a * b / d;
console.log(z);

z = (c + a) * b /c;
console.log(z);

//ACTIVIDAD 10

let a =3,b = 2,c = "3";
let z = a == c;
console.log(z);

z = a ==c;
console.log(z);

//ACTIVIDAD 11

let a = 3, b = 2, c = 3;

let z = a != c;
console.log(z);

z = a !== c;
console.log(z);

//ACTIVIDAD 12

let a  = 15;
let valMin = 0, valMax = 10;

if ( a >= valMax && a <= valMax){
    console.log()
}
else{
    console.log("Fuera de rango");
}

//ACTIVIDAD 13

let vacaciones = false, diaDescanso = true;
if( vacaciones || diaDescanso){
    console.log("Padre puede asistir al juego del hijo")
}
else{
    console.log("El padre esta ocupado");
}

//ACTIVIDAD 14

let miNumero = "17";

let edad = Number(miNumero);
console.log( edad );

if( isNaN(edad)){
    console.log("No es mi numero");
}
else{
    if(edad >=18){
        console.log("Puede votar");
    }
    else{
        console.log("Muy joven para votar");
    }
}
if (isNaN(edad)){
    console.log("No es mi numero");
}
else{
    let resultado = ( edad >= 18)?"Puede votar":"Muy joven para votar";
    console.log(resultado);
}

//ACTIVIDAD 15

let numero = 2;

if( numero == 1){
    console .log("Numero uno");
}
else if( numero == 2){
    console.log("Numero dos");
}
else if( numero == 3){
    console.log("Numero tres");
}
else if(numero == 4){
    console.log("Numero cuatro");
}
else{
    console.log("Numero desconocido");
}

//ACTIVIDAD 16

let numero = 1;
let numeroTexto = 'Valor desconocido';

switch( numero ){
    case 1:
        numeroTexto = 'Numero uno';
        break;
    case 2:
        numeroTexto = 'Numero dos';
        break;
    case 3:
        numeroTexto = 'Numero tres';
        break;
    case 4:
        numeroTexto = 'Numero cuatro';
        break;
    default:
        numeroTexto = 'Caso no encontrado';
}

console.log(numeroTexto);

//ACTIVIDAD 17

let contador = 0;

while( contador < 3){
    console.log(contador);
    contador++;
}
console.log("Fin ciclo while");

//ACTIVIDAD 18

for(let contador = 0;contador < 3; contador++){
    console.log(contador);
}
console.log("Fin ciclo for");

//ACTIVIDAD 19

const autos = ['BMW','Mercedes Benz','Volvo'];
console.log(autos);

//ACTIVIDAD 20

const autos = ['BMW','Mercedes Benz','Volvo'];
console.log(autos);

console.log(autos[0]);
console.log(autos[2]);

for(let i = 0; i < autos.length; i++){
    console.log(i+' : '+ autos[i]);
}

//ACTIVIDAD 21

const autos = ['BMW','Mercedes Benz','Volvo'];
console.log(autos);

console.log(autos[0]);
console.log(autos[2]);

for(let i = 0; i < autos.length; i++){
    console.log(i+' : '+ autos[i]);
}

autos[1] = 'MercedezBenz';
console.log(autos[1]);

autos.push('Audi');
console.log(autos);

//ACTIVIDAD 22

const autos = ['BMW','Mercedes Benz','Volvo'];
console.log(autos);

console.log(autos[0]);
console.log(autos[2]);

for(let i = 0; i < autos.length; i++){
    console.log(i+' : '+ autos[i]);
}

autos[1] = 'MercedezBenz';
console.log(autos[1]);

autos.push('Audi');
console.log(autos);

console.log(autos.length);
autos[autos.length] = 'Cadillac';

console.log(autos);

autos[6]='Porshe';
console.log(autos);

//ACTIVIDAD 23

const autos = ['BMW','Mercedes Benz','Volvo'];
console.log(autos);

console.log(autos[0]);
console.log(autos[2]);

for(let i = 0; i < autos.length; i++){
    console.log(i+' : '+ autos[i]);
}

autos[1] = 'MercedezBenz';
console.log(autos[1]);

autos.push('Audi');
console.log(autos);

console.log(autos.length);
autos[autos.length] = 'Cadillac';

console.log(autos);

autos[6]='Porshe';
console.log(autos);

console.log(typeof autos);

console.log(Array.isArray(autos));

console.log(autos instanceof Array);

//ACTIVIDAD 24

miFuction(4, 2);

function miFuction(a, b){
    console.log("Suma: "+ ( a+b));
}

miFuction(2, 3);