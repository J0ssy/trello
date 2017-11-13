//Variables Globales:

//Input Añadir lista
var inputList = document.getElementsByClassName('listinput')[0];
//Div contenedor del Añadir lista
var addListDiv = inputList.parentNode;
//Div contenedor (main)
var mainDiv = addListDiv.parentNode;


//Función click al añadir
inputList.addEventListener('click', function() {
//Solamente si el div no tiene clase que ejecute el evento
if (addListDiv.className == '') {
	addListDiv.classList.add('addlistbtns'); //Añadiendo la clase al div
	//inputList.classList.remove('listinput'); //Removiendo clase inactiva del input
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
	//inputList.classList.add('listinput'); //Añadiendo clase inactiva del input
	})

	//Evento para generar una lista
	saveBtn.addEventListener('click', function(){
	var listName = document.getElementsByClassName('addlistinput')[0].value; //Valor ingresado al input
	//Para evitar campo vacío en el input
	if (listName.length !== 0) {
		console.log('hola 1')
		listName.value = ''; //limpiar el input
		console.log('hola 2');
		//addListDiv.classList.add('fltlft'); //Flotamos a la izquierda todo el div anterior
		var newListDiv = document.createElement('div'); //Generamos el nuevo div
		newListDiv.classList.add('addlistbtns', 'fltlft'); //Añadimos clase al nuevo div
		console.log('hola 3');
		var title = document.createElement('p'); //Creamos la etiqueta donde pondremos el título
		title.classList.add('title');
		var titleList = document.createTextNode(listName); //pasamos el valor añadido en el input
		title.appendChild(titleList);
		console.log('hola 4');
		var addCard = document.createElement('a');//Crear enlace para agregar tarjeta
		addCard.classList.add('addcard');
		var addcarText = document.createTextNode('Añadir una tarjeta...');
		addCard.appendChild(addcarText);
		newListDiv.appendChild(title);
		newListDiv.appendChild(addCard);
		mainDiv.appendChild(newListDiv);
		

		} 

	});

}); 

/*
ORDENANDO LAS FUNCIONES


//Variables Globales:

//Input Añadir lista
var inputList = document.querySelector('.listinput');
//Div contenedor
var addListDiv = inputList.parentNode;

function inputFocus(el) {
	el.addEventListener('focusin', function() {
		makeSaveListButton();
		makeDiscardListButton();
		el.classList.add('addlistinput');
		el.parentNode.classList.add('addlistbtns');
	})
	el.addEventListener('focusout', function() {
		el.classList.remove('addlistinput');
		el.parentNode.classList.remove('addlistbtns');
		removeElement('.savebtn');
		removeElement('.exitbtn');
	})
}

inputFocus(inputList);

function makeSaveListButton() {
	var saveBtn = document.createElement('button');
	saveBtn.classList.add('savebtn'); //Añadiendo Clase al Botón
	var saveBtnText = document.createTextNode('Guardar');  //Creando el texto del botón guardar
	saveBtn.appendChild(saveBtnText); //Añadiendo texto al botón
	addListDiv.appendChild(saveBtn); //Añadiendo el botón al div contenedor
}

function makeDiscardListButton() {
	var exitBtn = document.createElement('button');
	exitBtn.classList.add('exitbtn'); //Añadiendo clase al botón "x"
	var exitBtnText = document.createElement('i'); //Añadiendo ícono al botón "x"
	exitBtnText.classList.add('fa', 'fa-times');
	exitBtn.appendChild(exitBtnText); //Añadiendo ícono al botón "x"
	addListDiv.appendChild(exitBtn); //Añadiendo botón "x" al div contenedor
}

function removeElement(className) {
	var el = document.querySelector(className);
	el.parentNode.removeChild(el);
}


*/