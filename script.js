// Hamburger Menu Functionality
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.main-nav');
    const navLinks = document.querySelectorAll('.main-nav a');

    // Toggle menu when hamburger is clicked
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        nav.classList.toggle('active');
    });

    // Close menu when a nav link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            nav.classList.remove('active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!hamburger.contains(event.target) && !nav.contains(event.target)) {
            hamburger.classList.remove('active');
            nav.classList.remove('active');
        }
    });

    // Close menu on window resize if open
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            hamburger.classList.remove('active');
            nav.classList.remove('active');
        }
    });

    // Section reveal on scroll
    function revealSections() {
        const reveals = document.querySelectorAll('.section-reveal');
        const windowHeight = window.innerHeight;
        reveals.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < windowHeight - 80) {
                section.classList.add('visible');
            }
        });
    }

    revealSections();
    window.addEventListener('scroll', revealSections);
});

// Back to Top Button functionality
const backToTopBtn = document.getElementById('backToTopBtn');
window.addEventListener('scroll', function() {
  if (window.scrollY > 200) {
    backToTopBtn.classList.add('show');
  } else {
    backToTopBtn.classList.remove('show');
  }
});
backToTopBtn.addEventListener('click', function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}); 