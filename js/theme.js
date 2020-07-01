const button = document.querySelector("#theme_change > i");

window.addEventListener('load', () => {
  const theme = localStorage.getItem('theme');
  if (theme === 'light') {
    button.classList.remove('fa-sun');
    button.classList.add('fa-moon');
    document.querySelector('body').classList.add(theme);
  }
});

button.addEventListener('click', () => {
  if (button.classList.contains('fa-sun')) {
    button.classList.add('fa-moon');
    button.classList.remove('fa-sun');
    localStorage.setItem('theme', 'light');
  } else {
    button.classList.add('fa-sun');
    button.classList.remove('fa-moon');
    localStorage.setItem('theme', 'dark');
  }
  document.querySelector('body').classList.toggle('light');
});
