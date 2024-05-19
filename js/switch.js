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
            respuestaCalificacionLetra.textContent = `Letra invalida 🤨`
            break;
    }
})

// __________________________________________________________________________________________

// Ejercicio 2 Numero dia

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

let inputNumDia = document.getElementById('numberDiaLetras')
let calcDiaLetras = document.getElementById('calcDiaLetras')
let respuestaDiaLetras = document.getElementById('muestraDiaLetras')


calcDiaLetras.addEventListener('click', function (event) {
    event.preventDefault()

    let numeroDia = Number(inputNumDia.value)

    switch (numeroDia) {
        case 1:
            respuestaDiaLetras.textContent = `Lunes`
            break;
        
        case 2:
            respuestaDiaLetras.textContent = `Martes`
            break;

        case 3:
            respuestaDiaLetras.textContent = `Miercoles`
            break;

        case 4:
            respuestaDiaLetras.textContent = `Jueves`
            break;

        case 5:
            respuestaDiaLetras.textContent = `Viernes`
            break;
        
        case 6:
            respuestaDiaLetras.textContent = `Sabado`
            break;

        case 7:
            respuestaDiaLetras.textContent = `Domingo`
            break;

        default:
            respuestaDiaLetras.textContent = `Número invalido`
            break;
    }
})

// __________________________________________________________________________________________

// Ejercicio 3  Meses del año


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

let inputMesLetras = document.getElementById('numeroMes')
let calcMesLetras = document.getElementById('calcMesLetras')
let respuestaMesLetras = document.getElementById('muestraMesLetras')


calcMesLetras.addEventListener('click', function (event) {
    event.preventDefault()

    let numeroMonth = Number(inputMesLetras.value)

    switch (numeroMonth) {
        case 1:
            respuestaMesLetras.textContent = `Enero`
            break;
        
        case 2:
            respuestaMesLetras.textContent = `Febrero`
            break;

        case 3:
            respuestaMesLetras.textContent = `Marzo`
            break;

        case 4:
            respuestaMesLetras.textContent = `Abril`
            break;

        case 5:
            respuestaMesLetras.textContent = `Mayo`
            break;
        
        case 6:
            respuestaMesLetras.textContent = `Junio`
            break;

        case 7:
            respuestaMesLetras.textContent = `Julio`
            break;

        case 8:
            respuestaMesLetras.textContent = `Agosto`
            break;

        case 9:
            respuestaMesLetras.textContent = `Septiembre`
            break;

        case 10:
            respuestaMesLetras.textContent = `Octubre`
            break;
        
        case 11:
            respuestaMesLetras.textContent = `Noviembre`
            break;

        case 12:
            respuestaMesLetras.textContent = `Diciembre`
            break;

        default:
            respuestaMesLetras.textContent = `Número invalido 🤨`
            break;
    }
})

// __________________________________________________________________________________________

// Ejercicio 4 Operaciones matematicas

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

let inputNumOp1 = document.getElementById('numeroOperacion1')
let inputNumOp2 = document.getElementById('numeroOperacion2')
let calcSuma = document.getElementById('calcSuma')
let calcResta = document.getElementById('calcResta')
let calcMultiplicacion = document.getElementById('calcMultiplicacion')
let calcDivision = document.getElementById('calcDivision')
let respuestaOperacion = document.getElementById('muestraOperacion')


calcSuma.addEventListener('click', function (event) {
    event.preventDefault()

    let numOp1 = Number(inputNumOp1.value)
    let numOp2 = Number(inputNumOp2.value)
    
    respuestaOperacion.textContent = `${numOp1} + ${numOp2} es igual a ${numOp1 + numOp2}`  
})

calcResta.addEventListener('click', function (event) {
    event.preventDefault()

    let numOp1 = Number(inputNumOp1.value)
    let numOp2 = Number(inputNumOp2.value)
    
    respuestaOperacion.textContent = `${numOp1} - ${numOp2} es igual a ${numOp1 - numOp2}`
})

calcMultiplicacion.addEventListener('click', function (event) {
    event.preventDefault()

    let numOp1 = Number(inputNumOp1.value)
    let numOp2 = Number(inputNumOp2.value)
    
    respuestaOperacion.textContent = `${numOp1} * ${numOp2} es igual a ${numOp1 * numOp2}`
})

calcDivision.addEventListener('click', function (event) {
    event.preventDefault()

    let numOp1 = Number(inputNumOp1.value)
    let numOp2 = Number(inputNumOp2.value)
    
    respuestaOperacion.textContent = `${numOp1} / ${numOp2} es igual a ${numOp1 / numOp2}`
})

// __________________________________________________________________________________________

// Ejercicio 5 Palabras en ingles

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

let inputWordUser = document.getElementById('spanishWordUser')
let traducirEnglish = document.getElementById('traducirEnglish')
let respuestaTraduccion = document.getElementById('muestraTraduccion')

