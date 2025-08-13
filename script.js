
// Smooth scroll navigation
document.addEventListener('DOMContentLoaded', function () {
    
    // Get all navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                const headerHeight = 80; // Height of fixed header
                const targetPosition = targetSection.offsetTop - headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Carousel functionality
    const track = document.getElementById('carousel-track');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const indicators = document.querySelectorAll('.carousel-indicator');

    let currentSlide = 1;
    const totalSlides = 8;

    function updateCarousel() {
        const translateX =- currentSlide * 25; // 25% per slide
        track.style.transform = `translateX(${translateX}%)`;

        // Update indicators
        indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === currentSlide);
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateCarousel();
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        updateCarousel();
    }

    // Event listeners
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);

    // Indicator clicks
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            currentSlide = index;
            updateCarousel();
        });
    });

    // Auto-play carousel
    // setInterval(nextSlide, 5000);

    // Mobile Menu functionality
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuPanel = document.getElementById('mobile-menu-panel');
    const mobileMenuClose = document.getElementById('mobile-menu-close');
    const mobileMenuBackdrop = document.getElementById('mobile-menu-backdrop');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

    function openMobileMenu() {
        mobileMenu.classList.add('mobile-menu-show');
        mobileMenuBtn.classList.add('mobile-menu-open');
        setTimeout(() => {
            mobileMenuPanel.classList.add('mobile-menu-panel-show');
        }, 10);
        document.body.style.overflow = 'hidden';
    }

    function closeMobileMenu() {
        mobileMenuPanel.classList.remove('mobile-menu-panel-show');
        mobileMenuBtn.classList.remove('mobile-menu-open');
        setTimeout(() => {
            mobileMenu.classList.remove('mobile-menu-show');
            document.body.style.overflow = '';
        }, 300);
    }

    // Event listeners for mobile menu
    mobileMenuBtn.addEventListener('click', openMobileMenu);
    mobileMenuClose.addEventListener('click', closeMobileMenu);
    mobileMenuBackdrop.addEventListener('click', closeMobileMenu);

    // Close menu when clicking on navigation links
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            setTimeout(closeMobileMenu, 100); // Small delay for smooth transition
        });
    });

    // Close menu on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && mobileMenu.classList.contains('mobile-menu-show')) {
            closeMobileMenu();
        }
    });
});

const frasesMontessori = [
    "Ayúdame a hacerlo por mí mismo.",
    "La educación es un proceso natural.",
    "El niño es el constructor del hombre.",
    "La mano es el instrumento de la mente.",
    "Sembrad en los niños ideas buenas.",
    "Educar no es llenar un vaso.",
    "La primera tarea de la educación es agitar la vida.",
    "El niño que ha aumentado su propio conocimiento se siente satisfecho.",
    "El trabajo del niño es construir al hombre.",
    "La mente del niño es absorbente por naturaleza.",
    "Respetar al niño es respetar su desarrollo.",
    "El movimiento ayuda al desarrollo de la mente.",
    "El niño necesita libertad para desarrollarse bien.",
    "La disciplina nace de la libertad interior.",
    "El niño se educa con lo que vive.",
    "El niño aprende más del ambiente que del maestro.",
    "La observación es clave en la educación Montessori.",
    "La educación empieza desde el nacimiento.",
    "No se puede educar sin amor.",
    "El niño es una promesa de humanidad."
  ];
  // Seleccionamos todos los sliders
  const sliders = document.querySelectorAll('.carousel-slide .montessori-phrase');

  // Creamos una copia de frases para evitar repeticiones exactas (opcional)
  const frasesDisponibles = [...frasesMontessori];

  sliders.forEach(slide => {
    // Si ya no quedan frases únicas, reiniciamos
    if (frasesDisponibles.length === 0) {
      frasesDisponibles.push(...frasesMontessori);
    }

    // Elegir una frase aleatoria
    const index = Math.floor(Math.random() * frasesDisponibles.length);
    const frase = frasesDisponibles.splice(index, 1)[0]; // Evita repetir

    // Asignarla al texto del slider
    slide.textContent = `"${frase}"`;
  });

