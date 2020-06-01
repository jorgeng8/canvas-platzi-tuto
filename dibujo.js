var boton=document.getElementById("botoncito");
var texto=document.getElementById("texto_lineas");
var color=document.getElementById("colores");

boton.addEventListener("click",dibujoPorClick); // añadir un escuchador de eventos, dan 2 parametros, evento "click ,"

function dibujoPorClick(){
    lienzo.clearRect(0,0,300,300);//limipar lienzo reiniciar lienzo
    var xxx=parseInt(texto.value);//para obtener el valor de un elemento es con .value, perseInt convierte de texto a un numero
    var elcolor=color.value;
    for (a=0;a<xxx;a++){
        x=a*(d.width/xxx);// d.with=300 tamaño del canvas dividido entre la cantidad de lineas es igualal espacio entre lineas
        dibujarlinea(elcolor,0,x,x,300);
        dibujarlinea(elcolor,x,0,300,x);
        dibujarlinea(elcolor,0,300-x,x,0);
        dibujarlinea(elcolor,x,300,300,300-x);
    }
    //var j=texto.value;
    //alert("nome toques"+j);
    //alert("nome toques"+ texto.value); tambien se puede mas directo
}// las variables que estan dentro de las funciones solo existen dentro de estas cuando salen se vuelven globales

var d= document.getElementById("dibujito");//obtener elemento por su id del documento
var lienzo=d.getContext("2d"); //getContext es una funcion del objeto canvas, 2b metodo del objeto canvas
//console.log(lienzo);

lienzo.beginPath(); //comenzamos a dibujar un camino, hay funciones que no tienen parametros
lienzo.strokeStyle="blue";
lienzo.moveTo(50,10);//metodo o funcion del canvas para mover el lapiz adonde va arrancar la linea, hay funciones con muchos para metros
lienzo.lineTo(250,2); // es la funcion de trazar una linea
lienzo.stroke(); //stroke dibuja la linea cverramos la linea
lienzo.closePath(); // terminamos de dibujar
// para iniciar en un punto fresco sdimpre debe iniciar y terminar un camino
// se puede gaurar bloques de codigos enteros en funciones

lienzo.beginPath();
lienzo.strokeStyle="red";
lienzo.moveTo(180,100);//metodo o funcion del canvas para mover el lapiz adonde va arrancar la linea, hay funciones con muchos para metros
lienzo.lineTo(200,200); // es la funcion de trazar una linea
lienzo.stroke(); //stroke dibuja la linea cverramos la linea
lienzo.closePath(); //diferencia entre metodo y funcion

//el espacio inial de la linea de codigo es indesacion es una forma facil de saber si algo pertenece a un bloque de codigo
//cuando no tiene comillas es una variable
// lo que hace javascript es leer odo el codigo y guardar la funcion de la memoria y luego poner el codigo que esta fuera de la funcion
dibujarlinea("pink",10,300,220,10);
dibujarlinea("green",300,10,10,220);

function dibujarlinea(color, xinicial, yinicial, xfinal,yfinal){   //funcion que sirve para no repetir y mas facil de corregir
    lienzo.beginPath();
    lienzo.strokeStyle=color;
    lienzo.moveTo(xinicial,yinicial);
    lienzo.lineTo(xfinal,yfinal); 
    lienzo.stroke(); 
    lienzo.closePath();
}
//Cuando escribes el mismo código muchas veces, es una buena idea mejor usar una función
//Los parámetros de una función, son variables dentro de la función y solo funcionan dentro de ella.
//una clase es un objeto con metodos y funciones y propuiedDES
//funcion que devuelve un valor
//metodo es un procemiento designado a alterrar valores dentro del objeto propio o especifico
var a,x;

//el for internamente una 3 lineas de codigo por eso el ;
for (a=0;a<30;a++){// raro no pasa en ningun otro lugar en javascript lo parametros no se separan con coma , sino con punto y coma ;
    x=a*10;
    dibujarlinea("green",0,x,x,300);
    dibujarlinea("red",x,0,300,x);
    dibujarlinea("blue",0,300-x,x,0);
    dibujarlinea("pink",x,300,300,300-x);
    //console.log(x);// mostrar su aumento en la consola
}
var colorcito="#FAA"
dibujarlinea(colorcito,1,1,1,299);// si se pone 0,0,0,300 no se ve la linea por el antialasing ula linea se va ala mitad por un lado y por el otro
dibujarlinea(colorcito,1,299,299,299);//dibula nia recta en los bordes

var lineas=30;
var l=0;
var yi,xf;
while (l<lineas){
    yi=10*l;
    xf=10*(l+1);
    dibujarlinea("pink",0,yi,xf,300);
    l=l+2;//anter de que se termine el while se suman 2
    //l++; tambien funciona pero solo suma 1
}

var numero=prompt("cual tabla de multiplicar?");//la tabla de multiplicar!!!!
document.write("<strong> La tabla de multiplicar del "+numero+"</strong>");
for (z=1;z<10;z++){
    var z2=z*numero;
    document.write("<li><strong>"+numero+"x"+z+"="+z2+"</strong></li>");
}


var paki = {
    nombre: "Pakiman",
    ataque: 101
};
paki.ataque = paki.ataque * 2;
  console.log(paki.ataque);
