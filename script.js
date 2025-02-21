function showContent(contentId) {
  // Ocultar todos los contenidos
  const contents = document.querySelectorAll('.content');
  contents.forEach(content => {
    content.style.display = 'none';
  });

  // Mostrar el contenido seleccionado
  const selectedContent = document.getElementById(`content${contentId}`);
  if (selectedContent) {
    selectedContent.style.display = 'block';
  }

  // Remover la clase "active" de todos los elementos del menú
  const menuItems = document.querySelectorAll('.horizontal-list li');
  menuItems.forEach(item => {
    item.classList.remove('active');
  });

  // Agregar la clase "active" al elemento del menú correspondiente
  menuItems[contentId].classList.add('active');
}

// Mostrar el primer contenido por defecto cuando se carga la página
window.onload = function() {
  showContent(0); // Esto muestra el primer contenido (content0) por defecto
};



const imagenes = ["Imagenes/a1.jpg","Imagenes/a2.jpg", "Imagenes/a3.jpg", "Imagenes/a4.jpg"];
let indice = 0;

const img = document.getElementById("slider");
img.style.opacity = 1; // Asegurar que la imagen inicial es visible

function cambiarImagen() {
  img.style.transition = "opacity 1.5s ease-in-out"; // Aplicar la transición solo después de la primera imagen
  img.style.opacity = 1; // Ocultar la imagen antes del cambio

  setTimeout(() => {
    indice = (indice + 1) % imagenes.length;
    img.src = imagenes[indice]; // Cambiar la imagen
    img.style.opacity = 1; // Mostrar la imagen con la transición
  }, 500);
}

// Espera 3 segundos antes de iniciar el ciclo para evitar el salto inicial
setTimeout(() => {
  setInterval(cambiarImagen, 4000);
}, 4000);





// Listas de imágenes para cada slider
const images1 = ["Imagenes/f1.jpg", "Imagenes/f2.jpg", "Imagenes/f3.jpg"]; // Imágenes para slider1
const images2 = ["Imagenes/i1.jpg", "Imagenes/i2.jpg", "Imagenes/i3.jpg"]; // Imágenes para slider2

let index1 = 0;
let index2 = 0;

function changeImages() {
    // Obtén las imágenes del HTML
    let slider1 = document.getElementById("slider1");
    let slider2 = document.getElementById("slider2");

    // Cambia la imagen en slider1
    index1 = (index1 + 1) % images1.length; // Avanza en el array
    slider1.src = images1[index1];

    // Cambia la imagen en slider2
    index2 = (index2 + 1) % images2.length;
    slider2.src = images2[index2];
}

// Cambia las imágenes cada 3 segundos
setInterval(changeImages, 3000);



function searchText() {
  let searchTerm = document.getElementById("searchBox").value.trim();
  if (!searchTerm) return;

  // Limpiar marcas previas
  document.querySelectorAll(".highlight").forEach(el => {
      el.outerHTML = el.innerHTML;
  });

  let elements = document.querySelectorAll("p, h2, h3, h4");
  let firstMatch = null;

  elements.forEach(el => {
      let regex = new RegExp(`(${searchTerm})`, "gi");
      if (el.innerHTML.match(regex)) {
          el.innerHTML = el.innerHTML.replace(regex, '<span class="highlight">$1</span>');
          if (!firstMatch) firstMatch = el;
      }
  });

  // Hacer scroll al primer match
  if (firstMatch) {
      firstMatch.scrollIntoView({ behavior: "smooth", block: "center" });
  }
}






const imagenesSlider5 = ["Imagenes/p1.jpg", "Imagenes/p2.jpg", "Imagenes/p3.jpeg"];
let indiceSlider5 = 0;

const imgSlider5 = document.getElementById("slider5");

if (imgSlider5) {
  imgSlider5.style.opacity = 1; // Asegurar que la imagen inicial es visible

  function cambiarImagenSlider5() {
    imgSlider5.style.transition = "opacity 1.5s ease-in-out"; 
    imgSlider5.style.opacity = 0; // Desvanecer la imagen

    setTimeout(() => {
      indiceSlider5 = (indiceSlider5 + 1) % imagenesSlider5.length;  // Cambiar la imagen
      imgSlider5.src = imagenesSlider5[indiceSlider5]; 
      imgSlider5.style.opacity = 1; // Hacer visible la nueva imagen
    }, 1500); // Tiempo para el cambio de imagen (duración de la transición)
  }

  setInterval(cambiarImagenSlider5, 8000); // Cambiar imagen cada 4 segundos
  setTimeout(cambiarImagenSlider5, 8000);  // Ejecutar el primer cambio de imagen después de 4 segundos
} else {
  console.error("No se encontró la imagen con ID 'slider5'.");
}





const imagenesSlider6 = ["Logos/gecologo.png", "Logos/logoae.png"];
let indiceSlider6 = 0;

const imgSlider6 = document.getElementById("slider6");

if (imgSlider6) {
  imgSlider6.style.opacity = 1; // Asegurar que la imagen inicial es visible

  function cambiarImagenSlider6() {
    imgSlider6.style.transition = "opacity 1.5s ease-in-out"; 
    imgSlider6.style.opacity = 0; // Desvanecer la imagen

    setTimeout(() => {
      indiceSlider6 = (indiceSlider6 + 1) % imagenesSlider6.length;  // Cambiar la imagen
      imgSlider6.src = imagenesSlider6[indiceSlider6]; 
      imgSlider6.style.opacity = 1; // Hacer visible la nueva imagen
    }, 1500); // Tiempo para el cambio de imagen (duración de la transición)
  }

  setInterval(cambiarImagenSlider6, 4000); // Cambiar imagen cada 4 segundos
  setTimeout(cambiarImagenSlider6, 4000);  // Ejecutar el primer cambio de imagen después de 4 segundos
} else {
  console.error("No se encontró la imagen con ID 'slider6'.");
}






