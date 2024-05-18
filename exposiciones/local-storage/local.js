// ejemplo 1
document.getElementById('inicio').addEventListener('submit', function(){
    let nameuser = document.getElementById('nameuser').value;
    let password = document.getElementById('password').value;

    // almacenar las credenciales en el localstorage
    localStorage.setItem('Nombre', nameuser);
    localStorage.setItem('Contraseña', password);

    alert('Credenciales almacenadas en el localStorage');
})
// ejemplo 2
document.getElementById('enlace').addEventListener('click', function(event){
    event.preventDefault(); //evita que el enlace abra una pagina
    alert('Enlace deshabilitado');
});

document.getElementById('formulario'). addEventListener('click', function(event){
    event.preventDefault();
    alert('campo deshabilitado');
});
document.getElementById('btn').addEventListener('click', function(event){
    event.preventDefault();//evita el comportamiento predeterminado del botón 
    // puedes realizar otras acciones aquí
    alert('Botón clickeado, ¡Se impide realizar su acción!')
})