// Mobile menu toggle
document.getElementById('mobile-menu-button').addEventListener('click', () => {
  document.getElementById('mobile-menu').classList.toggle('hidden');
});

// FAQ accordion using "open" class for smooth transition
const faqQuestions = document.querySelectorAll('.faq-question');
faqQuestions.forEach(question => {
  question.addEventListener('click', () => {
    // فرض شده است که عنصر faq-answer دقیقاً بعد از دکمه سوال قرار دارد
    const answer = question.nextElementSibling;
    const icon = question.querySelector('i');
    
    // تغییر وضعیت FAQ-answer از طریق toggling کلاس open
    answer.classList.toggle('open');
    // چرخش آیکون
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
document.getElementById('registration-form').addEventListener('submit', (e) => {
  e.preventDefault();
  document.getElementById('success-modal').classList.remove('hidden');
});

// Close modal
document.getElementById('close-modal').addEventListener('click', () => {
  document.getElementById('success-modal').classList.add('hidden');
});
document.getElementById('modal-ok').addEventListener('click', () => {
  document.getElementById('success-modal').classList.add('hidden');
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector(anchor.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
    // در صورت باز بودن منوی موبایل، آن را ببندید.
    if (!document.getElementById('mobile-menu').classList.contains('hidden')) {
      document.getElementById('mobile-menu').classList.add('hidden');
    }
  });
});

// Create particles effect
function createParticles() {
  const particlesContainer = document.getElementById('particles');
  const particleCount = 30;
  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    // سایز تصادفی بین 2px و 5px
    const size = Math.random() * 3 + 2;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    // موقعیت تصادفی
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.top = `${Math.random() * 100}%`;
    // زمان انیمیشن تصادفی بین 10s و 20s
    const duration = Math.random() * 10 + 10;
    particle.style.animationDuration = `${duration}s`;
    // تأخیر تصادفی
    particle.style.animationDelay = `${Math.random() * 5}s`;
    particlesContainer.appendChild(particle);
  }
}
document.addEventListener('DOMContentLoaded', () => {
  createParticles();
  // Initialize ScrollReveal (اختیاری) برای انیمیشن‌های دیگر
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
