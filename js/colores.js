let body = document.getElementById('body')
body.style.display = 'flex'
body.style.flexDirection = 'column'
body.style.alignItems = 'center'

let titulo = document.querySelector('.titulo')
titulo.style.textAlign = 'center'

// ╔════════════════════╗
//      Colores
// ╚════════════════════╝

// Colores de fondo

let rojoB = document.getElementById('rojoB')
let naranjaB = document.getElementById('naranjaB')
let amarilloB = document.getElementById('amarilloB')
let verdeB = document.getElementById('verdeB')
let azulB = document.getElementById('azulB')
let cyanB = document.getElementById('cyanB')
let violetaB = document.getElementById('violetaB')

rojoB.classList.add('btn')
naranjaB.classList.add('btn')
amarilloB.classList.add('btn')
verdeB.classList.add('btn')
azulB.classList.add('btn')
cyanB.classList.add('btn')
violetaB.classList.add('btn')

amarilloB.addEventListener('click', function() {
    body.style.backgroundColor = 'yellow'
})
rojoB.addEventListener('click', function() {
    body.style.backgroundColor = 'red'
})
naranjaB.addEventListener('click', function() {
    body.style.backgroundColor = 'orange'
})
verdeB.addEventListener('click', function() {
    body.style.backgroundColor = 'greenyellow'
})
azulB.addEventListener('click', function() {
    body.style.backgroundColor = 'blue'
})
cyanB.addEventListener('click', function() {
    body.style.backgroundColor = 'cyan'
})
violetaB.addEventListener('click', function() {
    body.style.backgroundColor = 'violet'
})


let colores = document.getElementById('coloresCuadro')
colores.style.width = '100%'
colores.style.display = 'flex'
colores.style.alignItems = 'center'
colores.style.justifyContent = 'space-around'

let contenedorBtnColores = document.getElementById('colores-contenedor')
contenedorBtnColores.style.display = 'flex'
contenedorBtnColores.style.flexDirection = 'column'

// Seleccion y estilos del cuadro

let cuadroColor = document.getElementById('cuadro-color')
cuadroColor.style.margin = '2rem'
cuadroColor.style.height = '300px'
cuadroColor.style.width = '300px'
cuadroColor.style.border = '2px solid black'
cuadroColor.style.borderRadius = '8px'
cuadroColor.style.fontSize = '8rem'
cuadroColor.style.textAlign = 'center'


// Seleccionar botones de colores

let rojo = document.getElementById('rojo')
let naranja = document.getElementById('naranja')
let amarillo = document.getElementById('amarillo')
let verde = document.getElementById('verde')
let azul = document.getElementById('azul')
let cyan = document.getElementById('cyan')
let violeta = document.getElementById('violeta')

rojo.classList.add('btn')
naranja.classList.add('btn')
amarillo.classList.add('btn')
verde.classList.add('btn')
azul.classList.add('btn')
cyan.classList.add('btn')
violeta.classList.add('btn')

amarillo.addEventListener('click', function() {
    cuadroColor.style.backgroundColor = 'yellow'
})
rojo.addEventListener('click', function() {
    cuadroColor.style.backgroundColor = 'red'
})
naranja.addEventListener('click', function() {
    cuadroColor.style.backgroundColor = 'orange'
})
verde.addEventListener('click', function() {
    cuadroColor.style.backgroundColor = 'greenyellow'
})
azul.addEventListener('click', function() {
    cuadroColor.style.backgroundColor = 'blue'
})
cyan.addEventListener('click', function() {
    cuadroColor.style.backgroundColor = 'cyan'
})
violeta.addEventListener('click', function() {
    cuadroColor.style.backgroundColor = 'violet'
})