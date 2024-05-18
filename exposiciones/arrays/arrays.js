// ejercicio 1 Sumar los numeros de un arreglo
console.log('|||||||||||||❖●❖|||||||||||||')
function sumaTotal(arreglo){
    let suma = 0;
    for (let num of arreglo){
        suma += num;
    }
    return suma;
}

const numeros =[1,2,3,4,5,6,7,8,9];
console.log(sumaTotal(numeros));

// ejercicio 2 Encuentra el numero mas pequeño de un array
console.log('|||||||||||||❖●❖|||||||||||||')

function encontrarMinimo(arreglo){
    let minimo = arreglo[0];
    for (let num of arreglo){
        if (num < minimo){
            minimo = num;
        }
    }
    return minimo;
}
const numero = [5,5,8,3,1];
console.log(encontrarMinimo(numero));

// ejercicio 3 Duplica los numeros de un array
console.log('|||||||||||||❖●❖|||||||||||||')
function duplicarElementos(arreglo){
    const nuevoArreglo = [];
    for (let num of arreglo){
        nuevoArreglo.push(num*2);
    }
    return nuevoArreglo;
}

const num = [1,2,3,4,5];
console.log(duplicarElementos(num));