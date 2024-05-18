var productos = document.querySelectorAll('.img');
var imagenAmpliada = document.querySelector('.image-selected');

productos.forEach(function(producto) {
  producto.addEventListener('click', function() {
    var nuevaUrl = this.getAttribute('data-image-selected');
    imagenAmpliada.setAttribute('src', nuevaUrl);
  });
});

// Ejemplo 2 Cambiar dinámicamente el color de fondo al hacer clic en un botón
var miDiv = document.getElementById('container');
var cambiarColorBtn = document.getElementById('colorBtn');

colorBtn.addEventListener('click', function() {
  container.setAttribute('style', 'width: 200px; height: 200px; background-color: #FF0000;');
});

// Ejemplo 3 Lista de Tareas

// Obtener referencias a elementos del DOM
var taskInput = document.getElementById('taskInput');
var addTaskBtn = document.getElementById('addTaskBtn');
var taskList = document.getElementById('taskList');

// Función para agregar una nueva tarea
function addTask() {
  var taskText = taskInput.value;
  if (taskText.trim() !== '') {
    var newTask = document.createElement('li');
    newTask.textContent = taskText;
    
    // Agregar evento para marcar como completada al hacer clic
    newTask.addEventListener('click', function() {
      if (!newTask.classList.contains('completed')) {
        newTask.classList.add('completed');
      } else {
        newTask.classList.remove('completed');
      }
    });
    
    // Agregar botón para eliminar la tarea
    var deleteButton = document.createElement('button');
    deleteButton.textContent = 'Eliminar';
    deleteButton.addEventListener('click', function() {
      newTask.remove();
    });
    
    newTask.appendChild(deleteButton);
    taskList.appendChild(newTask);
    
    // Limpiar el campo de entrada
    taskInput.value = '';
  }
}

// Agregar evento al botón para llamar a la función addTask
addTaskBtn.addEventListener('click', addTask);