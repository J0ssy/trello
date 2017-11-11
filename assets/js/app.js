//Variables Globales:

//Input Añadir lista
var inputList = document.getElementsByClassName('listinput')[0];
//Div contenedor
var addListDiv = inputList.parentNode;


//Función click al añadir
inputList.addEventListener('click', function() {
//Solamente si el div no tiene clase que ejecute el evento
if (addListDiv.className == '') {
	addListDiv.classList.add('addlistbtns'); //Añadiendo la clase al div
	inputList.classList.remove('listinput'); //Removiendo clase inactiva del input
	inputList.classList.add('addlistinput'); //Agregando clase al input activo

	//Creando botón verde Guardar
	var saveBtn = document.createElement('button');
	saveBtn.classList.add('savebtn'); //Añadiendo Clase al Botón
	var saveBtnText = document.createTextNode('Guardar');  //Creando el texto del botón guardar
	saveBtn.appendChild(saveBtnText); //Añadiendo texto al botón
	addListDiv.appendChild(saveBtn); //Añadiendo el botón al div contenedor

	//Creando botón "x"
	var exitBtn = document.createElement('button');
	exitBtn.classList.add('exitbtn'); //Añadiendo clase al botón "x"
	var exitBtnText = document.createElement('i'); //Añadiendo ícono al botón "x"
	exitBtnText.classList.add('fa', 'fa-times');
	exitBtn.appendChild(exitBtnText); //Añadiendo ícono al botón "x"
	addListDiv.appendChild(exitBtn); //Añadiendo botón "x" al div contenedor
	} else {
	}

	//Evento cerrar del botón "x"
	exitBtn.addEventListener('click', function(){
	addListDiv.removeChild(exitBtn); //Eliminando botón "x"
	addListDiv.removeChild(saveBtn); //Eliminando botón verde Guardar
	addListDiv.classList.remove('addlistbtns'); //Removiendo clase del Div
	inputList.classList.remove('addlistinput'); //Removiendo Clase activa del input
	inputList.classList.add('listinput'); //Añadiendo clase inactiva del input
	})

	//Evento para generar una lista
	saveBtn.addEventListener('click', function(){

	})

}); 

