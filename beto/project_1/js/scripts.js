function init() {


// FUNCIONES
	//Definir funcion
	function suma_y_muestra(numero1, numero2) {
		resultado = numero1 + numero2;
		console.log("El resultado es " + resultado);
	}
	suma_y_muestra(5,8);

	//en un argumento que recibe una funcion se le pone por convención cb (callback)

	// Definición de la función
	function calculaPrecioTotal(precio) {
		var impuestos = 1.16;
		var gastosEnvio = 10;
		var precioTotal = ( precio * impuestos ) + gastosEnvio;
		return precioTotal;// este siempre va al final de la funcion
		//console.log(precioTotal);

	}
	// Llamada a la función


//FOR / CONTINUE

	example_bc = function() {
		for (var i = 1; i <= 10; i++) {
			console.log("-->" , i);
			if(i === 5){
				break;//detiene la ejecucion del for en este caso en el 5
			}
		}
	}

	example_bc2 = function() {
		for (var i = 1; i <= 10; i++) {
			if(i === 5){
				continue;//se salta la ejecucion del 5
			}
			console.log("-->" , i);
		}
	}

//ARBOL DE NODOS

	example_getElement = function() {
		var parrafos = document.getElementsByTagName("p");
		for (i = 0; i < parrafos.length; i++) {
			console.log(parrafos[i]);
		};
	}

	example_createElement = function() {
		parrafo = document.createElement("p");//creo un elemento html

		contenido = document.createTextNode("Este es un parrafo");//creo texto que estar dentro del p

		parrafo.appendChild(contenido);// con appendChild añado texto en el p

		//document.body.appendChild(parrafo);

		//buscar y capturar contenedor
		main = document.getElementsByClassName("main")[0];
		main.appendChild(parrafo);

		console.log(parrafo);	
	}

	example_removeChild = function() {
		parrafo2 = document.getElementById("p2");
		parrafo2.parentNode.removeChild(parrafo2); //subo una jerarquia para borrar el elemento
	}

	muestraMensaje = function() {
		alert("hola soy el mensaje");
	}

	//document.getElementById("btn").onclick = muestraMensaje;
	mi_boton = document.getElementById("btn");
	mi_boton.onclick = muestraMensaje;

	//recordando uso de argumentos en la funcion
	funcionArgumentos = function(a,b,c) {
		console.log("Primer argumento 'a' =", a);
		console.log("Primer argumento 'b' =", b);
		console.log("Primer argumento 'c' =", c);
	}

}
window.onload = init;



