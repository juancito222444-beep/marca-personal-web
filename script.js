// Enhanced Website JavaScript - Premium Interactions

// Smooth scroll for anchor links
document.querySelectorAll('a[href="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Active nav link on scroll
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });
    
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Hamburger menu toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
    
    // Close menu when link is clicked
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
}

// Counter animation for stats
const animateCounter = (element) => {
    const target = parseInt(element.getAttribute('data-target')) || 0;
    const duration = 2000;
    const start = Date.now();
    
    const updateCounter = () => {
        const progress = (Date.now() - start) / duration;
        if (progress < 1) {
            const current = Math.floor(target * progress);
            element.textContent = current + '+';
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target + '+';
        }
    };
    
    updateCounter();
};

// Intersection Observer for lazy animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            
            // Trigger counter animation
            const counters = entry.target.querySelectorAll('[data-target]');
            counters.forEach(counter => {
                if (!counter.hasAttribute('data-animated')) {
                    counter.setAttribute('data-animated', 'true');
                    animateCounter(counter);
                }
            });
            
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all animatable sections
document.querySelectorAll('section, .product-card, .testimonial-card').forEach(el => {
    observer.observe(el);
});

// Dark mode support
const toggleDarkMode = () => {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
};

if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
}

// Smooth parallax on scroll
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    if (hero) {
        const scrollPosition = window.scrollY;
        hero.style.backgroundPosition = `0 ${scrollPosition * 0.5}px`;
    }
});

// Ripple effect on buttons
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function (e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        this.appendChild(ripple);
        setTimeout(() => ripple.remove(), 600);
    });
});

// Page load animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Prevent multiple form submissions
const forms = document.querySelectorAll('form');
forms.forEach(form => {
    form.addEventListener('submit', function() {
        const submitBtn = this.querySelector('[type="submit"]');
        if (submitBtn) {
            submitBtn.disabled = true;
            submitBtn.textContent = 'Enviando...';
        }
    });
});


// Animated Counters on Scroll
function animateCounters() {
  const counters = document.querySelectorAll('.counter');
  const observerOptions = { threshold: 0.5 };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.hasAttribute('data-animated')) {
        const counter = entry.target;
        const target = parseInt(counter.getAttribute('data-target'));
        const increment = target / 50;
        let current = 0;
        const updateCounter = () => {
          current += increment;
          if (current < target) {
            counter.textContent = Math.floor(current);
            setTimeout(updateCounter, 30);
          } else {
            counter.textContent = target;
            counter.setAttribute('data-animated', 'true');
          }
        };
        updateCounter();
      }
    });
  }, observerOptions);
  counters.forEach(counter => observer.observe(counter));
}

window.addEventListener('load', animateCounters);

// Trigger animations for sections on scroll
function observeSections() {
    const sections = document.querySelectorAll('.features, .testimonios, .about, .feature-card, .testimonial-card, .fade-in-text');
    const observerOptions = { threshold: 0.1 };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = entry.target.classList.contains('fade-in-text')
                    ? 'fadeInUp 1s ease-out forwards'
                    : 'slideUp 0.8s ease-out forwards';
                entry.target.style.opacity = '1';
            }
        });
    }, observerOptions);
    
    sections.forEach(section => observer.observe(section));
}

window.addEventListener('load', observeSections);


// ========== STORE & PAYMENT FUNCTIONALITY ==========

// Get store elements
const storeModal = document.getElementById('storeModal');
const openStoreBtn = document.getElementById('openStoreBtn');
const closeStoreBtn = document.getElementById('closeStoreBtn');

// Payment option elements
const yapeRadio = document.getElementById('yapeRadio');
const bcpRadio = document.getElementById('bcpRadio');
const yapeDetails = document.querySelector('.yape-details');
const bcpDetails = document.querySelector('.bcp-details');
const yapeOption = document.getElementById('yapeOption');
const bcpOption = document.getElementById('bcpOption');

// Confirmation checkboxes
const yapeConfirm = document.getElementById('yapeConfirm');
const bcpConfirm = document.getElementById('bcpConfirm');
const yapeSubmitBtn = document.querySelector('.yape-submit');
const bcpSubmitBtn = document.querySelector('.bcp-submit');

// Open store modal
if (openStoreBtn) {
    openStoreBtn.addEventListener('click', () => {
        storeModal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    });
}

// Close store modal
if (closeStoreBtn) {
    closeStoreBtn.addEventListener('click', () => {
        storeModal.classList.add('hidden');
        document.body.style.overflow = 'auto';
    });
}

// Close modal when clicking outside
if (storeModal) {
    storeModal.addEventListener('click', (e) => {
        if (e.target === storeModal) {
            storeModal.classList.add('hidden');
            document.body.style.overflow = 'auto';
        }
    });
}

// Handle payment method selection - Yape
if (yapeRadio) {
    yapeRadio.addEventListener('change', () => {
        yapeDetails.classList.remove('hidden');
        bcpDetails.classList.add('hidden');
    });
}

// Handle payment method selection - BCP
if (bcpRadio) {
    bcpRadio.addEventListener('change', () => {
        bcpDetails.classList.remove('hidden');
        yapeDetails.classList.add('hidden');
    });
}

// Handle Yape confirmation
if (yapeConfirm) {
    yapeConfirm.addEventListener('change', () => {
        if (yapeSubmitBtn) {
            yapeSubmitBtn.disabled = !yapeConfirm.checked;
        }
    });
}

// Handle BCP confirmation
if (bcpConfirm) {
    bcpConfirm.addEventListener('change', () => {
        if (bcpSubmitBtn) {
            bcpSubmitBtn.disabled = !bcpConfirm.checked;
        }
    });
}

// Copy to clipboard functionality
const copyButtons = document.querySelectorAll('.copy-btn');
copyButtons.forEach(button => {
    button.addEventListener('click', () => {
        const textToCopy = button.getAttribute('data-copy');
        navigator.clipboard.writeText(textToCopy).then(() => {
            const originalText = button.textContent;
            button.textContent = '✓ Copiado';
            setTimeout(() => {
                button.textContent = originalText;
            }, 2000);
        });
    });
});

// Handle Yape submit button
if (yapeSubmitBtn) {
    yapeSubmitBtn.addEventListener('click', () => {
        if (yapeConfirm.checked) {
            alert('✓ ¡Pago verificado! Tu acceso al e-book será activado pronto.\nVerifica tu email para más detalles.');
            storeModal.classList.add('hidden');
            document.body.style.overflow = 'auto';
            // Reset form
            yapeRadio.checked = false;
            yapeConfirm.checked = false;
            yapeDetails.classList.add('hidden');
            yapeSubmitBtn.disabled = true;
        }
    });
}

// Handle BCP submit button (opens WhatsApp)
if (bcpSubmitBtn) {
    bcpSubmitBtn.addEventListener('click', (e) => {
        if (!bcpConfirm.checked) {
            e.preventDefault();
            return false;
        }
    });
}

console.log('Store functionality loaded successfully');
