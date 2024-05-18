let darkScreen = document.querySelector('.dark-screen')
let exercisesButton = document.querySelectorAll('.card') 

exercisesButton.forEach((button) => {
    button.addEventListener('click', () => {
        darkScreen.classList.remove('inactive')
    })
})

// Cerrar todas las ventanas modales

let closeBtns = document.querySelectorAll('.close-btn')
let modales = document.querySelectorAll('.float-window')

closeBtns.forEach((boton) => {
    boton.addEventListener('click', () => {
        console.log(boton)
        modales.forEach((modal) => {
            if (!modal.classList.contains('inactive')) {
                modal.classList.add('inactive')
            }
        })
        darkScreen.classList.add('inactive')
    })
})

darkScreen.addEventListener('click', () => {
    modales.forEach((modal) => {
        if (!modal.classList.contains('inactive')) {
            modal.classList.add('inactive')
            darkScreen.classList.add('inactive')
        }
    })
})