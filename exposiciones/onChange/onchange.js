// ejemplo 1 Cambio de fondo
document.getElementById('color').onchange = function(){
    document.body.style.backgroundColor = this.value;
};
// ejemplo 2 Mostrar/Ocultar elemento 
document.getElementById('mostrarCheckbox').onchange = function(){
    document.getElementById('elemento').style.display = this.checked? 'block': 'none';
}
// ejemplo 3 Cambiar color de letra
document.getElementById('color1').onchange = function(){
    document.getElementById('texto').style.color = this.value;
};