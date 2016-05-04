# coderhouse-javascript-n2

_______________________________________________________________________________
## Proyecto 1
Administrador de librería, impresiones y fotocopias El Ilustrado.

Don Esteban es el dueño de una importante librería en pleno barrio universitario de Santiago. El flujo de clientes que requieren de sus servicios es muy elevado y cada día son más variados los servicios que le solicitan y que el ofrece.
Hasta el día de hoy el ofrece servicio de:
- Fotocopiado
- Scanner
- impresión a color
- impresión blanco y negro.
- Plotters
- Elementos de escritorio (hojas tamaño carta, gomas de borrar, tijeras, pegamento, lápiz, cuaderno)
- Libros de matemáticas, lenguaje, ciencias e historia.

Don Esteban cada día que pasa pierde mucho tiempo analizando los datos de compras y clientes que anota en un cuaderno. Es la única herramienta que él utiliza para mantener todo su stock al día y llevar un seguimiento del comportamiento de sus clientes.

En una meeting de startups e innovación tecnológica, don Esteban se da cuenta que los alumnos que salen de Coderhouse tienen todas las características técnicas necesarias para resolver problemas de la vida cotidiana por medio de las tecnologías web.

Don Esteban decide levantar sus requerimientos y solicitar un sistema de administración para desechar su antiguo cuaderno de notas.

Primera etapa del proyecto

Desarrollar un sistema por el cual se puedan ingresar los siguientes datos por medio de un formulario:
- Nombre de cliente.
- Tipo de cliente (alumno, profesor, apoderado, otro)
- Servicio o producto que solicita, pueden ser de 1 a n cantidad de productos y sus respectivos tipos.(se ingresa tipo y cantidad por cada producto o servicio)

La idea de Don Esteban es que con estos datos ingresados el sistema calcule y muestre por pantalla lo siguiente:

- Nombre del cliente
- Tipo de cliente
- Lista de productos separados por tipo, cantidad y su valor original sin impuesto ( total e individual de productos sin impuesto )
- Lista de servicios separados por tipo, cantidad y su valor original sin impuesto (total e individual de servicios sin impuesto).

Información adicional útil para el ejercicio:

- Fotocopias: 30 pesos, más de 15 el valor por unidad es de 20 pesos.
- Scanner: 10 pesos.
- impresión a color:  200 pesos, más de 10 unidades 150 pesos.
- impresión blanco y negro: 100 pesos, más de 10 unidades  50 pesos.
- Plotters: 4.500 pesos, más de 4 unidades 3.700 pesos.
- Elementos de escritorio:
  -hojas tamaño carta: 15 pesos, más de 10 unidades, 10 pesos.
- gomas de borrar: 100 pesos
- tijeras: 250 pesos
  pegamento: 300 pesos
lápiz: 150 pesos
cuaderno: 800 pesos
- Libros:
   - matemáticas: 4000 pesos.
   - lenguaje: 3500 pesos.
   - ciencias: 3000 pesos.
   - historia: 5000 pesos.

También cabe destacar que si el total de la compra sin impuestos es mayor o igual a 20.000 pesos, solo se aplica un 5% de impuesto. si es mayor a 30000 pesos la compra no tiene impuestos.
Si compra libros de historia y matemáticas se entrega de regalo un libro de ciencias. (por pantalla el item libro de ciencias debe salir costo cero)
cuando se muestran en pantalla los precios se debe colocar el signo "$" antes de la cifra.
Impuesto normal = 10% del total.



Compra 1:
Nombre cliente = "Esteban Alvarez";
tipo cliente = "profesor";
Compra =
50 fotocopias,
30 impresiones a color,
30 lápices,
2 plotters,
2 libros de matemáticas
2 libros de historia
