//Versión 0.0.1
//Diseñar un formulario que permita ingresar un texto y un botón para "twittear".
//Agregar un evento de click al botón o de submit al formulario.
//En el evento, obtener el texto.
//Agregar el texto al HTML.

var text=document.getElementById('text');
var container=document.getElementById('container');
var button=document.getElementById('button');
var counter=document.getElementsByClassName('counter')[0];

button.addEventListener('click',function(event) {
  var box=document.createElement('div');
  var content=document.createElement('p');
  content.textContent=text.value;

  //Asignamos clases a las variables para luego poder darle formato en el CSS.
  box.className = 'boxStyle';
  content.className = 'letterStyle';

  //Para mostrar el tweet creamos un ciclo if, en el cual si el no hay texto en el formulario,
  //se muestra un mensaje, si el tweet contiene texto, se muestra un tweet.
  if (text.value == false) {
    alert('Por favor ingrese su Tweet');
  }
  else {
    box.appendChild(content);
    container.appendChild(box);
    }
});

//Versión 0.0.2
//No ingresar texto vacío (deshabilitar el botón de "twittear").
//Contar la cantidad de caracteres de forma regresiva.


//Usamos el evento keyup ya que está definido para ser usado con elementos de formulario.
text.addEventListener('keyup', function() {
  var tweetContent = text.value;
  if ( tweetContent== '') {
    button.className = 'initial';
  }else {
    button.className = 'buttonChange';
  }

  //Agregamos un contador que sea regresivo
  var tweetLetters = text.value.length;
  var counterRegressive = 140 - tweetLetters;
  counter.textContent = counterRegressive;
});

//Versión 0.0.3
//Si pasa los 140 caracteres, deshabilitar el botón.
//Si pasa los 120 caracteres, mostrar el contador con OTRO color.
//Si pasa los 130 caracteres, mostrar el contador con OTRO color.
//Si pasa los 140 caracteres, mostrar el contador en negativo.

//Creamos un ciclo if en el cual separamos por colores.
text.addEventListener('keyup', function() {
  var tweetLetters = text.value.length;
  if (tweetLetters >= 0 && tweetLetters <= 120) {
  counter.className = 'initial';
} else if(tweetLetters = 121 && tweetLetters <= 130){
  counter.className = 'yellow';
} else if(tweetLetters = 131 && tweetLetters <= 140){
  counter.className = 'cherry';
}
}) ;

//Creamos una función con la que si pasa de los 140 caracteres se deshabilita el botón.
text.addEventListener('keyup', function() {
  var tweetLetters = text.value.length;
  if (tweetLetters > 140) {
    button.disabled = true;
  }else {
    button.disabled = false;
  }
});