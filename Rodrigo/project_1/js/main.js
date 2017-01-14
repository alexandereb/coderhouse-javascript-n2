//function init{

"use strict";

var capturarDatos = function(){

// Capturar nombre input
var name = document.getElementById("nombre").value;
console.log(name);
return name;

// Capturar valores radio buttons

var alumno = document.getElementById('alumno').checked;
if (alumno === true){
  console.log(alumno.value);
}




// Capturar valores Select Compra


// var select = document.getElementById("select");
// var seleccion = select.options[select.selectedIndex].value;
// console.log(nombre);
// return nombre;

  var select= document.getElementsByName("select");
  select.addEventListener("change",function(){
  console.log(select.value);
        });


// Capturar valores Cantidad input


        //-----------------   CODIGO NO FUNCIONA

// var cantidad = document.getElementById("cantidad").value;
// console.log(cantidad);
// return cantidad;


//IMPRIMIR VALORES
console.log(nombre);
console.log(seleccion);
}


var boton = document.getElementById('boton');
boton.addEventListener("submit", capturarDatos);


/*
// Guardar datos cliente dentro de un objeto?
var nuevoCliente = {};
nuevoCliente.nombre = nombre;
console.log(nuevoCliente);
*/


/*
}

window.onload=init;
*/
