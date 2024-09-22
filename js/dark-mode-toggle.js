// dark-mode-toggle.js
document.addEventListener('DOMContentLoaded', () => {
    const toggleSwitch = document.getElementById('darkModeToggle');
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) applyTheme(currentTheme);
    if (toggleSwitch) toggleSwitch.addEventListener('change', toggleDarkMode);
});

const applyTheme = (theme) => {
    document.body.classList.toggle('dark-mode', theme === 'dark');
    const toggleSwitch = document.getElementById('darkModeToggle');
    if (toggleSwitch) toggleSwitch.checked = (theme === 'dark');
};

const toggleDarkMode = () => {
    const theme = document.body.classList.contains('dark-mode') ? 'light' : 'dark';
    applyTheme(theme);
    localStorage.setItem('theme', theme);
};
  
