// seleccionar elemento por su id
var titulo = document.getElementById('texto1')
// cambiar texto del elemento
titulo.innerText = 'Holaaa :b';
// seleccionar elemento por su clase
var contenido = document.querySelector('.texto2')
var texto = contenido.innerText;
console.log(texto,contenido)

// crear un elemento desde js y agregarle el texto
// crear un nuevo elemento p
var text3 = document.createElement('p');
// asignar texto al nuevo elemento
text3.innerText = 'nuevo texto agregado';
// agregar nuevo texto
document.body.appendChild(text3);

var contenedor = document.getElementById('miElement');
contenedor.innerHTML +='<p>nuevo parrafo</p><div>otro elemento</p>';

