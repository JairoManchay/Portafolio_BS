// recibiendo variables del html en archivo js
const imagenes = document.querySelectorAll('.galeria .contenedor-imagen');
const imagenModal = document.getElementById("imagen-modal");
const urlPagina = document.getElementById("modal_url");

imagenes.forEach((imagen)=>{
    imagen.addEventListener('click', ()=>{
        const ruta = imagen.querySelector('img').src;
        const url = imagen.querySelector('img').alt;
        imagenModal.src = ruta;
        urlPagina.href = url;
    })
})