traducirEnglish.addEventListener('click', function (event) {
    event.preventDefault()

    let spanishWord = inputWordUser.value.toLowerCase()

    switch (spanishWord) {
        case 'perro':
            respuestaTraduccion.textContent = `La traducción de ${spanishWord} es Dog`
            break;
        
        case 'gato':
            respuestaTraduccion.textContent = `La traducción de ${spanishWord} es Cat`
            break;

        case 'pajaro':
            respuestaTraduccion.textContent = `La traducción de ${spanishWord} es Bird`
            break;

        case 'pez':
            respuestaTraduccion.textContent = `La traducción de ${spanishWord} es Fish`
            break;

        case 'conejo':
            respuestaTraduccion.textContent = `La traducción de ${spanishWord} es Rabbit`
            break;
        
        case 'raton':
            respuestaTraduccion.textContent = `La traducción de ${spanishWord} es Mouse`
            break;

        case 'serpiente':
            respuestaTraduccion.textContent = `La traducción de ${spanishWord} es Snake`
            break;

        case 'tortuga':
            respuestaTraduccion.textContent = `La traducción de ${spanishWord} es Turtle`
            break;

        case 'hamster':
            respuestaTraduccion.textContent = `La traducción de ${spanishWord} es Hamster`
            break;

        case 'caballo':
            respuestaTraduccion.textContent = `La traducción de ${spanishWord} es Horse`
            break;

        default:
            respuestaTraduccion.textContent = `Escribe otra palabra`
            break;
    }
})

// __________________________________________________________________________________________

// Ejercicio 6 Calculadora de tarifa de envío

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

let inputPesoPaquete = document.getElementById('pesoPaquete')
let inputciudadDestino = document.getElementById('ciudadDestino')
let calcTarifa = document.getElementById('calcTarifa')
let respuestaTarifa = document.getElementById('muestraTarifa')

calcTarifa.addEventListener('click', function (event) {
    event.preventDefault()

    let pesoPaquete = Number(inputPesoPaquete.value)
    let destinoPaquete = inputciudadDestino.value.toLowerCase()

    switch (destinoPaquete) {
        case 'neiva':
            if (pesoPaquete > 0 && pesoPaquete < 1.0) {
                respuestaTarifa.textContent = `La tarifa de envío es de $11000`
            } else if (pesoPaquete >= 1.0 && pesoPaquete < 2.0) {
                respuestaTarifa.textContent = `La tarifa de envío es de $13000`
            } else if (pesoPaquete >= 2.0 && pesoPaquete < 5.0) {
                respuestaTarifa.textContent = `La tarifa de envío es de $15000`
            } else if (pesoPaquete >= 5.0 && pesoPaquete < 10.0) {
                respuestaTarifa.textContent = `La tarifa de envío es de $16000`
            } else if (pesoPaquete >= 10.0) {
                respuestaTarifa.textContent = `La tarifa de envío es de $21000`
            }
            break;
        
        case 'pasto':
            if (pesoPaquete > 0 && pesoPaquete < 1.0) {
                respuestaTarifa.textContent = `La tarifa de envío es de $10500`
            } else if (pesoPaquete >= 1.0 && pesoPaquete < 2.0) {
                respuestaTarifa.textContent = `La tarifa de envío es de $12500`
            } else if (pesoPaquete >= 2.0 && pesoPaquete < 5.0) {
                respuestaTarifa.textContent = `La tarifa de envío es de $14500`
            } else if (pesoPaquete >= 5.0 && pesoPaquete < 10.0) {
                respuestaTarifa.textContent = `La tarifa de envío es de $15500`
            } else if (pesoPaquete >= 10.0) {
                respuestaTarifa.textContent = `La tarifa de envío es de $20500`
            }
            break;
        
        case 'cali':
            if (pesoPaquete > 0 && pesoPaquete < 1.0) {
                respuestaTarifa.textContent = `La tarifa de envío es de $10000`
            } else if (pesoPaquete >= 1.0 && pesoPaquete < 2.0) {
                respuestaTarifa.textContent = `La tarifa de envío es de $12000`
            } else if (pesoPaquete >= 2.0 && pesoPaquete < 5.0) {
                respuestaTarifa.textContent = `La tarifa de envío es de $14000`
            } else if (pesoPaquete >= 5.0 && pesoPaquete < 10.0) {
                respuestaTarifa.textContent = `La tarifa de envío es de $15000`
            } else if (pesoPaquete >= 10.0) {
                respuestaTarifa.textContent = `La tarifa de envío es de $20000`
            }
            break;
        
        case 'bogota':
            if (pesoPaquete > 0 && pesoPaquete < 1.0) {
                respuestaTarifa.textContent = `La tarifa de envío es de $12000`
            } else if (pesoPaquete >= 1.0 && pesoPaquete < 2.0) {
                respuestaTarifa.textContent = `La tarifa de envío es de $14000`
            } else if (pesoPaquete >= 2.0 && pesoPaquete < 5.0) {
                respuestaTarifa.textContent = `La tarifa de envío es de $16000`
            } else if (pesoPaquete >= 5.0 && pesoPaquete < 10.0) {
                respuestaTarifa.textContent = `La tarifa de envío es de $17000`
            } else if (pesoPaquete >= 10.0) {
                respuestaTarifa.textContent = `La tarifa de envío es de $22000`
            }
            break;
        
        default:
            respuestaTarifa.textContent = `Asegurate de escribir bien`
            break;
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