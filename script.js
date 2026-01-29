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

// ========================================
// 🎨 PREMIUM ANIMATIONS - JavaScript
// ========================================

// DARK MODE TOGGLE
function initDarkMode() {
  // Check for saved preference
  const darkMode = localStorage.getItem('darkMode');
  
  if (darkMode === 'enabled') {
    document.body.classList.add('dark-mode');
  }
  
  // Create toggle button
  const toggle = document.createElement('button');
  toggle.className = 'theme-toggle';
  toggle.innerHTML = darkMode === 'enabled' ? '☀️' : '🌙';
  toggle.setAttribute('aria-label', 'Toggle dark mode');
  document.body.appendChild(toggle);
  
  // Toggle function
  toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    if (document.body.classList.contains('dark-mode')) {
      localStorage.setItem('darkMode', 'enabled');
      toggle.innerHTML = '☀️';
    } else {
      localStorage.setItem('darkMode', null);
      toggle.innerHTML = '🌙';
    }
  });
}

// SCROLL REVEAL ANIMATIONS
function initScrollReveal() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  // Add scroll-reveal class to elements
  const elements = document.querySelectorAll('.feature-card, .testimonial-card, .section-title, .product-showcase');
  elements.forEach(el => {
    el.classList.add('scroll-reveal');
    observer.observe(el);
  });
}

// ANIMATED COUNTER
function animateCounter(element, target, duration = 2000) {
  let start = 0;
  const increment = target / (duration / 16);
  
  const timer = setInterval(() => {
    start += increment;
    if (start >= target) {
      element.textContent = Math.ceil(target);
      clearInterval(timer);
    } else {
      element.textContent = Math.ceil(start);
    }
  }, 16);
}

function initCounters() {
  const counters = document.querySelectorAll('.counter');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = +entry.target.getAttribute('data-target');
        entry.target.classList.add('counting');
        animateCounter(entry.target, target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  
  counters.forEach(counter => observer.observe(counter));
}

// STAGGER ANIMATION FOR LISTS
function initStaggerAnimation() {
  const lists = document.querySelectorAll('.features-list li, .flipbook-benefits li');
  lists.forEach((item, index) => {
    item.classList.add('stagger-item');
    item.style.animationDelay = `${index * 0.1}s`;
  });
}

// SMOOTH PAGE TRANSITIONS
function initPageTransitions() {
  // Fade in on page load
  window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
      document.body.style.transition = 'opacity 0.5s ease';
      document.body.style.opacity = '1';
    }, 100);
  });
}

// PARALLAX EFFECT ON MOUSE MOVE
function initParallax() {
  const hero = document.querySelector('.hero');
  
  if (hero) {
    document.addEventListener('mousemove', (e) => {
      const moveX = (e.clientX - window.innerWidth / 2) * 0.01;
      const moveY = (e.clientY - window.innerHeight / 2) * 0.01;
      
      const heroBefore = hero.querySelector('::before');
      if (heroBefore) {
        hero.style.setProperty('--mouse-x', `${moveX}px`);
        hero.style.setProperty('--mouse-y', `${moveY}px`);
      }
    });
  }
}

// TYPING EFFECT
function initTypingEffect() {
  const elements = document.querySelectorAll('.typing-effect');
  
  elements.forEach(element => {
    const text = element.textContent;
    element.textContent = '';
    element.style.display = 'inline-block';
    
    let i = 0;
    const timer = setInterval(() => {
      if (i < text.length) {
        element.textContent += text.charAt(i);
        i++;
      } else {
        clearInterval(timer);
        // Remove cursor after typing
        setTimeout(() => {
          element.style.borderRight = 'none';
        }, 500);
      }
    }, 100);
  });
}

// ADD RIPPLE EFFECT TO BUTTONS
function createRipple(event) {
  const button = event.currentTarget;
  const ripple = document.createElement('span');
  const diameter = Math.max(button.clientWidth, button.clientHeight);
  const radius = diameter / 2;
  
  ripple.style.width = ripple.style.height = `${diameter}px`;
  ripple.style.left = `${event.clientX - button.offsetLeft - radius}px`;
  ripple.style.top = `${event.clientY - button.offsetTop - radius}px`;
  ripple.classList.add('ripple');
  
  const rippleEffect = button.getElementsByClassName('ripple')[0];
  if (rippleEffect) {
    rippleEffect.remove();
  }
  
  button.appendChild(ripple);
}

function initRippleEffect() {
  const buttons = document.querySelectorAll('.btn');
  buttons.forEach(button => {
    button.addEventListener('click', createRipple);
  });
}

// INITIALIZE ALL PREMIUM FEATURES
function initPremiumFeatures() {
  initDarkMode();
  initScrollReveal();
  initCounters();
  initStaggerAnimation();
  initPageTransitions();
  initParallax();
  initRippleEffect();
  
  console.log('🎨 Premium animations loaded successfully!');
}

// Run when DOM is loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initPremiumFeatures);
} else {
  initPremiumFeatures();
}

// ========================================
// END PREMIUM ANIMATIONS
// ========================================
