let nombre = document.querySelector('#userName')
let boton = document.querySelector('#boton')
let section2 = document.querySelector('.container2')
let lista = document.createElement('ul')

lista.style.display = 'grid'
lista.style.gridTemplateColumns = '1fr 1fr'

function guardarNombre() {
    if (nombre.value != '') {
        section2.appendChild(lista)
        let item = document.createElement('li')
        let botonEliminar = document.createElement('button')
        botonEliminar.textContent = 'Eliminar'
        item.innerHTML = nombre.value
        item.style.margin = '0.2rem'
        lista.appendChild(item)
        lista.appendChild(botonEliminar)
        nombre.value = ''
    } else {
        console.log('pendejo')
    }
}

