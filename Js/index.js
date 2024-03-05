document.addEventListener("DOMContentLoaded", function() {
  const productos = document.querySelectorAll(".producto-filtrable");
  const buscador = document.getElementById("buscador");
  const contenedorResultados = document.getElementById("resultados");

  buscador.addEventListener("input", function() {
    const texto = buscador.value.toLowerCase();
    const productosFiltrados = [];

    productos.forEach(producto => {
      const nombre = producto.querySelector("p").textContent.toLowerCase();
      if (nombre.includes(texto)) {
        productosFiltrados.push(producto);
      }
    });
    
    mostrarResultados(productosFiltrados, contenedorResultados);
  });
  buscador.addEventListener("focusout", function() {
    const texto = buscador.value.toLowerCase();
  
    if (texto === "") {
      contenedorResultados.innerHTML = ""; // Limpia el contenedor
    }
  });
  productos.forEach(producto => {
    producto.addEventListener("click", function(e) {
      e.preventDefault();
      const idProducto = this.id;
      open(`./producto${idProducto}.html`);
    });
  });

  function mostrarResultados(productos, contenedor) {
    let resultadosHTML = ""; // Acumulador para los resultados

    if (productos.length === 0) {
      resultadosHTML = "<p>No se encontraron productos</p>";
    } else {
      productos.forEach(producto => {
        const idProducto = producto.id;
        const nombreProducto = producto.querySelector("p").textContent;
        const imgProducto = producto.querySelector("img").src;

        resultadosHTML += `
          <li>
            <a href="./producto${idProducto}.html">
              <img src="${imgProducto}" alt="${nombreProducto}">
              <p>${nombreProducto}</p>
            </a>
          </li>
        `;
      });
    }

    contenedor.innerHTML = resultadosHTML; // Asigna todos los resultados al contenedor
  }
  let insta = document.getElementsByClassName("insta")
  let wats = document.getElementsByClassName("whats")
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