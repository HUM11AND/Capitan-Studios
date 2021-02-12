document.querySelector('.MenuR').addEventListener('click', () => {

    document.querySelector('.Menu ul.Opciones').classList.toggle('Activo')
    
} )

ScrollReveal().reveal('.Servicios1');
ScrollReveal().reveal('.Servicios2', {delay: 500});
ScrollReveal().reveal('.Servicios3', {delay: 500});

