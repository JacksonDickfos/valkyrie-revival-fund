// Initialize GSAP and ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all animations
    initAnimations();
    initParallaxEffects();
    initFormHandling();
    initSmoothScrolling();
    initFloatingElements();
});

// Initialize all GSAP animations
function initAnimations() {
    // Hero section animations
    const heroTimeline = gsap.timeline();
    
    heroTimeline
        .from('.hero-helm', {
            duration: 1.5,
            scale: 0,
            rotation: 360,
            ease: "back.out(1.7)"
        })
        .from('.hero-title', {
            duration: 1,
            y: 50,
            opacity: 0,
            ease: "power3.out"
        }, "-=0.5")
        .from('.hero-tagline', {
            duration: 1,
            y: 30,
            opacity: 0,
            ease: "power3.out"
        }, "-=0.3")
        .from('.hero-message', {
            duration: 1,
            y: 30,
            opacity: 0,
            ease: "power3.out"
        }, "-=0.3")
        .from('.hero-cta', {
            duration: 1,
            y: 30,
            opacity: 0,
            ease: "power3.out"
        }, "-=0.3");

    // Floating triangles animation
    gsap.to('.triangle-1', {
        y: -50,
        rotation: 360,
        duration: 8,
        repeat: -1,
        ease: "none"
    });

    gsap.to('.triangle-2', {
        y: -30,
        rotation: -360,
        duration: 10,
        repeat: -1,
        ease: "none"
    });

    gsap.to('.triangle-3', {
        y: -40,
        rotation: 180,
        duration: 12,
        repeat: -1,
        ease: "none"
    });

    // Strategy cards animation
    gsap.from('.strategy-card', {
        duration: 1,
        y: 100,
        opacity: 0,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
            trigger: '.strategy',
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
        }
    });

    // Stats animation
    gsap.from('.stat-item', {
        duration: 1,
        scale: 0,
        opacity: 0,
        stagger: 0.2,
        ease: "back.out(1.7)",
        scrollTrigger: {
            trigger: '.about-stats',
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
        }
    });

    // Form animation
    gsap.from('.invest-form-container', {
        duration: 1,
        x: -100,
        opacity: 0,
        ease: "power3.out",
        scrollTrigger: {
            trigger: '.invest',
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
        }
    });

    gsap.from('.info-card', {
        duration: 1,
        x: 100,
        opacity: 0,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
            trigger: '.invest-info',
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
        }
    });
}

// Initialize parallax effects
function initParallaxEffects() {
    // Hero background parallax
    gsap.to('.hero-background', {
        yPercent: -50,
        ease: "none",
        scrollTrigger: {
            trigger: '.hero',
            start: "top bottom",
            end: "bottom top",
            scrub: true
        }
    });

    // Floating triangles parallax
    gsap.to('.floating-triangles', {
        yPercent: -30,
        ease: "none",
        scrollTrigger: {
            trigger: '.hero',
            start: "top bottom",
            end: "bottom top",
            scrub: true
        }
    });

    // Strategy section parallax
    gsap.to('.strategy', {
        backgroundPosition: "50% 100%",
        ease: "none",
        scrollTrigger: {
            trigger: '.strategy',
            start: "top bottom",
            end: "bottom top",
            scrub: true
        }
    });

    // Invest section parallax
    gsap.to('.invest', {
        backgroundPosition: "50% 0%",
        ease: "none",
        scrollTrigger: {
            trigger: '.invest',
            start: "top bottom",
            end: "bottom top",
            scrub: true
        }
    });
}

// Initialize floating elements
function initFloatingElements() {
    // Helm glow effect
    gsap.to('.hero-helm', {
        filter: "drop-shadow(0 0 30px rgba(137, 213, 228, 0.8))",
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut"
    });

    // Spark animations
    gsap.to('.hero-spark', {
        scale: 1.5,
        opacity: 0.7,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut"
    });

    // Logo icon hover effect
    const logoIcon = document.querySelector('.logo-icon');
    if (logoIcon) {
        logoIcon.addEventListener('mouseenter', () => {
            gsap.to('.logo-image', {
                scale: 1.1,
                rotation: 5,
                duration: 0.3,
                ease: "power2.out"
            });
        });

        logoIcon.addEventListener('mouseleave', () => {
            gsap.to('.logo-image', {
                scale: 1,
                rotation: 0,
                duration: 0.3,
                ease: "power2.out"
            });
        });
    }

    // Strategy card hover effects
    const strategyCards = document.querySelectorAll('.strategy-card');
    strategyCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            gsap.to(card, {
                y: -20,
                scale: 1.02,
                duration: 0.3,
                ease: "power2.out"
            });
        });

        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                y: 0,
                scale: 1,
                duration: 0.3,
                ease: "power2.out"
            });
        });
    });
}

