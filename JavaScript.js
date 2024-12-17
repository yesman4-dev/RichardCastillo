document.addEventListener('DOMContentLoaded', function () {
  const carouselTrack = document.querySelector('.carousel-track');
  const carouselImages = document.querySelectorAll('.carousel-img');
  const prevButton = document.querySelector('.carousel-btn.prev');
  const nextButton = document.querySelector('.carousel-btn.next');
  const lightbox = document.getElementById('lightbox');
  const lightboxImage = document.getElementById('lightbox-img');
  const lightboxClose = document.querySelector('.lightbox-close');

  const visibleImages = 4; // Número de imágenes visibles a la vez
  const width = carouselImages[0].getBoundingClientRect().width; // Ancho de cada imagen
  let currentIndex = 0;

  // Actualizar carrusel
  function updateCarousel() {
    const totalWidth = width * visibleImages; // Total del ancho para mover el carrusel
    carouselTrack.style.transform = `translateX(-${currentIndex * width * visibleImages}px)`;
  }

  // Botones del carrusel
  prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateCarousel();
    }
  });

  nextButton.addEventListener('click', () => {
    if (currentIndex < carouselImages.length - visibleImages) {
      currentIndex++;
      updateCarousel();
    }
  });

  // Mostrar imagen en el lightbox
  carouselImages.forEach(img => {
    img.addEventListener('click', () => {
      lightbox.style.display = 'flex';
      lightboxImage.src = img.src;
    });
  });

  // Cerrar lightbox con el botón de cerrar
  lightboxClose.addEventListener('click', () => {
    lightbox.style.display = 'none';
  });

  // Cerrar lightbox al hacer clic fuera de la imagen
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      lightbox.style.display = 'none';
    }
  });

  // Cerrar lightbox al presionar "Escape"
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      lightbox.style.display = 'none';
    }
  });

  // Inicializar el carrusel
  updateCarousel();
});


function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('show');
}




// contact.js
function sendEmail() {
   

  let parms = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      message: document.getElementById('message').value
  };

  emailjs.send('service_nu0v3io', 'template_flk15em', parms)
      .then(function(response) {
          console.log('SUCCESS!', response.status, response.text);
          alert('Mensaje enviado correctamente');
          // Limpiar el formulario después del envío
          document.getElementById('contactForm').reset();
      }, function(error) {
          console.log('FAILED...', error);
          alert('Error al enviar el mensaje. Por favor intenta nuevamente.');
      });
}