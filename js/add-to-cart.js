// Estilos de la pagina

let header = document.querySelector('.header')
let tarjetas = document.querySelectorAll('.card')
let productos = document.querySelector('.galeria-productos')

header.style.height = '100px'
header.style.display = 'flex'
header.style.justifyContent = 'space-around'
header.style.alignItems = 'center'

productos.style.display = 'flex'
productos.style.justifyContent = 'center'
productos.style.gap = '16px'
productos.style.flexWrap = 'wrap'
productos.style.padding = '0'


// Recorre todas las tarjetas y aplica estilos
tarjetas.forEach(tarjeta => {
    tarjeta.style.width = '256px'
    tarjeta.style.padding = '16px'
    
});

// Funcionalidades

let ventanaCarrito = document.querySelector('.ventana-carrito')
let producto1 = document.querySelector('.producto1')
let botonCarrito = document.querySelectorAll('.carrito-boton')
let botonCerrarCarrito = document.querySelector('.cierra-modal')

ventanaCarrito.style.display = 'none'

// Funcion que añade los productos al carrito
function añadirCarrito(imagen, nombre, precio) {
    // Crea el contenedor del producto del carrito
    let carritoProducto = document.createElement('section')

    // Crea el nodo de la imagen, nombre, precio del producto añadido al carrito
    let imgElemento = document.createElement('img')
    let nombreElemento = document.createElement('h5')
    let precioElemento = document.createElement('p')

    // Agrega el contenido que va en cada nodo
    imgElemento.src = imagen
    nombreElemento.innerHTML = nombre
    precioElemento.innerHTML = precio
    
    // Agrega los nodos al contenedor del producto del carrito
    carritoProducto.appendChild(imgElemento)
    carritoProducto.appendChild(nombreElemento)
    carritoProducto.appendChild(precioElemento)

    // Estilos
    carritoProducto.style.display = 'flex'
    carritoProducto.style.alignItems = 'center'
    carritoProducto.style.justifyContent = 'space-around'
    carritoProducto.style.height = '100px'
    carritoProducto.style.width = '100%'
    imgElemento.style.height = '90%'
    
    // Agrega el contenedor del producto del carrito al contenedor de la ventana del carrito
    ventanaCarrito.appendChild(carritoProducto)
}

// Funcion para mostrar la ventana del carrito 

function mostrarCarrito() {
    if (ventanaCarrito.style.display == 'none') {
        ventanaCarrito.style.display = 'flex'
        ventanaCarrito.style.flexDirection = 'column'
        ventanaCarrito.style.alignItems = 'center'
        ventanaCarrito.style.position = 'fixed'
        ventanaCarrito.style.top = '5vh'
        ventanaCarrito.style.left = '20vh'
        ventanaCarrito.style.borderRadius = '10px'
        ventanaCarrito.style.border = '2px solid black'
        ventanaCarrito.style.backgroundColor = 'white'
        ventanaCarrito.style.height = '80vh'
        ventanaCarrito.style.width = '80vw'
        ventanaCarrito.style.overflow = 'auto'
    }
}

botonCerrarCarrito.style.height = '20px'
botonCerrarCarrito.style.margin = '20px'
botonCerrarCarrito.style.alignSelf = 'end'

function cerrarCarrito() {
    if (ventanaCarrito.style.display == 'flex') {
        ventanaCarrito.style.display = 'none'
    }
}