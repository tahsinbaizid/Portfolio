// Mobile menu toggle
const toggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('nav ul');
toggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Fade-in animation on scroll
const sections = document.querySelectorAll('.section-card, .project-card');
window.addEventListener('scroll', () => {
  const triggerBottom = window.innerHeight * 0.85;
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if(sectionTop < triggerBottom){
      section.classList.add('show');
    }
  });
});