
cliente = {
	nombre: "",
	tipo: ["alumno", "profesor", "apoderado", "otro"],
	productos:[
		{nombre: "hojas", precio: 15, tipo: "producto"},
		{nombre: "goma", precio: 100, tipo: "producto"},
		{nombre: "tijeras", precio: 250, tipo: "producto"},
		{nombre: "pegamento", precio: 300, tipo: "producto"},
		{nombre: "lapiz", precio: 150, tipo: "producto"},
		{nombre: "cuaderno", precio: 800, tipo: "producto"},
		{nombre: "matematicas", precio: 4000, tipo: "libro"},
		{nombre: "lenguaje", precio: 3500, tipo: "libro"},
		{nombre: "ciencias", precio: 3000, tipo: "libro"},
		{nombre: "historia", precio: 5000, tipo: "libro"}
	],
	servicios:[
		{nombre: "fotocopias", precio: 30, tipo: "servicio"},
		{nombre: "scanner", precio: 10, tipo: "servicio"},
		{nombre: "impresion_color", precio: 200, tipo: "servicio"},
		{nombre: "impresion_bn", precio: 100, tipo: "servicio"},
		{nombre: "plotter", precio: 4500, tipo: "servicio"},
	],
};

/*nuevocliente = [
	{elemento: "fotocopias", cantidad: 50},
	{elemento: "impresiones_color", cantidad: 30},
	{elemento: "lapiz", cantidad: 30},
	{elemento: "plotter", cantidad: 2},
	{elemento: "matematicas", cantidad: 2},
	{elemento: "historia", cantidad: 2}
]*/

//for(i in nuevocliente){

	function sumarProductos(producto,cantidad){

		if(nuevocliente[i].elemento === "fotocopias"){
			console.log("Soy fotocopia");
		}
		else{
			console.log("Soy otra cosa")
		}
	}//Sumar productos

	//var unproducto = sumarProductos(nuevocliente[i].elemento), nuevocliente[i].cantidad);

//}//For in

document.getElementById("calcular").onclick = function(){
	alert("hola");
};