// script.js
document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }

            // Cerrar menú móvil
            document.getElementById('nav-menu')?.classList.remove('active');
            document.getElementById('menu-toggle')?.classList.remove('active');
        });
    });

    // Menú móvil
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');

    menuToggle?.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        menuToggle.classList.toggle('active');
        menuToggle.setAttribute('aria-expanded', navMenu.classList.contains('active'));
    });

    // Acordeón FAQ
    document.querySelectorAll('.faq-question').forEach(question => {
        question.addEventListener('click', () => {
            const item = question.parentElement;
            const isActive = item.classList.contains('active');

            document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));

            if (!isActive) {
                item.classList.add('active');
            }
        });
    });

    // Formulario → WhatsApp
    document.getElementById('quote-form')?.addEventListener('submit', e => {
        e.preventDefault();

        const name    = document.getElementById('name').value.trim();
        const date    = document.getElementById('date').value;
        const comuna  = document.getElementById('comuna').value.trim();
        const pack    = document.getElementById('pack').value;
        const comment = document.getElementById('comment').value.trim();

        if (!name || !date || !comuna || !pack) {
            alert('Por favor completa los campos obligatorios');
            return;
        }

        let msg = `Hola ElhiKids 👋\n\n`;
        msg += `Soy ${name}\n`;
        msg += `Quiero cotizar el Pack ${pack}\n`;
        msg += `Fecha: ${date}\n`;
        msg += `Comuna: ${comuna}\n`;
        if (comment) msg += `Comentario: ${comment}\n\n`;
        msg += `Gracias! 😊`;

        const url = `https://wa.me/56998765432?text=${encodeURIComponent(msg)}`;
        window.open(url, '_blank');
    });

    // Animación scroll
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('section').forEach(sec => observer.observe(sec));
});