// Initialize form handling
function initFormHandling() {
    const form = document.getElementById('investForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(form);
            const data = Object.fromEntries(formData);
            
            // Show success message
            showFormSuccess();
            
            // Reset form
            form.reset();
        });
    }

    // Form input focus effects
    const formInputs = document.querySelectorAll('.form-input, .form-select, .form-textarea');
    formInputs.forEach(input => {
        input.addEventListener('focus', () => {
            gsap.to(input, {
                scale: 1.02,
                duration: 0.2,
                ease: "power2.out"
            });
        });

        input.addEventListener('blur', () => {
            gsap.to(input, {
                scale: 1,
                duration: 0.2,
                ease: "power2.out"
            });
        });
    });
}

// Show form success message
function showFormSuccess() {
    // Create success message element
    const successMessage = document.createElement('div');
    successMessage.className = 'success-message';
    successMessage.innerHTML = `
        <div class="success-content">
            <div class="success-icon">✓</div>
            <h3>Investment Interest Submitted</h3>
            <p>Thank you for your interest in Valkyrie Revival Fund. Our team will contact you within 24 hours.</p>
        </div>
    `;

    // Add styles
    successMessage.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: var(--dark-charcoal);
        border: 2px solid var(--spark-cyan);
        border-radius: 20px;
        padding: 3rem;
        text-align: center;
        z-index: 10000;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
        max-width: 500px;
        width: 90%;
    `;

    // Add to page
    document.body.appendChild(successMessage);

    // Animate in
    gsap.fromTo(successMessage, {
        scale: 0,
        opacity: 0
    }, {
        scale: 1,
        opacity: 1,
        duration: 0.5,
        ease: "back.out(1.7)"
    });

    // Remove after 5 seconds
    setTimeout(() => {
        gsap.to(successMessage, {
            scale: 0,
            opacity: 0,
            duration: 0.3,
            ease: "power2.in",
            onComplete: () => {
                document.body.removeChild(successMessage);
            }
        });
    }, 5000);
}

// Initialize smooth scrolling
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('.nav-link, .footer-link');
    
    console.log('Found navigation links:', navLinks.length);
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            console.log('Clicked link:', targetId);
            
            const targetSection = document.querySelector(targetId);
            console.log('Found target section:', targetSection);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar
                console.log('Scrolling to offset:', offsetTop);
                
                // Use native smooth scrolling instead of GSAP
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            } else {
                console.log('Target section not found for:', targetId);
            }
        });
    });
}

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    const scrollTop = window.pageYOffset;
    
    if (scrollTop > 100) {
        navbar.style.background = 'rgba(24, 24, 43, 0.95)';
        navbar.style.backdropFilter = 'blur(20px)';
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
    } else {
        navbar.style.background = 'transparent';
        navbar.style.backdropFilter = 'none';
        navbar.style.boxShadow = 'none';
    }
});

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', function() {
    const animateElements = document.querySelectorAll('.strategy-card, .stat-item, .info-card');
    animateElements.forEach(el => observer.observe(el));
});

// Add CSS for animate-in class
const style = document.createElement('style');
style.textContent = `
    .animate-in {
        animation: fadeInUp 0.8s ease-out forwards;
    }
    
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .success-icon {
        font-size: 3rem;
        color: var(--spark-cyan);
        margin-bottom: 1rem;
    }
    
    .success-content h3 {
        color: var(--cold-white);
        margin-bottom: 1rem;
        font-family: var(--font-primary);
    }
    
    .success-content p {
        color: var(--steel-silver);
        line-height: 1.6;
    }
`;
document.head.appendChild(style);

// Performance optimization: Throttle scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Apply throttling to scroll events
window.addEventListener('scroll', throttle(function() {
    // Scroll-based animations can go here
}, 16)); // 60fps 