let listaHTML = document.querySelectorAll('.casillas');
//llamamos a todos los div´s con el selector "query".

let casillas = [];
//Creamos un arreglo vacio para introducir los nodos creados de "listaHTML"
//recorremos a la variable "listaHTML" con un for para permitirnos introducirlos en "casilla" (array).
for (let index = 0; index < listaHTML.length; index++) {
  casillas.push(listaHTML[index]);
}
//Llama a todos los div's utilizando una misma "clase". 

let botonReinicio = document.getElementById('btn');
//Llama el botón que va a reinicir el juego utilizando una función.

let informaciónJuego = document.getElementById('informaciónJuego');
//LLama el espacio que va a mostrar al usuario lo información del juego, durante el juego.

let informaciónJuego2 = document.getElementById('informaciónJuego2');

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
      casillas[index].innerHTML = jugador;

      //Al mismo tiempo ejecutamos diferentes funciones que validan los espacios para determinar un gane ó empate. 
      validaGanar()

      validaEmpates()

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
          
          //Y decimos que sí el array que contiene las posiciones vacias son verdaderas ( sí, (booleano)).
          if (vacio[index] == true ) {

            //entonces al array vacio se le van a agregar todas esas posiciones vacias disponibles.
            espaciosDisponibles.push(index);
          }
          
        }

        //Creamos otra condición diciendo que sí el tamaño del array "espaciosDisponibles" es mayor a "0".
        if (espaciosDisponibles.length>0) {
          
          //Ahora con la función para ejecutar una función dentro de un intervalo de tiempo, decimos que "pc2" va a moverse al hacer click y después de 1 seg.  
          setTimeout(function(){
            
            //Siendo entonces declarado "pc2" teniendo la capacidad para moverse de manera aleatoria en las opciones disponibles del array "espaciosDisponibles".
            let pc2 = espaciosDisponibles[Math.floor(Math.random()*espaciosDisponibles.length)];

            //Ahora decimos que el array "casillas" con la selección de "pc2", tendra una inserción de "O".
            casillas[pc2].innerHTML = "O";
            
            //Al mismo tiempo ejecutamos diferentes funciones que validan los espacios para determinar un gane ó un empate.
            validaGanar()
           
            validaEmpates()
     
           //Tambien mostramos en pantalla el turno del jugador.
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
    
    //También limpiamos el contenido de "información" para que se quede en blanco cada vez que se toca el botón.
    informaciónJuego2.innerHTML = "";
  }
}


//Declaramos la función que se encarga de validar los ganes.
function validaGanar() {

      //De manera manual decimos que si las casillas con la posición especificada contiene el string "X" entonces será un gane.
    if (casillas[0].textContent === "X" && casillas[1].textContent === "X" && casillas[2].textContent === "X"
    || casillas[3].textContent === "X" && casillas[4].textContent === "X" && casillas[5].textContent === "X"
    || casillas[6].textContent === "X" && casillas[7].textContent === "X" && casillas[8].textContent === "X"
    || casillas[0].textContent === "X" && casillas[3].textContent === "X" && casillas[6].textContent === "X"
    || casillas[0].textContent === "X" && casillas[3].textContent === "X" && casillas[6].textContent === "X"
    || casillas[1].textContent === "X" && casillas[4].textContent === "X" && casillas[7].textContent === "X" 
    || casillas[2].textContent === "X" && casillas[5].textContent === "X" && casillas[8].textContent === "X"
    || casillas[0].textContent === "X" && casillas[4].textContent === "X" && casillas[8].textContent === "X"
    || casillas[2].textContent === "X" && casillas[4].textContent === "X" && casillas[6].textContent === "X") {

      
      //Mostramos el anuncio de la victoria insertandolo en la variable responsable "informaciónJuego2".
      informaciónJuego2.innerHTML="HAZ GANADO JUGADOR X"
      alert('Juego Terminado')
      
      //retornamos el valor verdadero sí todo esto se cumple.
      return true
    } 
    //También junto con la condición de arriba y al mismo tiempo comparamos los espacios de casillas y si estos contienen al string "O".
    if (casillas[0].textContent === "O" && casillas[1].textContent === "O" && casillas[2].textContent === "O"
    || casillas[3].textContent === "O" && casillas[4].textContent === "O" && casillas[5].textContent === "O"
    || casillas[6].textContent === "O" && casillas[7].textContent === "O" && casillas[8].textContent === "O"
    || casillas[0].textContent === "O" && casillas[3].textContent === "O" && casillas[6].textContent === "O"
    || casillas[0].textContent === "O" && casillas[3].textContent === "O" && casillas[6].textContent === "O"
    || casillas[1].textContent === "O" && casillas[4].textContent === "O" && casillas[7].textContent === "O" 
    || casillas[2].textContent === "O" && casillas[5].textContent === "O" && casillas[8].textContent === "O"
    || casillas[0].textContent === "O" && casillas[4].textContent === "O" && casillas[8].textContent === "O"
    || casillas[2].textContent === "O" && casillas[4].textContent === "O" && casillas[6].textContent === "O") {
   
      
      //Mostramos el anuncio de la victoria insertandolo en la variable responsable "informaciónJuego2".
      informaciónJuego2.innerHTML="HAZ GANADO JUGADOR O"

      //retornamos el valor verdadero sí todo esto se cumple.
      return true
    }
  
} 

// Te debo el empate...
