let closeBtn1 = document.getElementById('close-btn1')
let ventanaEjercicios = closeBtn1.parentNode

closeBtn1.addEventListener('click', function() {
    ventanaEjercicios.classList.add('inactive')
})

// Ejercicio 1 Calificacion de letras

let btnEjercicio01 = document.getElementById('button1')
let calcCalificacionLetra = document.getElementById('calcCalificacionLetra')
let inputCalificacion = document.getElementById('calificacionLetra')
let respuestaCalificacionLetra = document.getElementById('muestraCalificacionLetra')

btnEjercicio01.addEventListener('click', function() {
    document.getElementById('float-window-1').classList.remove('inactive')
})
calcCalificacionLetra.addEventListener('click', function (event) {
    event.preventDefault()

    let userLetter = inputCalificacion.value.toUpperCase()
    respuestaCalificacionLetra.textContent = ''

    switch (userLetter) {
        case 'A':
            respuestaCalificacionLetra.textContent = `¡Felicidades por tu excelente desempeño!  `
            break;
        
        case 'B':
            respuestaCalificacionLetra.textContent = `¡Bien hecho! Has hecho un buen trabajo`
            break;

        case 'C':
            respuestaCalificacionLetra.textContent = `Aprobado. ¡No está mal! Puedes mejorar`
            break;

        case 'D':
            respuestaCalificacionLetra.textContent = `Necesitas mejorar`
            break;

        case 'F':
            respuestaCalificacionLetra.textContent = `No has alcanzado el nivel requerido`
            break;

        default:
            respuestaCalificacionLetra.textContent = `Letra invalid 🤨`
            break;
    }
})

// Ejercicio 2 Número mayor

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

let inputNum1 = document.getElementById('numberM1')
let inputNum2 = document.getElementById('numberM2')
let calcNumMayor = document.getElementById('calcMayor')
let respuestaNumMayor = document.getElementById('muestraNumMayor')


calcNumMayor.addEventListener('click', function (event) {
    event.preventDefault()

    num1 = inputNum1.value
    num2 = inputNum2.value
    console.log(num1, num2)
    if (num1 > num2) {
        respuestaNumMayor.textContent = ``
        respuestaNumMayor.textContent = `El número ${num1} es mayor que el número ${num2}`
        return
    } else if (num2 > num1) {
        respuestaNumMayor.textContent = ``
        respuestaNumMayor.textContent = `El número ${num2} es mayor que el número ${num1}`
        return
    } else {
        respuestaNumMayor.textContent = ``
        respuestaNumMayor.textContent = `Ambos números son iguales`
        return
    }
})

// __________________________________________________________________________________________

// Ejercicio 3  Año bisiesto


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

let inputYear = document.getElementById('yearB')
let calcBisiesto = document.getElementById('calcBisiesto')
let respuestaBisiesto = document.getElementById('muestraBisiesto')


calcBisiesto.addEventListener('click', function (event) {
    event.preventDefault()

    year = inputYear.value

    if (year % 4 == 0) {
        respuestaBisiesto.textContent = `El año que ingresaste (${year}) es bisiesto`
        return
    } else {
        respuestaBisiesto.textContent = `El año que ingresaste (${year}) no es bisiesto`
        return
    }
})

// __________________________________________________________________________________________

// Ejercicio 4 Vocal o consonante

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

let inputCaracter = document.getElementById('caracterUser')
let calcVoCon = document.getElementById('calcVoCon')
let respuestaVoCon = document.getElementById('muestraVoCon')


calcVoCon.addEventListener('click', function (event) {
    event.preventDefault()

    let letter = inputCaracter.value

    if (letter == 'a' || letter == 'e' || letter == 'i' || letter == 'o' || letter == 'u'){
        respuestaVoCon.textContent = `El caracter que ingresaste es una vocal`
        return
    } else if (!Number.isNaN(letter)){
        respuestaVoCon.textContent = `Tienes que escribir una consonante o vocal`
        return
    } else {
        respuestaVoCon.textContent = `El caracter que ingresaste es una consonante`
        return
    }
})

// __________________________________________________________________________________________

// Ejercicio 5 Número de dias del mes

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

let inputMesUser = document.getElementById('mesUser')
let calcDiasMes = document.getElementById('calcDiasMes')
let respuestaDiasMes = document.getElementById('muestraDiasMes')


