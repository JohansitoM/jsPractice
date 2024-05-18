// Ejemplo 1
const button = document.getElementById('btn');

button.addEventListener('click',manejadorClick);

function manejadorClick(event) {
    console.log('Haz dado click en el botón ');
    console.log('El evento fue activado por:')
    console.log(event.target);//elemento que activo el evento
}

// Ejemplo 2
document.querySelectorAll('button').forEach(btn=>{
    btn.addEventListener('click', function(event){
        if (event.target.id == 'btn1'){
            alert ('Haz dado clic en el botón 1');
        } else if (event.target.id == 'btn2'){
            alert ('Haz dado clic en el botón 2');
        } else if (event.target.id == 'btn3') {
            alert ('Haz dado clic en el botón 3');
        }
    });
});

// Ejemplo 3
document.querySelector('.cambiarColor').addEventListener
('click', function(event){
    event.target.style.backgroundColor = 'chocolate'; 
});