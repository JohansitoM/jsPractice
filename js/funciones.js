function saludar() {
    console.log('Advertencia !')
}

saludar()

function saludarPersona(nombre) {
    return`Hola ${nombre}!, ¿Cómo estás?`
}
const saludo = saludarPersona('Maria')
console.log(saludo)



const saludo2 = function () {
    return`Hola Maria!, ¿Cómo estás?`
}

const saludo3 = saludo2()
console.log(saludo3)

// Ejercicio 1 Escribe una función que tome dos números como parámetros y devuelva su suma

console.log(`╔════════════════════╗
     Ejercicio 1
╚════════════════════╝`)

function sumarDosNumeros(num1, num2) {
    console.log(`La suma de los números es ${num1 + num2}`)
}

sumarDosNumeros(2, 3)

// Ejercicio 2 Escribe una función que determine si un número dado es primo

console.log(`╔════════════════════╗
     Ejercicio 2
╚════════════════════╝`)

const numeroPrimo = (num) => {
    if (num == 2 || num == 3 || num == 5 || num == 7){
        return `El ${num} es un número primo`
    } else if (num % 2 == 0 || num % 3 == 0 || num % 4 == 0 || num % 5 == 0 || num % 6 == 0 || num % 7 == 0 || num % 8 == 0 || num % 9 == 0) {
        return `El ${num} no es un número primo`
    } else {
        return `El ${num} es un número primo`
    }
}
console.log(numeroPrimo(23))

// Ejercicio 3 Escribe una función que calcule el promedio de números dados

console.log(`╔════════════════════╗
     Ejercicio 3
╚════════════════════╝`)

const calcularPromedio = (nota1, nota2) => {
    let promedio = (nota1 + nota2) / 2
    return `El promedio de los dos números es ${promedio}`
}
console.log(calcularPromedio(3.5, 7,2))


// Ejercicio 4 Escribe una función que imprima todos los números pares hasta un límite dado

console.log(`╔════════════════════╗
     Ejercicio 4
╚════════════════════╝`)

const imprimirPares = (lim) => {
    for (let i = 0; i <= lim; i++) {
        if (i % 2 == 0) {
            console.log(i)
        }
    }
}
console.log(imprimirPares(9))


// Ejercicio 5 Escribe una funcion que imprima la tabla de multiplicar del número dado

console.log(`╔════════════════════╗
     Ejercicio 5
╚════════════════════╝`)

const numeroTabla = (tabla) => {
    for (let i = 1; i <= 10; i++) {
        console.log(`${tabla} * ${i} = ${tabla * i}`)
    }
}
console.log(numeroTabla(3))

// Ejercicio 6 Crea una función llamada numeroMayor() que toma tres números como entrada y retornar el número mayor de ellos, si son iguales devolver un String «son iguales»

console.log(`╔════════════════════╗
     Ejercicio 6
╚════════════════════╝`)

const numeroMayor = (mayor1, mayor2, mayor3) => {
    if (mayor1 > mayor2 && mayor1 > mayor3) {
        return mayor1
    } else if(mayor2 > mayor1 && mayor2 > mayor3){
        return mayor2
    } else if(mayor3 > mayor1 && mayor3 > mayor2){
        return mayor3
    } else {
        return 'son iguales'
    }
}   
console.log(numeroMayor(54, 29, 589))

// Ejercicio 7 Crea una función llamada generar_caracteres() que tome como parámetro un número entero (n) y un carácter, retornar el carácter multiplicado por n. Por ejemplo, generar_caracteres(5,x), debería retornar «xxxxx»

console.log(`╔════════════════════╗
     Ejercicio 7
╚════════════════════╝`)

const generarCaracteres = (numChar, character) => {
    let resultado = ''

    for (let i = 0; i < numChar; i++) {
        resultado += character
    }
    return resultado
}
console.log(generarCaracteres(20,'•'))

// Ejercicio 8 Sumar los números del 1 al 10 utilizando un bucle.

console.log(`╔════════════════════╗
     Ejercicio 8
╚════════════════════╝`)

const sumarDiezNumeros = () => {
    let sumaDiez = 0 
    for (let i = 0; i <= 10; i++) {
        sumaDiez += i
    }
    return sumaDiez
}
console.log(sumarDiezNumeros())

// Ejercicio 9 Pedir al usuario que ingrese un número mayor que 100 utilizando un bucle

console.log(`╔════════════════════╗
     Ejercicio 9
╚════════════════════╝`)

// const escribeNumeroMayor = () => {
//     let numero = 0
//     while (numero < 100) {
//         numero = parseInt(prompt('Ingrese un número mayor que 100'))
//     }
//     return numero
// }
// escribeNumeroMayor()

// Ejercicio 10 Generar un número aleatorio entre 1 y 10 hasta que se obtenga un 7