calcDiasMes.addEventListener('click', function (event) {
    event.preventDefault()

    let userMonth = inputMesUser.value.toLowerCase()
    console.log(userMonth)

    if (userMonth == 'enero' || userMonth == 'marzo' || userMonth == 'mayo' || userMonth == 'julio' || userMonth == 'agosto' || userMonth == 'octubre' || userMonth == 'diciembre'){
        respuestaDiasMes.textContent = `El mes que ingresaste tiene 31 días`
    } else if (userMonth == 'abril' || userMonth == 'junio' || userMonth == 'septiembre' || userMonth == 'noviembre'){
        respuestaDiasMes.textContent = `El mes que ingresaste tiene 30 días`
    } else if (userMonth == 'febrero') {
        respuestaDiasMes.textContent = `El mes que ingresaste tiene 28 o 29 días`
    }
})

// __________________________________________________________________________________________

// Ejercicio 6 Calificacion con letras

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

let inputNotaUser = document.getElementById('notaUser')
let calcLetraNota = document.getElementById('calcLetraNota')
let respuestaLetraNota = document.getElementById('muestraLetraNota')

calcLetraNota.addEventListener('click', function (event) {
    event.preventDefault()

    let calificacion = inputNotaUser.value

    if (calificacion >= 0.0 && calificacion < 2.0) {
        respuestaLetraNota.textContent = `Sacaste F`
    } else if (calificacion >= 2.0 && calificacion < 4.0) {
        respuestaLetraNota.textContent = `Sacaste D`
    } else if (calificacion >= 4.0 && calificacion < 6.0) {
        respuestaLetraNota.textContent = `Sacaste C`
    } else if (calificacion >= 6.0 && calificacion < 8.0) {
        respuestaLetraNota.textContent = `Sacaste B`
    } else if (calificacion >= 8.0 && calificacion < 10.0) {
        respuestaLetraNota.textContent = `Sacaste A`
    }
})

// __________________________________________________________________________________________

// Ejercicio 7 Celcius a Fahrenheit

// Abre ventana
let btnEjercicio07 = document.getElementById('button7')

btnEjercicio07.addEventListener('click', function() {
    document.getElementById('float-window-7').classList.remove('inactive')
});

// Cierra ventana
let closeBtn7 = document.getElementById('close-btn7')
let ventanaEjercicio7 = closeBtn7.parentNode

closeBtn7.addEventListener('click', function() {
    ventanaEjercicio7.classList.add('inactive')
})

let inputCelcius = document.getElementById('celcius')
let calcFahrenheit = document.getElementById('calcFahrenheit')
let respuestaFahrenheit = document.getElementById('muestraFahrenheit')

calcFahrenheit.addEventListener('click', function (event) {
    event.preventDefault()
    
    let gCelcius = inputCelcius.value
    let gFahrenheit = (gCelcius * 9/5) + 32
    
    respuestaFahrenheit.textContent = `${gCelcius} grados celcius equivalen a ${gFahrenheit} grados Fahrenheit`
})

// __________________________________________________________________________________________

// Ejercicio 8 Contraseña correcta o incorrecta 

// Abre ventana
let btnEjercicio08 = document.getElementById('button8')

btnEjercicio08.addEventListener('click', function() {
    document.getElementById('float-window-8').classList.remove('inactive')
});

// Cierra ventana
let closeBtn8 = document.getElementById('close-btn8')
let ventanaEjercicio8 = closeBtn8.parentNode

closeBtn8.addEventListener('click', function() {
    ventanaEjercicio8.classList.add('inactive')
})

let inputPassword = document.getElementById('passwordUser')
let validarPass = document.getElementById('validarPass')
let respuestaPass = document.getElementById('muestraPass')

validarPass.addEventListener('click', function (event) {
    event.preventDefault()
    
    let password = '1234'
    let userPass = inputPassword.value

    if (userPass == password) {
        respuestaPass.textContent = `La contraseña es correcta`
    } else {
        respuestaPass.textContent = `La contraseña es incorrecta bro 🙀`
    }
})

// Ejercicio 9 Colores del arcoiris 

// Abre ventana
let btnEjercicio09 = document.getElementById('button9')

btnEjercicio09.addEventListener('click', function() {
    document.getElementById('float-window-9').classList.remove('inactive')
});

