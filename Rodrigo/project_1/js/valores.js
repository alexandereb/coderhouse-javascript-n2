
function init(){

"use strict";


var capturarDatos = (function(){
// Capturar nombre input
  var name = document.getElementById('nombre');
  name.addEventListener("change",function(){
    console.log(this.value);
    return this.value;
  })
  // Capturar radio input

  // var tipo = document.getElementById('TipoCliente');
  // tipo.addEventListener("change",function(e){
  //   if(e.target.checked){
  //     console.log(tipo.value);
  //   }
  // })

// Capturar Select input
  var select = document.getElementById('select');
  select.addEventListener("change",function(){
    console.log(this.value);
    return this.value;
  })

  // Capturar cantidad input
    var cantidad = document.getElementById('cantidad');
    cantidad.addEventListener("change",function(){
      console.log(this.value);
      return this.value;
    })

})()

var boton = document.getElementById('boton');
boton.addEventListener("click", capturarDatos);

var agregarForm = (function(){
var formulario = document.getElementById('wrapperCompra');



})()

}

window.onload = init;
