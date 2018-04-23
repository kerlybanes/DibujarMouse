//alert("a mover el mouse");
document.addEventListener("mousemove", moverMouse);//captura los movimientos del mouse
document.addEventListener("mousedown", empezarMouse);//captura el evento cuando se presiona clic izquierdo o derecho del mouse
document.addEventListener("mouseup", detenerMouse);//captura el evento cuando se suelta el clic

var cuadrito=document.getElementById("mousito");
var papel = cuadrito.getContext("2d");
var x, y;
var bandera = 0;
var color = "pink"

function moverMouse(evento)
{
	//console.log("se movió el mouse");
	//console.log(evento);//muestra por consola de depuración la variación de los eventos del mouse
	if (bandera == 1)
	{
		dibujarLinea(color, x, y, evento.offsetX, evento.offsetY, papel);
		x = evento.offsetX;
		y = evento.offsetY;
	}
}

function empezarMouse(evento)
{
	//console.log("empezó el mouse");
	//console.log(evento);//muestra por consola de depuración el evento cuando se hace clic izquierdo o derecho
	x = evento.offsetX;
	y = evento.offsetY;
	bandera = 1;//para saber si se ha hecho clic con en mouse
}

function detenerMouse(evento)
{
	//console.log("terminó el mouse");
	//console.log(evento);//muestra por consola de depuración el evento cuando se suelta el mouse
	x = evento.offsetX;
	y = evento.offsetY;
	bandera = 0;//para saber si se ha soltado el clic del mouse
}

//SELECCIONAR COLOR
var botonAzul = document.getElementById("btBlue");//getElementById - obtener un elemento a partir de su ID
botonAzul.addEventListener("click", colorAzul);//addEventListener - escuchador de eventos
function colorAzul()
{
	color = "blue"
}

var botonVerde = document.getElementById("btGreen");//getElementById - obtener un elemento a partir de su ID
botonVerde.addEventListener("click", colorVerde);//addEventListener - escuchador de eventos
function colorVerde()
{
	color = "green"
}

var botonRojo = document.getElementById("btRed");//getElementById - obtener un elemento a partir de su ID
botonRojo.addEventListener("click", colorRojo);//addEventListener - escuchador de eventos
function colorRojo()
{
	color = "red"
}

var botonRosado = document.getElementById("btPink");//getElementById - obtener un elemento a partir de su ID
botonRosado.addEventListener("click", colorRosado);//addEventListener - escuchador de eventos
function colorRosado()
{
	color = "pink"
}

var botonCafe = document.getElementById("btBrown");//getElementById - obtener un elemento a partir de su ID
botonCafe.addEventListener("click", colorCafe);//addEventListener - escuchador de eventos
function colorCafe()
{
	color = "brown"
}

var botonLimpiar = document.getElementById("btLimpiar");//getElementById - obtener un elemento a partir de su ID
botonLimpiar.addEventListener("click", limpiaLienzo);//addEventListener - escuchador de eventos
function limpiaLienzo()
{
	cuadrito.width = cuadrito.width;
}

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo)
{
	lienzo.beginPath();//beginPath - iniciar la ruta
	lienzo.strokeStyle = color;//strokeStyle - atributo para asignar color de linea
	lienzo.lineWidth = 3;//lineWidth - cambiar ancho línea pixeles
	lienzo.moveTo(xinicial, yinicial);//moveTo - punto de inicio
	lienzo.lineTo(xfinal, yfinal);//lineTo - punto final
	lienzo.stroke();//stroke - acción dibujar la línea
	lienzo.closePath();//closePath - cerramos la ruta
};
