// Theme Toggle Functionality
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const logo = document.querySelector('.logo img');

// Check for previously saved theme preference
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    logo.src = 'logo-dark.png';
} else {
    logo.src = 'logo-light.png';
}

// Toggle theme and logo on button click
themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    // Switch logo based on theme
    if (body.classList.contains('dark-mode')) {
        logo.src = 'logo-dark.png';
        localStorage.setItem('theme', 'dark');
    } else {
        logo.src = 'logo-light.png';
        localStorage.setItem('theme', 'light');
    }
});

// Placeholder for future voice input functionality
document.getElementById('voiceInput').addEventListener('click', () => {
    alert('Voice input feature coming soon!');
});
