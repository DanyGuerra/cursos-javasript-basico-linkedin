"use strict"

//********************************
//*** Uso del operador this

const boton = document.querySelector('.boton');

// boton.addEventListener('click', () => {
//     console.log("Boton pulsado")
// });

// boton.addEventListener('click', function () {
//     console.log(this);
// })

// boton.addEventListener('click', function () {
//     console.log(this.innerHTML);
// })

boton.addEventListener('click', () => {
    console.log(this)
    this.location = "http://www.google.com";
})