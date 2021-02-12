/*Declacion de variable y seleccion de selectores*/

const Visualizador = document.querySelector('.Visualizador');

const ContenedorImg = document.querySelector('.ContenedorImg');

const Descripcion = document.querySelector('.Descripcion');

const imagen1 = document.querySelector('.Muestra1');

const imagen2 = document.querySelector('.Muestra2');

const imagen3 = document.querySelector('.Muestra3');

const CloseVis = document.querySelector('.far.fa-times-circle')

/*Asignacion de eventos*/

imagen1.addEventListener('click', () =>{
    Funcion1(imagen1.getAttribute('src'),imagen1.getAttribute('alt'));
})


imagen2.addEventListener('click', () =>{
    Funcion2(imagen2.getAttribute('src'),imagen2.getAttribute('alt'));
})


imagen3.addEventListener('click', () =>{
    Funcion3(imagen3.getAttribute('src'),imagen3.getAttribute('alt'));
})

/*Funcion del Visualizador*/

/*Apertura*/

const Funcion1 = (src, atl)=>{
    Visualizador.classList.toggle('VisActv');
    ContenedorImg.classList.toggle('Animacion');
    ContenedorImg.src = src;
    Descripcion.innerHTML = atl;
}

const Funcion2 = (src, atl)=>{
    Visualizador.classList.toggle('VisActv');
    ContenedorImg.classList.toggle('Animacion');
    ContenedorImg.src = src;
    Descripcion.innerHTML = atl;
}

const Funcion3 = (src, atl)=>{
    Visualizador.classList.toggle('VisActv');
    ContenedorImg.classList.toggle('Animacion');
    ContenedorImg.src = src;
    Descripcion.innerHTML = atl;
}

/*Cierre*/

CloseVis.addEventListener('click', ()=>{
    Visualizador.classList.toggle('VisActv');
    ContenedorImg.classList.toggle('Animacion');
})





/*

imagen1.addEventListener('click', () =>{
    alert("¡Click!, Imagen 1");
})

const imagen2 = document.querySelector('.Muestra2');

imagen2.addEventListener('click', () =>{
    alert("¡Click!, Imagen 2");
})

const imagen3 = document.querySelector('.Muestra3');

imagen3.addEventListener('click', () =>{
    alert("¡Click!, Imagen 3");
})

*/