// Cierra ventana
let closeBtn9 = document.getElementById('close-btn9')
let ventanaEjercicio9 = closeBtn9.parentNode

closeBtn9.addEventListener('click', function() {
    ventanaEjercicio9.classList.add('inactive')
})

let inputColor= document.getElementById('colorUser')
let validarColor= document.getElementById('validarColor')
let respuestaColor = document.getElementById('muestraColor')

validarColor.addEventListener('click', function (event) {
    event.preventDefault()
    
    let arcoirisColors = ['rojo', 'naranja', 'amarillo', 'verde', 'azul', 'indigo', 'violeta']
    let userColor = inputColor.value.toLowerCase()

    if (arcoirisColors.includes(userColor)) {
        respuestaColor.textContent = `${userColor} si está en el arcoiris! 🌈`
    } else {
        respuestaColor.textContent = `El color no está en el arcoiris`
    }
})

// __________________________________________________________________________________________

//Ejercicio 10 Clasificacion animal

// Abre ventana
let btnEjercicio10 = document.getElementById('button10')

btnEjercicio10.addEventListener('click', function() {
    document.getElementById('float-window-10').classList.remove('inactive')
});

// Cierra ventana
let closeBtn10 = document.getElementById('close-btn10')
let ventanaEjercicio10 = closeBtn10.parentNode

closeBtn10.addEventListener('click', function() {
    ventanaEjercicio10.classList.add('inactive')
})

let inputAnimal = document.getElementById('animalUser')
let validarAnimal= document.getElementById('validarAnimal')
let respuestaAnimal = document.getElementById('muestraAnimal')

validarAnimal.addEventListener('click', function (event) {
    event.preventDefault()

    let mamiferos = ["perro", "gato", "vaca",  "cerdo", "elefante", "leon", "tigre", "jirafa", "conejo", "raton", "ballena", "delfin", "caballo", "ciervo", "ardilla", "gorila", "hipopotamo", "rata", "morsa", "oso"]

    let aves = ["pinguino","paloma","golondrina","buho","colibri","cuervo","gaviota","canario","pato","ganso","pavo","pajaro carpintero","gallo","gallina","cigueña","buitre","aguila","petirrojo","grulla","halcon"]

    let reptiles = ["lagarto", "serpiente", "cocodrilo", "tortuga", "camaleon", "iguana", "anaconda", "caiman", "gecko", "boa", "dragon barbudo", "piton", "salamanquesa", "aligator", "varano", "serpiente de cascabel", "tortuga de tierra", "basilisco", "lagarto espinoso", "tortuga de agua"]

    let anfibios = ["rana", "sapo", "salamandra", "triton"]

    let peces = ["salmon", "atun", "bacalao", "trucha", "pez payaso", "anguila", "dorado", "mero", "rape", "besugo", "carpa", "sardina", "pez espada", "lubina", "robalo", "platija", "pulpo", "bagre", "boqueron", "anchoveta"]

    let invertebrados = ["abeja", "araña", "caracol", "mosquito", "pulga", "gusano", "langosta", "mosca", "cucaracha", "escarabajo", "medusa", "calamar", "pulpo", "cangrejo ermitaño", "estrella de mar", "babosa", "oruga", "mariposa"]
    
    let arcoirisColors = ['rojo', 'naranja', 'amarillo', 'verde', 'azul', 'indigo', 'violeta']

    let userAnimal = inputAnimal.value.toLowerCase()

    if (mamiferos.includes(userAnimal)) {
        respuestaAnimal.textContent = `El animal que ingresaste es un mamífero`
    } else if (aves.includes(userAnimal)) {
        respuestaAnimal.textContent = `El animal que ingresaste es un ave`
    } else if (reptiles.includes(userAnimal)) {
        respuestaAnimal.textContent = `El animal que ingresaste es un reptil`
    } else if (anfibios.includes(userAnimal)) {
        respuestaAnimal.textContent = `El animal que ingresaste es un anfibio`
    } else if (peces.includes(userAnimal)) {
        respuestaAnimal.textContent = `El animal que ingresaste es un pez`
    } else if (invertebrados.includes(userAnimal)) {
        respuestaAnimal.textContent = `El animal que ingresaste es un invertebrado`
    }
})