function init() {
  var
  var resultado, action, num1, num2;
  action = prompt("¿Qué desea hacer? (sumar, restar, multiplicar, dividir)");
  num1 = parseInt(prompt("primer número"));
  num2 = parseInt(prompt("segundo número"));
  if(action === "sumar") {
    resultado = num1 + num2;
    document.write(resultado);
  } else if (action === "restar") {
    resultado = num1 - num2;
    document.write(resultado);
  } else if(action === "multiplicar") {
    resultado = num1 * num2;
    document.write(resultado);
  } else if (action === "dividir") {
    resultado = num1 / num2;
    document.write(resultado);
  } else {
    document.write("Ups, algo salió mal... :(");
  }

}

  esPrimo = function() {

  }


  numerosPrimos = function() {
    var i, p, primo;
    for ( i = 4; i <= 100 ; i++) {
      primo = 0;
      for (p = 2; p < i ; p++) {
    	  if(i % p == 0) {
          primo = 1;
        }
        if( primo == 0 ) {
          document.write(i);
          document.write('<br>');
        }
      }
    }
  }


window.onload = init;
