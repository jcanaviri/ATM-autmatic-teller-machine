var imagenes = [];
imagenes["10"] = "images/10.jpg";
imagenes["20"] = "images/20.jpg";
imagenes["50"] = "images/50.jpg";
imagenes["100"] = "images/100.jpg";

var caja = [];
var entregado = [];
caja.push(new Billete(100, 5, imagenes[0]));
caja.push(new Billete(50, 3, imagenes[1]));
caja.push(new Billete(20, 2, imagenes[2]));
caja.push(new Billete(10, 2, imagenes[3]));

var div = 0;
var papeles = 0;
var resultado = document.getElementById("resultado");

var b = document.getElementById("extraer");
b.addEventListener("click", entregarDinero);
document.getElementById('resetear').addEventListener('click', resetear);
