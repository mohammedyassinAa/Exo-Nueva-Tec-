/* ========================================
   MOBILE NAVIGATION TOGGLE
   ======================================== */
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const navClose = document.getElementById('nav-close');
const navLinks = document.querySelectorAll('.nav-link');

// Show menu
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

// Hide menu
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}

// Close menu when clicking on nav links
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
});

/* ========================================
   ACTIVE LINK ON SCROLL
   ======================================== */
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 100;
        const sectionId = current.getAttribute('id');
        const sectionLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            sectionLink?.classList.add('active-link');
        } else {
            sectionLink?.classList.remove('active-link');
        }
    });
}

window.addEventListener('scroll', scrollActive);

/* ========================================
   HEADER BACKGROUND ON SCROLL
   ======================================== */
function scrollHeader() {
    const header = document.getElementById('header');
    // When the scroll is greater than 50 viewport height, add shadow
    if (this.scrollY >= 50) {
        header.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
    }
}

window.addEventListener('scroll', scrollHeader);

/* ========================================
   SMOOTH SCROLLING FOR ANCHOR LINKS
   ======================================== */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        
        // Only prevent default for internal links (not just "#")
        if (href !== '#' && href.startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(href);
            
            if (target) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = target.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        }
    });
});

/* ========================================
   SCROLL REVEAL ANIMATION (AOS-like)
   ======================================== */
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('aos-animate');
        }
    });
}, observerOptions);

// Observe all elements with data-aos attribute
document.querySelectorAll('[data-aos]').forEach(element => {
    observer.observe(element);
});

/* ========================================
   CONTACT FORM HANDLING
   ======================================== */
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(this);
        const name = formData.get('name');
        const email = formData.get('email');
        const phone = formData.get('phone');
        const message = formData.get('message');
        
        // Construct WhatsApp message
        let whatsappMessage = `Bonjour, je m'appelle ${name}.%0A`;
        whatsappMessage += `Email: ${email}%0A`;
        
        if (phone) {
            whatsappMessage += `Téléphone: ${phone}%0A`;
        }
        
        whatsappMessage += `%0AMessage:%0A${message}`;
        
        // Open WhatsApp with the message
        const whatsappUrl = `https://wa.me/212666342345?text=${whatsappMessage}`;
        window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
        
        // Reset form
        this.reset();
        
        // Show success message
        alert('Merci ! Vous allez être redirigé vers WhatsApp pour envoyer votre message.');
    });
}

/* ========================================
   LAZY LOADING FOR IMAGES (when added)
   ======================================== */
if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        img.src = img.dataset.src;
    });
} else {
    // Fallback for browsers that don't support lazy loading
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
    document.body.appendChild(script);
}

/* ========================================
   SCROLL TO TOP BUTTON (Optional Enhancement)
   ======================================== */
function createScrollTopButton() {
    const scrollTopBtn = document.createElement('button');
    scrollTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollTopBtn.className = 'scroll-top-btn';
    scrollTopBtn.setAttribute('aria-label', 'Retour en haut');
    scrollTopBtn.style.cssText = `
        position: fixed;
        bottom: 90px;
        right: 20px;
        width: 50px;
        height: 50px;
        background: linear-gradient(135deg, #D4AF37, #B8942A);
        color: #1a1a1a;
        border: none;
        border-radius: 50%;
        font-size: 1.25rem;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 998;
        box-shadow: 0 4px 16px rgba(212, 175, 55, 0.3);
    `;
    
    document.body.appendChild(scrollTopBtn);
    
    // Show/hide button based on scroll position
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollTopBtn.style.opacity = '1';
            scrollTopBtn.style.visibility = 'visible';
        } else {
            scrollTopBtn.style.opacity = '0';
            scrollTopBtn.style.visibility = 'hidden';
        }
    });
    
    // Scroll to top when clicked
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Hover effect
    scrollTopBtn.addEventListener('mouseenter', () => {
        scrollTopBtn.style.transform = 'scale(1.1)';
        scrollTopBtn.style.boxShadow = '0 6px 20px rgba(212, 175, 55, 0.5)';
    });
    
    scrollTopBtn.addEventListener('mouseleave', () => {
        scrollTopBtn.style.transform = 'scale(1)';
        scrollTopBtn.style.boxShadow = '0 4px 16px rgba(212, 175, 55, 0.3)';
    });
}

// Initialize scroll to top button
createScrollTopButton();

/* ========================================
   PRODUCT CARD INTERACTIONS
   ======================================== */
const productCards = document.querySelectorAll('.product-card');

productCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transition = 'all 0.3s ease';
    });
});

/* ========================================
   PERFORMANCE OPTIMIZATION
   ======================================== */
// Debounce function for scroll events
function debounce(func, wait = 10, immediate = true) {
    let timeout;
    return function() {
        const context = this;
        const args = arguments;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

// Apply debounce to scroll events
const debouncedScrollActive = debounce(scrollActive, 10);
const debouncedScrollHeader = debounce(scrollHeader, 10);

window.removeEventListener('scroll', scrollActive);
window.removeEventListener('scroll', scrollHeader);
window.addEventListener('scroll', debouncedScrollActive);
window.addEventListener('scroll', debouncedScrollHeader);

/* ========================================
   PRELOAD CRITICAL RESOURCES
   ======================================== */
// Preload fonts and critical assets
const preloadLinks = [
    'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Montserrat:wght@300;400;500;600;700&display=swap'
];

preloadLinks.forEach(href => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'style';
    link.href = href;
    document.head.appendChild(link);
});

/* ========================================
   LOADING STATE
   ======================================== */
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    
    // Trigger animations on page load
    const elementsToAnimate = document.querySelectorAll('[data-aos]');
    elementsToAnimate.forEach(element => {
        if (element.getBoundingClientRect().top < window.innerHeight) {
            element.classList.add('aos-animate');
        }
    });
});

/* ========================================
   ACCESSIBILITY ENHANCEMENTS
   ======================================== */
// Add keyboard navigation support
document.addEventListener('keydown', (e) => {
    // Close mobile menu with Escape key
    if (e.key === 'Escape' && navMenu.classList.contains('show-menu')) {
        navMenu.classList.remove('show-menu');
    }
});

// Add focus visible for better keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-nav');
    }
});

document.addEventListener('mousedown', () => {
    document.body.classList.remove('keyboard-nav');
});

/* ========================================
   CONSOLE MESSAGE
   ======================================== */
console.log('%c🕐 Exo Nueva Tec - Montres de Luxe', 
    'color: #D4AF37; font-size: 20px; font-weight: bold; padding: 10px;');
console.log('%cWebsite développé avec passion pour présenter les plus belles montres de luxe à Tétouan.', 
    'color: #666; font-size: 12px;');
