// ╔════════════════════╗
//      Calculadora
// ╚════════════════════╝

let titulo = document.getElementById('titulo')
let contenedorCalculadora = document.querySelector('#contenedor-general')
let inputNum1 = document.getElementById('num1-usuario')
let inputNum2 = document.getElementById('num2-usuario')
let resultado = document.getElementById('resultado')

// Adicion de clases para los estilos 
let cabeceraCalc = document.querySelector('#input-section')
let bodyCalc = document.getElementById('section-operations')
let contenedorBotones = document.querySelector('#container-btn')
let btnSumar = document.getElementById('sumar')
let btnRestar = document.getElementById('restar')
let btnMultiplicar = document.getElementById('multiplicar')
let btnDividir = document.getElementById('dividir')
let fieldResultado = document.getElementById('field-resultado')

titulo.classList.add('titulo')
contenedorCalculadora.classList.add('calculadora-container')
contenedorCalculadora.style.height = '50vh'
cabeceraCalc.classList.add('header-calc')
bodyCalc.classList.add('body-calc')
contenedorBotones.classList.add('btn-container')
btnSumar.classList.add('boton')
btnRestar.classList.add('boton')
btnMultiplicar.classList.add('boton')
btnDividir.classList.add('boton')
fieldResultado.classList.add('field-resultado')

// Funcionalidad

let num1
let num2

function sumarNumeros() {
    num1 = Number(inputNum1.value)
    num2 = Number(inputNum2.value)
    resultado.textContent = `${num1 + num2}`
}
function restarNumeros() {
    num1 = Number(inputNum1.value)
    num2 = Number(inputNum2.value)
    resultado.textContent = `${num1 - num2}`
}
function multiplicarNumeros() {
    num1 = Number(inputNum1.value)
    num2 = Number(inputNum2.value)
    resultado.textContent = `${num1 * num2}`
}
function dividirNumeros() {
    num1 = Number(inputNum1.value)
    num2 = Number(inputNum2.value)
    resultado.textContent = `${num1 / num2}`
}