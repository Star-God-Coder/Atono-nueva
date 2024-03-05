addEventListener("DOMContentLoaded", function(){
  const imagenes = document.querySelectorAll(".carrusel img");
  let indiceActual = 0;

  function mostrarImagen(indice) {
    imagenes[indiceActual].classList.remove("activa");
    imagenes[indice].classList.add("activa");
    indiceActual = indice;
  }

  const wats = document.getElementsByClassName("whats"); // Get all elements with class "whats"
  const insta = document.getElementsByClassName("insta")
  document.querySelector(".anterior").addEventListener("click", function() {
    mostrarImagen((indiceActual - 1 + imagenes.length) % imagenes.length);
  });

  document.querySelector(".siguiente").addEventListener("click", function() {
    mostrarImagen((indiceActual + 1) % imagenes.length);
  });

  // Loop through each element with class "whats" and attach the listener
  for (let i = 0; i < wats.length; i++) {
    wats[i].addEventListener("click", function() {
      open("https://wa.me/5358711030");
    });
  }
  for (let i = 0; i < wats.length; i++) {
    insta[i].addEventListener("click", function() {
      open("https://www.instagram.com/atono.muebles?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==");
    });
  }
});