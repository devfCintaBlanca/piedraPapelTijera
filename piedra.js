//Genera un número aleatorio entre un rango de enteros
function aleatorio(minimo, maximo)
{
    var numero = Math.floor( Math.random() * (maximo - minimo + 1) + minimo );
    alert (Math.floor((Math.random() * 2) + 0));
    return numero; /*random genera el numero aleatorio entre 0 y 1*/
}

var piedra = 0;
var papel = 1;
var tijera = 2;

var opciones = ["Piedra", "Papel", "Tijera"];

var opcionUsuario;
var opcionMaquina = aleatorio(0,2);

opcionUsuario = prompt("¿Qué eliges?\nPiedra: 0\nPapel: 1\nTijera: 2", 0);

alert("Elegiste " + opciones[opcionUsuario]);
alert("Javascript eligió " + opciones[opcionMaquina]);

if(opcionUsuario == piedra)
{
    if(opcionMaquina == piedra)
    {
        alert("Empate!");
    }
    else if(opcionMaquina == papel)
    {
        alert("Perdiste :( ");
    }
    else if(opcionMaquina == tijera)
    {
        alert("Ganaste!");
    }
}
else if(opcionUsuario == papel)
{
    if(opcionMaquina == piedra)
    {
        alert("Ganaste!");
    }
    else if(opcionMaquina == papel)
    {
        alert("Empate!");
    }
    else if(opcionMaquina == tijera)
    {
        alert("Perdiste!");
    }
}
else if(opcionUsuario == tijera && opcionMaquina == piedra)
{
   alert("Perdiste!");
}

else if(opcionUsuario == tijera && opcionMaquina == papel)
{
  alert("Ganaste!");
}
else if(opcionUsuario == tijera && opcionMaquina == tijera)
{
  alert("Empate!");
}

else
{
    alert("Pon algo real !!! :/  ");
}
