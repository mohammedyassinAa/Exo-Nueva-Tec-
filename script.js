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
   SCROLL PROGRESS INDICATOR
   ======================================== */
function updateScrollProgress() {
    const scrollProgress = document.getElementById('scrollProgress');
    if (scrollProgress) {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        scrollProgress.style.width = scrollPercent + '%';
    }
}

window.addEventListener('scroll', updateScrollProgress, { passive: true });

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
    'color: #FFD700; font-size: 20px; font-weight: bold; padding: 10px;');
console.log('%cWebsite développé avec passion pour présenter les plus belles montres de luxe à Tétouan.', 
    'color: #666; font-size: 12px;');

/* ========================================
   ENHANCED ANIMATIONS & INTERACTIONS
   ======================================== */

// Add staggered animation to brand cards
document.addEventListener('DOMContentLoaded', () => {
    const brandCards = document.querySelectorAll('.brand-card');
    brandCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });
});

// Enhanced hover effect for category cards
const categoryCards = document.querySelectorAll('.category-card');
categoryCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = '';
    });
});

// Smooth reveal animation for service cards
const serviceCards = document.querySelectorAll('.service-card');
serviceCards.forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.05}s`;
});

// Parallax effect on scroll for hero section
let ticking = false;
function updateParallax() {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    
    if (hero && window.innerWidth > 768) {
        hero.style.backgroundPositionY = `${scrolled * 0.5}px`;
    }
    
    ticking = false;
}

window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(updateParallax);
        ticking = true;
    }
});

// Add ripple effect to buttons
function createRipple(event) {
    const button = event.currentTarget;
    const circle = document.createElement('span');
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;
    
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
    circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
    circle.classList.add('ripple');
    
    const ripple = button.getElementsByClassName('ripple')[0];
    if (ripple) {
        ripple.remove();
    }
    
    button.appendChild(circle);
}

const buttons = document.querySelectorAll('.btn, .btn-product, .category-link');
buttons.forEach(button => {
    button.addEventListener('click', createRipple);
});

// Add CSS for ripple effect dynamically
const rippleStyle = document.createElement('style');
rippleStyle.innerHTML = `
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple-animation 0.6s ease-out;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(rippleStyle);

// Animated counter effect (if needed for stats in the future)
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start);
        }
    }, 16);
}

// Enhanced WhatsApp button animation
const whatsappFloat = document.querySelector('.whatsapp-float');
if (whatsappFloat) {
    // Add pulse effect with interaction awareness
    whatsappFloat.addEventListener('mouseenter', () => {
        whatsappFloat.style.animation = 'none';
    });
    
    whatsappFloat.addEventListener('mouseleave', () => {
        whatsappFloat.style.animation = 'pulse-whatsapp 2s infinite';
    });
}

// Add active state to navigation on mobile touch
navLinks.forEach(link => {
    link.addEventListener('touchstart', function() {
        this.style.backgroundColor = 'rgba(255, 215, 0, 0.2)';
    });
    
    link.addEventListener('touchend', function() {
        setTimeout(() => {
            this.style.backgroundColor = '';
        }, 300);
    });
});

// Optimize scroll performance for mobile
let lastScrollTop = 0;
const header = document.getElementById('header');

if (header) {
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // Scrolling down
            header.style.transform = 'translateY(-100%)';
        } else {
            // Scrolling up
            header.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    }, { passive: true });
}

// Add touch feedback for all interactive elements on mobile
if ('ontouchstart' in window) {
    const interactiveElements = document.querySelectorAll('.brand-card, .category-card, .service-card, .contact-card');
    
    interactiveElements.forEach(element => {
        element.addEventListener('touchstart', function() {
            this.style.transform = 'scale(0.98)';
        }, { passive: true });
        
        element.addEventListener('touchend', function() {
            setTimeout(() => {
                this.style.transform = '';
            }, 100);
        }, { passive: true });
    });
}

// Lazy load images with fade-in effect
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.style.opacity = '0';
                img.style.transition = 'opacity 0.5s ease';
                
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.onload = () => {
                        img.style.opacity = '1';
                    };
                } else {
                    img.style.opacity = '1';
                }
                
                observer.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img').forEach(img => {
        imageObserver.observe(img);
    });
}

// Performance optimization: Request idle callback for non-critical tasks
if ('requestIdleCallback' in window) {
    requestIdleCallback(() => {
        // Preload next section backgrounds
        const sections = document.querySelectorAll('.section');
        sections.forEach(section => {
            const bgImage = window.getComputedStyle(section).backgroundImage;
            if (bgImage && bgImage !== 'none') {
                const img = new Image();
                img.src = bgImage.slice(5, -2);
            }
        });
    });
}
