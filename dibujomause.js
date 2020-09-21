var estado = 0;          // estado del click      
var colorLinea = "black";    // color a la linea
var grosorl = 2
var avnt= false
var adn = false

var area = document.getElementById('dibujo');
var papel = area.getContext("2d");

var colorRojo = document.getElementById("Brojo")
colorRojo.addEventListener("click", colorR)

var colorazul = document.getElementById("Bazul")
colorazul.addEventListener("click", colorA)

var colornegro = document.getElementById("Bnegro")
colornegro.addEventListener("click", colorN)

var borra = document.getElementById("Bblanco")
borra.addEventListener("click", borrador)

var avanico = document.getElementById("avan")
avanico.addEventListener("click", avanicof)

var Badn = document.getElementById("adn")
Badn.addEventListener("click", dna)

var x;                      // guardar coordenada en X
var y;                      // guardar coordenada en Y
document.addEventListener("mousedown",presionarMouse);  //cuando presionas click
document.addEventListener("mouseup",soltarMouse);       //cuando sueltas click
document.addEventListener("mousemove",dibujarMouse);    //cuando mueves el mouse

// dibujo del borde
dibujarLinea("red", 0, 0, 1200, 0, papel)
dibujarLinea("red", 1200, 0, 1200, 1200, papel)
dibujarLinea("red", 1200, 1200, 0, 1200, papel)
dibujarLinea("red", 0, 1200, 0, 0, papel)

function borrador(){
    colorLinea = "white"
    grosorl = 20
    avnt = false
}
function colorR(){
    colorLinea = "red"
    grosorl =2
}

function colorA(){
    colorLinea = "blue"
    grosorl =2
}

function colorN(){
    colorLinea = "black"
    grosorl =2
}

function avanicof(){
    if(avnt == true)
        {
            avnt=false
            
        }
     else {
         avnt=true
         adn= false
     }
}
function dna(){
    if(adn == true)
        {
            adn=false
            
        }
     else {
         avnt=false
         adn= true
     }
}
// Funcion para mousemove
function dibujarMouse(evento){
  if (estado == 1) {   // solo se dibujara si esta el click del mouse presionado
    dibujarLinea(colorLinea, x, y, evento.layerX, evento.layerY, papel);
  }
  if(avnt)
      {
        x=x
        y=y
      }
  else if(adn)
  {    x=x
       y = evento.layerY;
    
  }
   else{  
       x = evento.layerX; //si borras estas variables se crea un efecto avanico
       y = evento.layerY; //efecto dna
   }

    
}

// Funcion para mousedown
function presionarMouse(evento){
  estado = 1;         //click presionado  
  x = evento.layerX;
  y = evento.layerY;
}

// Funcion para mouseup
function soltarMouse(evento){
  estado = 0;         // click suelto
  x = evento.layerX;
  y = evento.layerY;
}
function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo){
  lienzo.beginPath();                  // Inicia el trazo
  lienzo.strokeStyle = color;          // Estilo de trazo (color)
  lienzo.lineWidth = grosorl;                // Ancho de la linea
  lienzo.moveTo(xinicial, yinicial);   // Donde comienza la linea
  lienzo.lineTo(xfinal, yfinal);       // Traza la linea (ubica punto final)
  lienzo.stroke();                     // Dibuja con el estio de trazo
  lienzo.closePath();                  // Cierra el dibujo
}