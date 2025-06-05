// Toggle Dark/Light Mode
const themeToggleBtn = document.getElementById('theme-toggle');
themeToggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// FAQ Toggle
function toggleAnswer(id) {
  const answer = document.getElementById('answer' + id);
  const faqToggle = answer.previousElementSibling.querySelector('.faq-toggle');
  if (answer.style.display === 'block') {
    answer.style.display = 'none';
    faqToggle.textContent = '+';
  } else {
    answer.style.display = 'block';
    faqToggle.textContent = '−';
  }
}

// Hamburger menu toggle on mobile
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');

menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});
