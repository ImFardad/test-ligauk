// Mobile menu toggle
document.getElementById('mobile-menu-button').addEventListener('click', function() {
    document.getElementById('mobile-menu').classList.toggle('hidden');
});

// FAQ accordion
const faqQuestions = document.querySelectorAll('.faq-question');
faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        const icon = question.querySelector('i');
        
        answer.classList.toggle('hidden');
        icon.classList.toggle('transform');
        icon.classList.toggle('rotate-180');
    });
});

// Team fields toggle
const participationType = document.querySelectorAll('input[name="participation-type"]');
const teamFields = document.getElementById('team-fields');

participationType.forEach(radio => {
    radio.addEventListener('change', () => {
        if (document.getElementById('team').checked) {
            teamFields.classList.remove('hidden');
        } else {
            teamFields.classList.add('hidden');
        }
    });
});

// Form submission
document.getElementById('registration-form').addEventListener('submit', function(e) {
    e.preventDefault();
    document.getElementById('success-modal').classList.remove('hidden');
});

// Close modal
document.getElementById('close-modal').addEventListener('click', function() {
    document.getElementById('success-modal').classList.add('hidden');
});

document.getElementById('modal-ok').addEventListener('click', function() {
    document.getElementById('success-modal').classList.add('hidden');
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
        
        // Close mobile menu if open
        if (!document.getElementById('mobile-menu').classList.contains('hidden')) {
            document.getElementById('mobile-menu').classList.add('hidden');
        }
    });
});

// Create particles
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 30;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        // Random size between 2px and 5px
        const size = Math.random() * 3 + 2;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        
        // Random position
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        
        // Random animation duration between 10s and 20s
        const duration = Math.random() * 10 + 10;
        particle.style.animationDuration = `${duration}s`;
        
        // Random delay
        particle.style.animationDelay = `${Math.random() * 5}s`;
        
        particlesContainer.appendChild(particle);
    }
}

// Initialize particles when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    createParticles();
    
    // Initialize ScrollReveal
    ScrollReveal().reveal('.card-hover', {
        delay: 200,
        distance: '20px',
        origin: 'bottom',
        interval: 100,
        easing: 'cubic-bezier(0.5, 0, 0, 1)',
        opacity: 0,
        scale: 0.9
    });
    
    ScrollReveal().reveal('h1, h2, h3', {
        delay: 100,
        distance: '20px',
        origin: 'bottom',
        easing: 'cubic-bezier(0.5, 0, 0, 1)',
        opacity: 0
    });
    
    ScrollReveal().reveal('p', {
        delay: 200,
        distance: '10px',
        origin: 'bottom',
        easing: 'cubic-bezier(0.5, 0, 0, 1)',
        opacity: 0
    });
});
