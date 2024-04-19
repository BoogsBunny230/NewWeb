             document.addEventListener('DOMContentLoaded', () => {
            // Inicializar el carrusel
            const elementosCarousel = document.querySelectorAll('.carousel');
            const opcionesCarousel = {
                duration: 100,
                dist: -380,
                shift: 5,
                numVisible: 5,
                indicators: true,   
            };
            
            const carruseles = M.Carousel.init(elementosCarousel, opcionesCarousel);
            
            // Función para iniciar la reproducción automática
            function iniciarAutoplay() {
                // Configura un temporizador para llamar a la función next() cada 3 segundos (3000 ms)
                setInterval(() => {
                    carruseles[0].next(); // Avanza a la siguiente imagen del carrusel
                }, 5000);
            }
            
            // Llamar a la función para iniciar la reproducción automática
            iniciarAutoplay();
        });
        