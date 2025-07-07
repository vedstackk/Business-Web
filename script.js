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

    // Smooth scroll with offset for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerHeight = document.querySelector('.header-container').offsetHeight;
                let offset;
                if (window.innerWidth <= 768) {
                    // Mobile-specific scroll adjustment with increased buffer
                    offset = headerHeight + 40; // Increased from 20px to 40px for more scroll
                } else {
                    offset = headerHeight + 20; // Kept desktop offset as is
                }
                const top = targetElement.getBoundingClientRect().top + window.scrollY - offset;
                window.scrollTo({ top: top, behavior: 'smooth' });
            }
        });
    });
});

// Back to Top Button logic
document.addEventListener('DOMContentLoaded', function () {
  const backToTop = document.getElementById('backToTop');
  if (backToTop) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 200) {
        backToTop.style.display = 'block';
      } else {
        backToTop.style.display = 'none';
      }
    });
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
});

// Remove any accidental text nodes or elements after the footer
document.addEventListener('DOMContentLoaded', function () {
  const footer = document.querySelector('footer');
  if (footer) {
    let node = footer.nextSibling;
    while (node) {
      let next = node.nextSibling;
      // Remove text nodes with any content (including whitespace) or any non-script elements
      if (
        (node.nodeType === Node.TEXT_NODE && node.textContent.trim() !== '') ||
        (node.nodeType === Node.ELEMENT_NODE && node.tagName !== 'SCRIPT')
      ) {
        node.parentNode.removeChild(node);
      }
      node = next;
    }
  }
});
