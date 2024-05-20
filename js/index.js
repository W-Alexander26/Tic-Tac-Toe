let listaHTML = document.querySelectorAll('.casillas');
console.log(listaHTML);



let casillas = [];
for (let index = 0; index < listaHTML.length; index++) {
  casillas.push(listaHTML[index]);

  
  
}

console.log(casillas);
//Llama a todos los div's utilizando una misma "id". 

let botonReinicio = document.getElementById('btn');
console.log(botonReinicio);
//Llama el botón que va a reinicir el juego utilizando una función.

let informaciónJuego = document.getElementById('informaciónJuego');
console.log(informaciónJuego);
//LLama el espacio que va a mostrar al usuario lo información del juego, durante el juego.

let condicionesParaGanar = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6],
];
console.log(condicionesParaGanar);
//Creamos una variable que muestre todas las formas de ganar utilizando el indice de las posiciones de los div´s.

let jugador = "X"
console.log(jugador);
//Creamos una variable que tiene de valor un "string".


let pc = Math.floor(Math.random()*9);
console.log(pc);
//Creamos una variable que tiene la capacidad de moverse por todos los "div´s" de manera aleatoria.

//Invocamos a la función.
comenzarJuego();

//creamos a la función con nombre a lo que vamos a hacer.
function comenzarJuego(){
  
  //Recorremos todos los contenedores usando un "for"(iterador).
  for (let index = 0; index < casillas.length; index++) {

    //declaramos un evento que queda a la escucha de un click.
    casillas[index].addEventListener('click', function () {

      //Una vez el click suceda entonces la casilla seleccionada será asignada a un nuevo valor siendo este "X" (valor de jugador)
    casillas[index].textContent = jugador;

     //Creamos una validación diciendo que mientras jugador tenga un valor estricto de "X"(cadena de texto).
    if ( jugador == "X" ) {
       let espaciosVacíos=casillas.map((espaciosDisponible)=>espaciosDisponible == " ");
      console.log(espaciosVacíos);


      
      //Entonces creamos otra variable que tenga la capacidad de moverse de manera aleatoria dentro de los "div´s".
       let pc2=Math.floor(Math.random()*9);
      //Entre la 55 y la 58 tengo que validar el time set up y sobre que no me sobreescriba.
      


      //Ahora con la función para ejecutar una función dentro de un intervalo de tiempo, decimos que "pc2" va a moverse al hacer click y después de 1,5 seg.  
      setTimeout(function(){
        casillas[pc2].innerHTML="O";
        console.log(casillas[pc2]);
        informaciónJuego.textContent = "Turno jugador O";
      }, 1500);

      
      //Al mismo tiempo mostramos en pantalla el turno del jugador.
      informaciónJuego.textContent = "Turno jugador" + " " + jugador;

      console.log(informaciónJuego);
      console.log(jugador);

      //Sino. 
    } else  {
      

     

    }
  
    }); 
  } 
}

//Creamos una función que devuelva los espacios del tablero a vacio. 
//Siendo ejecutada cuando se presiona el botón "reiniciar".
function reiniciar() {

  //Nos ayudamos con un "for" para que recorra todos los contenedores llamados con un mismo "id".
  for (let index = 0; index < casillas.length; index++) {

    //Y asignamos un nuevo valor a las posiciones de los contenedores siendo iguales a "vacio".
    casillas[index].textContent=" ";

    informaciónJuego.textContent= "Turno jugador" + " " +  jugador;
    //Así mismo muestra al Usuario información de la situación.

  }
  
}




