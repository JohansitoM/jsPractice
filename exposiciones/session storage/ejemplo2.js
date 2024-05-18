// guardar el nombre de un usuario en SessionStorage cuando inicia sesion
sessionStorage.setItem('usuario', 'José');

// recuperar el nombre de usuario y mostrarlo en la página de bienvenida
const usuario = sessionStorage.getItem('usuario');
document.getElementById('bienvenida').textContent = 'Bienvenido, ' + usuario + '!';

