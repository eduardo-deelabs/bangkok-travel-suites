/**
 * Bangkok Travel Suites Hotel - Main JavaScript
 * GSAP animations, scroll effects, and interactions
 */

(function() {
    'use strict';

    // Register GSAP ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // DOM Elements
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');
    const backToTop = document.getElementById('backToTop');

    // ========================================
    // NAVBAR SCROLL EFFECT
    // ========================================
    function handleScroll() {
        const scrollY = window.scrollY;
        
        if (scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        if (scrollY > 500) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    }

    window.addEventListener('scroll', handleScroll, { passive: true });

    // ========================================
    // MOBILE MENU
    // ========================================
    function toggleMenu() {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    }

    navToggle.addEventListener('click', toggleMenu);

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                toggleMenu();
            }
        });
    });

    document.addEventListener('click', (e) => {
        if (navMenu.classList.contains('active') && 
            !navMenu.contains(e.target) && 
            !navToggle.contains(e.target)) {
            toggleMenu();
        }
    });

    // ========================================
    // BACK TO TOP
    // ========================================
    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // ========================================
    // ACTIVE NAV LINK ON SCROLL
    // ========================================
    const sections = document.querySelectorAll('section[id]');

    function highlightNav() {
        const scrollY = window.scrollY + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === '#' + sectionId) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', highlightNav, { passive: true });

    // ========================================
    // HERO ENTRANCE ANIMATIONS
    // ========================================
    const heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    
    heroTl
        .from('.hero-badge', { opacity: 0, y: 30, duration: 0.8 }, 0.2)
        .from('.hero-title', { opacity: 0, y: 50, duration: 1 }, 0.4)
        .from('.hero-subtitle', { opacity: 0, y: 40, duration: 0.8 }, 0.6)
        .from('.hero-cta', { opacity: 0, y: 30, duration: 0.8 }, 0.8)
        .from('.hero-trust', { opacity: 0, y: 30, duration: 0.8 }, 1.0)
        .from('.scroll-indicator', { opacity: 0, duration: 1 }, 1.2);

    // Hero parallax effect on scroll
    gsap.to('.hero-img', {
        yPercent: 30,
        ease: 'none',
        scrollTrigger: {
            trigger: '.hero',
            start: 'top top',
            end: 'bottom top',
            scrub: true
        }
    });

    gsap.to('.hero-content', {
        yPercent: -20,
        opacity: 0,
        ease: 'none',
        scrollTrigger: {
            trigger: '.hero',
            start: 'top top',
            end: '50% top',
            scrub: true
        }
    });

    // ========================================
    // ABOUT SECTION ANIMATIONS
    // ========================================
    gsap.from('.about-content', {
        x: -60,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '.about',
            start: 'top 80%',
            toggleActions: 'play none none none'
        }
    });

    gsap.from('.about-visual', {
        x: 60,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '.about',
            start: 'top 80%',
            toggleActions: 'play none none none'
        }
    });

    gsap.from('.about-stats .stat-item', {
        y: 30,
        duration: 0.6,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '.about-stats',
            start: 'top 90%',
            toggleActions: 'play none none none'
        }
    });

    // ========================================
    // SECTION HEADER ANIMATIONS (reusable)
    // ========================================
    const sectionHeaders = document.querySelectorAll('.section-header');
    
    sectionHeaders.forEach(header => {
        gsap.from(header.children, {
            y: 40,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: header,
                start: 'top 85%',
                toggleActions: 'play none none none'
            }
        });
    });

    // ========================================
    // ROOM CARDS STAGGER ANIMATION
    // ========================================
    gsap.from('.room-card', {
        y: 80,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '.rooms-grid',
            start: 'top 80%',
            toggleActions: 'play none none none'
        }
    });

    // Room card hover image zoom
    document.querySelectorAll('.room-card').forEach(card => {
        const img = card.querySelector('.room-img');
        if (img) {
            card.addEventListener('mouseenter', () => {
                gsap.to(img, { scale: 1.1, duration: 0.5, ease: 'power2.out' });
            });
            card.addEventListener('mouseleave', () => {
                gsap.to(img, { scale: 1, duration: 0.5, ease: 'power2.out' });
            });
        }
    });

    // ========================================
    // SERVICES STAGGER ANIMATION
    // ========================================
    gsap.from('.service-card', {
        y: 60,
        scale: 0.9,
        duration: 0.6,
        stagger: 0.1,
        ease: 'back.out(1.7)',
        scrollTrigger: {
            trigger: '.services-grid',
            start: 'top 80%',
            toggleActions: 'play none none none'
        }
    });

    gsap.from('.service-icon', {
        scale: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: 'elastic.out(1, 0.5)',
        scrollTrigger: {
            trigger: '.services-grid',
            start: 'top 75%',
            toggleActions: 'play none none none'
        }
    });

    // ========================================
    // LOCATION CARDS ANIMATION
    // ========================================
    gsap.from('.location-card', {
        x: -40,
        duration: 0.6,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '.location-info',
            start: 'top 80%',
            toggleActions: 'play none none none'
        }
    });

    gsap.from('.nearby-tags .tag', {
        scale: 0.8,
        duration: 0.4,
        stagger: 0.08,
        ease: 'back.out(1.7)',
        scrollTrigger: {
            trigger: '.nearby-tags',
            start: 'top 90%',
            toggleActions: 'play none none none'
        }
    });

    gsap.from('.location-map', {
        x: 60,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '.location-grid',
            start: 'top 80%',
            toggleActions: 'play none none none'
        }
    });

    // ========================================
    // ATTRACTIONS ANIMATION
    // ========================================
    gsap.from('.attraction-card', {
        y: 80,
        rotateY: 10,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '.attractions-grid',
            start: 'top 80%',
            toggleActions: 'play none none none'
        }
    });

    // ========================================
    // CONTACT SECTION ANIMATION
    // ========================================
    gsap.from('.contact-info', {
        x: -60,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '.contact-grid',
            start: 'top 80%',
            toggleActions: 'play none none none'
        }
    });

    gsap.from('.contact-method', {
        x: -30,
        duration: 0.6,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '.contact-methods',
            start: 'top 85%',
            toggleActions: 'play none none none'
        }
    });

    gsap.from('.contact-form-wrapper', {
        x: 60,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '.contact-grid',
            start: 'top 80%',
            toggleActions: 'play none none none'
        }
    });

    // ========================================
    // FOOTER ANIMATION
    // ========================================
    gsap.from('.footer-grid > div', {
        y: 40,
        duration: 0.6,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '.footer',
            start: 'top 90%',
            toggleActions: 'play none none none'
        }
    });

    // ========================================
    // FLOATING CTA ANIMATION
    // ========================================
    gsap.from('.floating-cta', {
        x: 50,
        duration: 0.8,
        delay: 2,
        ease: 'back.out(1.7)'
    });

    gsap.to('.floating-cta', {
        scale: 1.05,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut'
    });

    // ========================================
    // SMOOTH SCROLL FOR ANCHOR LINKS
    // ========================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                const offset = 80;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ========================================
    // COPY LINE ID
    // ========================================
    window.copyLineId = function() {
        const lineId = document.getElementById('lineId').textContent;
        
        navigator.clipboard.writeText(lineId).then(() => {
            showToast('LINE ID copied: ' + lineId);
        }).catch(err => {
            const textarea = document.createElement('textarea');
            textarea.value = lineId;
            textarea.style.position = 'fixed';
            textarea.style.opacity = '0';
            document.body.appendChild(textarea);
            textarea.select();
            
            try {
                document.execCommand('copy');
                showToast('LINE ID copied: ' + lineId);
            } catch (err) {
                showToast('LINE ID: ' + lineId);
            }
            
            document.body.removeChild(textarea);
        });
    };

    // ========================================
    // TOAST NOTIFICATION
    // ========================================
    function showToast(message) {
        const existingToast = document.querySelector('.toast-notification');
        if (existingToast) {
            existingToast.remove();
        }

        const toast = document.createElement('div');
        toast.className = 'toast-notification';
        toast.innerHTML = `
            <i class="fas fa-check-circle"></i>
            <span>${message}</span>
        `;
        toast.style.cssText = `
            position: fixed;
            bottom: 100px;
            left: 50%;
            transform: translateX(-50%) translateY(20px);
            background: var(--color-navy);
            color: white;
            padding: 14px 24px;
            border-radius: 50px;
            display: flex;
            align-items: center;
            gap: 10px;
            font-size: 0.9rem;
            font-weight: 500;
            box-shadow: 0 4px 20px rgba(0,0,0,0.2);
            z-index: 10000;
            opacity: 0;
            transition: all 0.3s ease;
        `;
        
        document.body.appendChild(toast);
        
        requestAnimationFrame(() => {
            toast.style.opacity = '1';
            toast.style.transform = 'translateX(-50%) translateY(0)';
        });

        setTimeout(() => {
            toast.style.opacity = '0';
            toast.style.transform = 'translateX(-50%) translateY(20px)';
            setTimeout(() => toast.remove(), 300);
        }, 3000);
    }

    // ========================================
    // MAGNETIC CURSOR EFFECT (desktop only)
    // ========================================
    if (window.matchMedia('(pointer: fine)').matches) {
        document.querySelectorAll('.btn, .room-card, .service-card, .attraction-card').forEach(el => {
            el.addEventListener('mousemove', (e) => {
                const rect = el.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                
                gsap.to(el, {
                    x: x * 0.1,
                    y: y * 0.1,
                    duration: 0.3,
                    ease: 'power2.out'
                });
            });
            
            el.addEventListener('mouseleave', () => {
                gsap.to(el, {
                    x: 0,
                    y: 0,
                    duration: 0.5,
                    ease: 'elastic.out(1, 0.5)'
                });
            });
        });
    }

    // ========================================
    // INITIALIZE
    // ========================================
    handleScroll();
    highlightNav();

    window.addEventListener('resize', () => {
        ScrollTrigger.refresh();
    });

    console.log('🏨 Bangkok Travel Suites Hotel - Website loaded with GSAP animations!');
})();
