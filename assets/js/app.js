//Variables Globales:

//Input Añadir lista
var inputList = document.getElementsByClassName('listinput')[0];
//Div contenedor
var addListDiv = inputList.parentNode;

//Función click al añadir
inputList.addEventListener('click', function() {
//Añadiendo la clase al div
addListDiv.classList.add('addlistbtns');
//Removiendo clase inactiva del input
inputList.classList.remove('listinput');
//Agregando clase al input activo
inputList.classList.add('addlistinput');

//Creando botón verde Guardar
var saveBtn = document.createElement('button');
//Añadiendo Clase al Botón
saveBtn.classList.add('savebtn');
//Creando el texto del botón guardar
var saveBtnText = document.createTextNode('Guardar');  
//Añadiendo texto al botón
saveBtn.appendChild(saveBtnText);
//Añadiendo el botón al div contenedor
addListDiv.appendChild(saveBtn);

//Creando botón "x"
var exitBtn = document.createElement('button');
//Añadiendo clase al botón "x"
exitBtn.classList.add('exitbtn');
//Añadiendo ícono al botón "x"
var exitBtnText = document.createElement('i');
exitBtnText.classList.add('fa', 'fa-times');
//exitBtn.innerHTML = '<i class="fa fa-times" aria-hidden="true"></i>';
//Añadiendo ícono al botón "x"
exitBtn.appendChild(exitBtnText);
//Añadiendo botón "x" al div contenedor
addListDiv.appendChild(exitBtn);

}); 