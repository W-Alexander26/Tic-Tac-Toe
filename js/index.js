let listaHTML = document.querySelectorAll('.casillas');

let casillas = [];
for (let index = 0; index < listaHTML.length; index++) {
  casillas.push(listaHTML[index]);
}
console.log(casillas);
//Llama a todos los div's utilizando una misma "clase". 

let botonReinicio = document.getElementById('btn');
//Llama el botón que va a reinicir el juego utilizando una función.

let informaciónJuego = document.getElementById('informaciónJuego');
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
//Creamos una variable que tiene de valor un "string".

let vacio=[];
//Creamos una variable que contiene un array vacio, al cuál vamos a usar para que guarde posiciones.

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

     validaGanar()

     function validaGanar() {
      
      //for (let index2 = 0; index2 < condicionesParaGanar.length; index2++) {

        if (casillas[0].textContent === "X" && casillas[1].textContent === "X" && casillas[2].textContent === "X"
        || casillas[3].textContent === "X" && casillas[4].textContent === "X" && casillas[5].textContent === "X"
        || casillas[6].textContent === "X" && casillas[7].textContent === "X" && casillas[8].textContent === "X"
        || casillas[0].textContent === "X" && casillas[3].textContent === "X" && casillas[6].textContent === "X"
        || casillas[0].textContent === "X" && casillas[3].textContent === "X" && casillas[6].textContent === "X"
        || casillas[1].textContent === "X" && casillas[4].textContent === "X" && casillas[7].textContent === "X" 
        || casillas[2].textContent === "X" && casillas[5].textContent === "X" && casillas[8].textContent === "X"
        || casillas[0].textContent === "X" && casillas[4].textContent === "X" && casillas[8].textContent === "X"
        || casillas[2].textContent === "X" && casillas[4].textContent === "X" && casillas[6].textContent === "X") {

          return true;
          
        } else if (casillas[0].textContent === "O" && casillas[1].textContent === "O" && casillas[2].textContent === "O"
        || casillas[3].textContent === "O" && casillas[4].textContent === "O" && casillas[5].textContent === "O"
        || casillas[6].textContent === "O" && casillas[7].textContent === "O" && casillas[8].textContent === "O"
        || casillas[0].textContent === "O" && casillas[3].textContent === "O" && casillas[6].textContent === "O"
        || casillas[0].textContent === "O" && casillas[3].textContent === "O" && casillas[6].textContent === "O"
        || casillas[1].textContent === "O" && casillas[4].textContent === "O" && casillas[7].textContent === "O" 
        || casillas[2].textContent === "O" && casillas[5].textContent === "O" && casillas[8].textContent === "O"
        || casillas[0].textContent === "O" && casillas[4].textContent === "O" && casillas[8].textContent === "O"
        || casillas[2].textContent === "O" && casillas[4].textContent === "O" && casillas[6].textContent === "O") {

          return false;
          
        } {
        }
      //}
     }

     if (validaGanar() == true) {
      informaciónJuego2.innerHTML= "Gana jugador X"// <------estudiar como llamar una etiqueta de manera directa sin declararla.

      informaciónJuego.style.display="none"
      
     } else if (validaGanar() == false) {

      informaciónJuego2.innerHTML= "Gana jugador O"// <------estudiar como llamar una etiqueta de manera directa sin declararla.

      informaciónJuego.style.display="none"
      
     } {
     
      
     }

     /*if (validaGanar()) {
    
      informaciónJuego2.innerHTML= "Gana jugador X"// <------estudiar como llamar una etiqueta de manera directa sin declararla.

      informaciónJuego.style.display="none"
     }*/
     
      
      //Creamos una validación diciendo que mientras jugador tenga un valor estricto de "X"(cadena de texto).
      if ( jugador == "X" ) {

        //Va a mostrar en pantalla información del jugador qué está jugando. 
        informaciónJuego.innerHTML = "Turno jugador O";
        
        //el array vacio va a ser igual que el array que tiene todas las posiciones y va a mapear a todo el array "casillas".  
        vacio = casillas.map(function (elemento) {

          //returna el valor de esa funcion siendo esté estrictamente igual a vacios.
          return elemento.textContent == "" ;

        });

        //Declaramos un nuevo array vacio.
        let espaciosDisponibles =[];

        //Recorremos el array vacio que creamos al inicio.
        for (let index = 0; index < vacio.length; index++) {
          
          //Y decimos

          if (vacio[index] == true ) {

            espaciosDisponibles.push(index);
          }
          
        }

        if (espaciosDisponibles.length>0) {
          
          //Ahora con la función para ejecutar una función dentro de un intervalo de tiempo, decimos que "pc2" va a moverse al hacer click y después de 1 seg.  
          setTimeout(function(){
    
            let pc2 = espaciosDisponibles[Math.floor(Math.random()*espaciosDisponibles.length)];
    
           casillas[pc2].textContent = "O";
      
           //Al mismo tiempo mostramos en pantalla el turno del jugador.
            informaciónJuego.innerHTML = "Turno jugador" + " " + jugador;
     
          }, 1000);
        }
 
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
    casillas[index].textContent = "";
    
    informaciónJuego2.innerHTML = "";

    informaciónJuego.innerHTML= "Turno jugador" + " " +  jugador;
    //Así mismo muestra al Usuario información de la situación.

  }
}






