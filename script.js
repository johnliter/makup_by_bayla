document.addEventListener('DOMContentLoaded', function () {
    // Lightbox functionality
    var lightbox = document.getElementById('lightbox');
    var lightboxImg = document.getElementById('lightbox-img');

    lightbox.style.display = 'none';

    var galleryImages = document.querySelectorAll('.gallery img');
    galleryImages.forEach(function (img) {
        img.addEventListener('click', function () {
            lightbox.style.display = 'flex';
            lightboxImg.src = this.src;
        });
    });

    lightbox.addEventListener('click', function (event) {
        if (event.target === lightbox || event.target === lightboxImg) {
            lightbox.style.display = 'none';
        }
    });

    // Return to the Top button functionality
    var topBtn = document.getElementById("topBtn");

    window.onscroll = function() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            topBtn.classList.remove('opacity-0');
            topBtn.classList.add('opacity-100');
        } else {
            topBtn.classList.remove('opacity-100');
            topBtn.classList.add('opacity-0');
        }
    };

    topBtn.addEventListener('click', function() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    });

    // Initialize SimpleLightbox
    var lightbox = new SimpleLightbox('.lightbox', {});
});
