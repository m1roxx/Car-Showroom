// Day/Night theme switcher
const dayNightToggle = document.getElementById('day-night-toggle');
dayNightToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
});