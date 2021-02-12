/*Declacion de variable y seleccion de selectores*/

const Reproductor1 = document.querySelector('.Reproductor1')
const Reproductor2 = document.querySelector('.Reproductor2')
const Reproductor3 = document.querySelector('.Reproductor3')
const Reproductor4 = document.querySelector('.Reproductor4')
const Reproductor5 = document.querySelector('.Reproductor5')

const Muestra1 = document.querySelector('.Muestra1')
const Muestra2 = document.querySelector('.Muestra2')
const Muestra3 = document.querySelector('.Muestra3')
const Muestra4 = document.querySelector('.Muestra4')
const Muestra5 = document.querySelector('.Muestra5')

const Video1 = document.querySelector('.Video1')
const Video2 = document.querySelector('.Video2')
const Video3 = document.querySelector('.Video3')
const Video4 = document.querySelector('.Video4')
const Video5 = document.querySelector('.Video5')

const CloseVis1 = document.querySelector('.X1')
const CloseVis2 = document.querySelector('.X2')
const CloseVis3 = document.querySelector('.X3')
const CloseVis4 = document.querySelector('.X4')
const CloseVis5 = document.querySelector('.X5')

/*Eventos1*/

Muestra1.addEventListener('click', () =>{
    Reproductor1.classList.toggle('VisActv')
    Video1.classList.toggle('PlayVid1')
})

Muestra2.addEventListener('click', () =>{
    Reproductor2.classList.toggle('VisActv')
    Video2.classList.toggle('PlayVid2')
})

Muestra3.addEventListener('click', () =>{
    Reproductor3.classList.toggle('VisActv')
    Video3.classList.toggle('PlayVid3')
})

Muestra4.addEventListener('click', () =>{
    Reproductor4.classList.toggle('VisActv')
    Video4.classList.toggle('PlayVid4')
})

Muestra5.addEventListener('click', () =>{
    Reproductor5.classList.toggle('VisActv')
    Video5.classList.toggle('PlayVid5')
})

/*Cierre*/

CloseVis1.addEventListener('click', ()=>{
    Reproductor1.classList.toggle('VisActv')
    Video1.classList.toggle('PlayVid1')
})

CloseVis2.addEventListener('click', ()=>{
    Reproductor2.classList.toggle('VisActv')
    Video2.classList.toggle('PlayVid2')
})

CloseVis3.addEventListener('click', ()=>{
    Reproductor3.classList.toggle('VisActv')
    Video3.classList.toggle('PlayVid3')
})

CloseVis4.addEventListener('click', ()=>{
    Reproductor4.classList.toggle('VisActv')
    Video4.classList.toggle('PlayVid4')
})

CloseVis5.addEventListener('click', ()=>{
    Reproductor5.classList.toggle('VisActv')
    Video5.classList.toggle('PlayVid5')
})