// Toggle Dark/Light Mode
const themeToggleBtn = document.getElementById('theme-toggle');
// Ensure the button exists before adding event listener
if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        // Optional: Save preference to localStorage
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    });
}

// Optional: Load theme preference from localStorage on page load
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
    } else if (savedTheme === 'light') {
        document.body.classList.remove('dark-mode');
    }
    // If no preference, default to light mode (or browser preference later)
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

// Ensure elements exist before adding event listeners
if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('show');
        // Optional: Close menu if a link is clicked
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('show');
            });
        });
    });
}