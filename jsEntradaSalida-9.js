/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{
var sueldo;
var valor
var resultado;

sueldo=document.getElementById("sueldo").value;
resultado=document.getElementById("resultado").value;

sueldo=parseInt(sueldo);
resultado=parseInt(resultado);
valor=parseInt(1.1);

resultado=sueldo*valor
alert(resultado)
	
}
