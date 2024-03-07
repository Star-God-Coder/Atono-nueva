addEventListener("DOMContentLoaded", function(){
  const carrusel = document.querySelector('.carrusel');
const imagenes = carrusel.querySelectorAll('img');
let indiceActual = 0;
let touchstartX = 0;
const Home = document.getElementsByClassName("home")

for (let i = 0; i < Home.length; i++) {
  Home[i].addEventListener("click", function() {
    window.location.href = "./index.html";
  });
}
// Función para mostrar la imagen
function mostrarImagen(indice) {
  // Si se llega a la última imagen, volver a la primera
  indiceActual = (indice + imagenes.length) % imagenes.length;

  imagenes.forEach((imagen, i) => {
    imagen.classList.toggle('activa', i === indiceActual);
  });

}


// Navegación por gestos
function manejarGestos(evento) {
  const touchX = evento.touches[0].clientX;
  const diferenciaX = touchX - touchstartX;

  if (diferenciaX > 50) {
    // Deslizar hacia la derecha (mostrar imagen anterior)
    mostrarImagen(indiceActual - 1);
  } else if (diferenciaX < -50) {
    // Deslizar hacia la izquierda (mostrar siguiente imagen)
    mostrarImagen(indiceActual + 1);
  }

  touchstartX = touchX; // Actualizar punto de inicio del gesto
}

carrusel.addEventListener('touchstart', (evento) => {
  touchstartX = evento.touches[0].clientX;
});

carrusel.addEventListener('touchmove', manejarGestos);

// Control de progreso (opcional)
// Puedes agregar una barra de progreso manual para indicar la imagen actual.

mostrarImagen(indiceActual);
  const wats = document.getElementsByClassName("whats");
  const insta = document.getElementsByClassName("insta")
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
  //const homeElement = document.querySelector(".Home");
  //homeElement.addEventListener("click", function() {
  //    open("./index.html");
  //})
});