//____________________________________________________________________________________________________

// Ejercicio 1 Suma de numeros

// Abre ventana
let btnEjercicio01 = document.getElementById('button1')

btnEjercicio01.addEventListener('click', function() {
    document.getElementById('float-window-1').classList.remove('inactive')
});

// Cierra ventana
let closeBtn1 = document.getElementById('close-btn1')
let ventanaEjercicio1 = closeBtn1.parentNode

closeBtn1.addEventListener('click', function() {
    ventanaEjercicio1.classList.add('inactive')
})

let inputNumeroBucle = document.getElementById('numeroBucle')
let calcSumaNumeros = document.getElementById('calcSumaNumeros')
let respuestaSumaNumeros = document.getElementById('muestraSumaNumeros')

calcSumaNumeros.addEventListener('click', function (event) {
    event.preventDefault()
    
    let numUser = Number(inputNumeroBucle.value)
    let resultado = 0

    while (numUser > 0) {
        resultado = resultado + numUser
        numUser--
    }

    respuestaSumaNumeros.textContent = `El resultado de la suma es ${resultado}`
})

//____________________________________________________________________________________________________

// Ejercicio 2 contador regresivo   !!!Pendiente

// Abre ventana
let btnEjercicio02 = document.getElementById('button2')

btnEjercicio02.addEventListener('click', function() {
    document.getElementById('float-window-2').classList.remove('inactive')
});

// Cierra ventana
let closeBtn2 = document.getElementById('close-btn2')
let ventanaEjercicio2 = closeBtn2.parentNode

closeBtn2.addEventListener('click', function() {
    ventanaEjercicio2.classList.add('inactive')
})

let formularioTiempo = document.getElementById('formularioTiempo')
let inputTiempo = document.getElementById('inputTiempo')
let iniciarCuenta = document.getElementById('iniciarCuenta')
let respuestaCuentaRegresiva= document.getElementById('muestraCuentaRegresiva')


formularioTiempo.addEventListener('submit', function (event) {
    event.preventDefault()

    let contador = Number(inputTiempo.value)

    while (contador > 0) {
        alert(contador)
        contador--
    }
})

//____________________________________________________________________________________________________

// Ejercicio 3 Factorial

// Abre ventana
let btnEjercicio03 = document.getElementById('button3')

btnEjercicio03.addEventListener('click', function() {
    document.getElementById('float-window-3').classList.remove('inactive')
});

// Cierra ventana
let closeBtn3 = document.getElementById('close-btn3')
let ventanaEjercicio3 = closeBtn3.parentNode

closeBtn3.addEventListener('click', function() {
    ventanaEjercicio3.classList.add('inactive')
})

let inputNumeroFactorial = document.getElementById('numeroFactorial')
let calcFactorial = document.getElementById('calcFactorial')
let respuestaFactorial = document.getElementById('muestraFactorial')

calcFactorial.addEventListener('click', function(event) {
    event.preventDefault()

    let factorialUser = Number(inputNumeroFactorial.value)
    let factorial = factorialUser

    while(factorialUser > 1) {
        factorial = factorial * (factorialUser - 1)
        console.log(factorial)  
        factorialUser--
    }
    respuestaFactorial.textContent = `El factorial del número es ${factorial}`
})

//____________________________________________________________________________________________________


// Ejericico 4 Adivina el numero

// Abre ventana
let btnEjercicio04 = document.getElementById('button4')

btnEjercicio04.addEventListener('click', function() {
    document.getElementById('float-window-4').classList.remove('inactive')
    
});

// Cierra ventana
let closeBtn4 = document.getElementById('close-btn4')
let ventanaEjercicio4 = closeBtn4.parentNode

closeBtn4.addEventListener('click', function() {
    ventanaEjercicio4.classList.add('inactive')
})
let calcNumeroRandom = document.getElementById('calcNumeroRandom')
let respuestaNumeroRandom = document.getElementById('muestraNumeroRandom')

calcNumeroRandom.addEventListener('click', function(event) {
    event.preventDefault()

    let numeroMaquina = Math.floor((Math.random() * 10) + 1)

    let posibleNumero = Number(prompt(`Adivina el número: `))

    while (numeroMaquina != posibleNumero) {
        posibleNumero = Number(prompt(`Sigue intentando`))
    }
    alert(`Felicidades, adivinaste el número`)
})


//____________________________________________________________________________________________________



//____________________________________________________________________________________________________

//____________________________________________________________________________________________________

//____________________________________________________________________________________________________

//____________________________________________________________________________________________________

//____________________________________________________________________________________________________