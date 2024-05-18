// On scroll
// encontrar el btn por su id
const btn = document.getElementById('btn');
// agregar un listener de clic al btn
btn.addEventListener('click', function(){
    window.scrollTo({
        top:0,
        behavior:'smooth'//hace que el scroll sea suave
    });
});
// On reset 1
function restablecer(){
    // codigo para ejecutar cuando se restablece el formulario
    console.log('El formulario fue restablecido');

    // ejemplo: Borrar los datos del formulario
    document.getElementById('nombre').value = '';
}
// On reset 2
function confirmarRestablecimiento(){
    // mostrar mensaje de confirmación
    return confirm ('¿Está seguro de restablecer el formulario?')
}
// on reset 3
function guardarDatos(){
    // Guardar valores de los campos en las variables
    const nombreGuardado =document.getElementById('nombre').value;
    // mostrar mensaje de que los datos se han guardado correctamente
    alert('Los datos ingresados en el formulario han sido guardados temporalmente')
}