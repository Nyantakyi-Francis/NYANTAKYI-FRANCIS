// Toggle Dark/Light Mode
const themeToggleBtn = document.getElementById('theme-toggle');

// Ensure the button exists before adding event listener
if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
        // Toggle the 'light-mode' class
        // If 'light-mode' is present, remove it (go to dark)
        // If 'light-mode' is not present, add it (go to light)
        document.body.classList.toggle('light-mode');

        // Save preference to localStorage
        if (document.body.classList.contains('light-mode')) {
            localStorage.setItem('theme', 'light');
        } else {
            localStorage.setItem('theme', 'dark'); // Save 'dark' if light-mode class is removed
        }
    });
}

// Load theme preference from localStorage on page load
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');

    // If 'light' was saved, add the 'light-mode' class
    if (savedTheme === 'light') {
        document.body.classList.add('light-mode');
    }
    // If 'dark' was saved, or nothing was saved, do nothing.
    // The default CSS styles are already for dark mode.
});


// FAQ Toggle (No changes needed)
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

// Hamburger menu toggle on mobile (No changes needed beyond the fixes in HTML/CSS)
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');

// Ensure elements exist before adding event listeners
if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('show');
    });

    // Optional: Close menu if a link is clicked
    navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('show');
        });
    });
}