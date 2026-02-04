document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Animasi Scroll (Muncul saat digulir)
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right').forEach((el) => {
        observer.observe(el);
    });

    // 2. Lightbox (Zoom Foto)
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const caption = document.getElementById('caption');

    document.querySelectorAll('.gallery-item img').forEach(img => {
        img.addEventListener('click', () => {
            lightbox.style.display = "flex";
            lightboxImg.src = img.src;
            caption.innerText = img.nextElementSibling.querySelector('h3').innerText;
        });
    });

    document.querySelector('.close-lightbox').addEventListener('click', () => {
        lightbox.style.display = "none";
    });

    lightbox.addEventListener('click', (e) => {
        if(e.target === lightbox) lightbox.style.display = "none";
    });
});