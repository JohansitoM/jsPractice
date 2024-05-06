// ╔════════════════════╗
//      Lista Nombres
// ╚════════════════════╝

let contenedorLista = document.querySelector('.lista-container')
let inputNombre = document.getElementById('nombre-usuario')
let btnListar = document.getElementById('btn-enviar')
let lista = document.getElementById('lista')

// Estilos
inputNombre.classList.add('input-nombre')
btnListar.classList.add('btn')
lista.classList.add('list')

btnListar.addEventListener('click', function() {
    // Obtiene el nombre
    let nombre = inputNombre.value 

    // Crea elemento lista
    let li = document.createElement('li')
    
    // pone el nombre en el item de la lista
    li.textContent = nombre

    // Agregar el item a la lista
    lista.appendChild(li)
    inputNombre.value = ''
})