console.log(`╔════════════════════╗
     Ejercicio 10
╚════════════════════╝`)

const generarNumero = (aleatorio) => {
    let numeroAleatorio = Math.floor(Math.random() * 11)
    while (numeroAleatorio != aleatorio) {
        numeroAleatorio = Math.floor(Math.random() * 11)
        console.log(numeroAleatorio)
    }
    return numeroAleatorio
}
generarNumero(7)

// Ejercicio 11 Imprimir los números pares del 0 al 20

console.log(`╔════════════════════╗
     Ejercicio 11
╚════════════════════╝`)

const imprimir20Pares = () => {
    for (let i = 0; i <= 20; i++) {
        if (i % 2 == 0) {
            console.log(i)
        }
    }
}
imprimir20Pares()

// Ejercicio 12 Pedir al usuario que ingrese un número entre 1 y 5

console.log(`╔════════════════════╗
     Ejercicio 12
╚════════════════════╝`)

const numUser5 = () => {
    let num = parseInt(prompt("Ingrese un número entre 1 y 5"))
    console.log(num)
    while (num < 1 || num > 5) {
        num = parseInt(prompt("Ingrese un número entre 1 y 5"))
    }
}

// numUser5()

// Ejercicio 13 Imprimir los primeros 10 números de la serie de Fibonacci

console.log(`╔════════════════════╗
     Ejercicio 13
╚════════════════════╝`)

const diezFibonacci = () => {
    let num1 = 0
    let num2 = 1
    for (let i = 0; i < 10; i++) {
        console.log(num1)
        let num3 = num1 + num2
        num1 = num2
        num2 = num3
    }
}
diezFibonacci()

// Ejercicio 14 Pedir al usuario que ingrese una contraseña y repetir la solicitud hasta que ingrese una contraseña válida (por ejemplo, "contraseña123").

console.log(`╔════════════════════╗
     Ejercicio 14
╚════════════════════╝`)

const passwordUser = () => {
    let password = prompt("Ingrese una contraseña")
    while (password != "contraseña123") {
        password = prompt("Ingrese una contraseña")
    }
}
// passwordUser()

// Ejercicio 15 Imprimir los primeros 5 números primos
console.log(`╔════════════════════╗
     Ejercicio 15
╚════════════════════╝`)

const numerosPrimos = () => {
    let numero = 2
    for (let i = 0; i < 11; i++) {
        let contador = 0
        for (let j = 1; j <= numero; j++) {
            if (numero % j == 0) {
                contador++
            }
        }
        if (contador == 2) {
            console.log(numero)
        }
        numero++
    }
}   
numerosPrimos()

// Ejercicio 16 Pedir al usuario que ingrese un número positivo utilizando un bucle do-while y mostrar un mensaje de error si no lo hace

console.log(`╔════════════════════╗
     Ejercicio 16
╚════════════════════╝`)

const numeroPositivo = () => {
    let numero = 0
    do {
        numero = parseInt(prompt("Ingrese un número positivo"))
    } while (numero < 0)
    console.log(numero)
}

// numeroPositivo()

// Ejercicio 17 Imprimir los números del 10 al 1

console.log(`╔════════════════════╗
     Ejercicio 17
╚════════════════════╝`)

const printTenNumbers = () => {
    for(let i = 10; i > 0; i--) {
        console.log(i)
    }
}

printTenNumbers()

// Ejercicio 18 Calcular el factorial de un número dado

console.log(`╔════════════════════╗
     Ejercicio 18
╚════════════════════╝`)

const factorialDado = (factorial) => {
    let resultado = 1
    for(let i = factorial; i > 0; i--) {
        resultado *= i
    }
    console.log(resultado)
}
factorialDado(4)

// Ejercicio 19 Imprimir la secuencia de números del 1 al 100, pero para múltiplos de 3 imprimir "Fizz", para múltiplos de 5 imprimir "Buzz" y para múltiplos de ambos 3 y 5 imprimir "FizzBuzz“.

console.log(`╔════════════════════╗
     Ejercicio 19
╚════════════════════╝`)

const fizzBuzz = () => {
    for(let i = 1; i <= 100; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            console.log('FizzBuzz')
        } else if (i % 3 == 0) {
            console.log('Fizz')
        } else if (i % 5 == 0) {
            console.log('Buzz')
        } else {
            console.log(i)
        }
    }
}

fizzBuzz()

// Ejercicio 20 Imprimir los números del 10 al 1 en orden descendente
console.log(`╔════════════════════╗
     Ejercicio 20
╚════════════════════╝`)

printTenNumbers()

// Ejercicio 21 Imprimir los primeros 10 términos de la serie de Fibonacci

console.log(`╔════════════════════╗
     Ejercicio 21
╚════════════════════╝`)

diezFibonacci()