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

// Ejercicio 5 Generador de secuencia Fibonacci: Escribe un programa que genere los primeros N números de la secuencia Fibonacci utilizando un bucle while.

// Abre ventana
let btnEjercicio05 = document.getElementById('button5')

btnEjercicio05.addEventListener('click', function() {
    document.getElementById('float-window-5').classList.remove('inactive')
});

// Cierra ventana
let closeBtn5 = document.getElementById('close-btn5')
let ventanaEjercicio5 = closeBtn5.parentNode

closeBtn5.addEventListener('click', function() {
    ventanaEjercicio5.classList.add('inactive')
})

// Generador de secuencia Fibonacci

let inputNFibonacci = document.getElementById('nFibonacci')
let generarFibonacci = document.getElementById('generarFibonacci')
let respuestaFibonacci = document.getElementById('muestraFibonacci')

generarFibonacci.addEventListener('click', function(event) {
    event.preventDefault()
    respuestaFibonacci.textContent = ``
    let cantidadFibonacci = inputNFibonacci.value
    let num1 = 0
    let num2 = 1
    let num3
    let i = 1
    respuestaFibonacci.innerHTML += `${num1}, `
    while(i < cantidadFibonacci) {
        num3 = num1 + num2
        num1 = num2
        num2 = num3
        respuestaFibonacci.innerHTML += `${num1}, `
        i++
    }
})

//____________________________________________________________________________________________________

// Ejercicio 6 Contador de dígitos: Crea un programa que cuente y muestre la cantidad de dígitos en un número ingresado por el usuario utilizando un bucle while.


// Abre ventana
let btnEjercicio06 = document.getElementById('button6')

btnEjercicio06.addEventListener('click', function() {
    document.getElementById('float-window-6').classList.remove('inactive')
});

// Cierra ventana
let closeBtn6 = document.getElementById('close-btn6')
let ventanaEjercicio6 = closeBtn6.parentNode

closeBtn6.addEventListener('click', function() {
    ventanaEjercicio6.classList.add('inactive')
})

// Generador de secuencia Fibonacci

let inputNumero = document.getElementById('cantidadDigitos')
let calcDigitos = document.getElementById('calcDigitos')
let respuestaDigitos = document.getElementById('muestraDigitos')

calcDigitos.addEventListener('click', function(event) {
    event.preventDefault()
    respuestaFibonacci.textContent = ``
    let cantidadFibonacci = inputNFibonacci.value
    let num1 = 0
    let num2 = 1
    let num3
    let i = 1
    respuestaFibonacci.innerHTML += `${num1}, `
    while(i < cantidadFibonacci) {
        num3 = num1 + num2
        num1 = num2
        num2 = num3
        respuestaFibonacci.innerHTML += `${num1}, `
        i++
    }
})

//____________________________________________________________________________________________________

// Ejercicio 7 Tabla de multiplicar: Desarrolla un programa que imprima la tabla de multiplicar de un número ingresado por el usuario utilizando un bucle while.

//____________________________________________________________________________________________________

// Ejercicio 8 Conversor de temperatura: Implementa un programa que convierta una temperatura en grados Celsius a grados Fahrenheit utilizando un bucle while para permitir al usuario realizar múltiples conversiones.

//____________________________________________________________________________________________________

// Ejercicio 9 Detección de números primos: Escribe un programa que determine si un número ingresado por el usuario es primo o no utilizando un bucle while.

//____________________________________________________________________________________________________

// Ejercicio 10 Simulador de ahorro: Crea un programa que simule un plan de ahorro, donde el usuario ingresa un monto de dinero a ahorrar mensualmente y una tasa de interés. Utiliza un bucle while para calcular el saldo acumulado después de un número de meses especificado por el usuario.