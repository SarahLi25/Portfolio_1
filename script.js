
const toggle = document.querySelector('.dark-toggle');
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');
const body = document.body;

// Dark mode toggle (no localStorage)
toggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  toggle.textContent = body.classList.contains('dark-mode') ? '☀️' : '🌙';
});

// Menu toggle
menuToggle.addEventListener('click', () => {
  menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
});
