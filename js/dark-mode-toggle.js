// dark-mode-toggle.js
document.addEventListener('DOMContentLoaded', () => {
    const toggleSwitch = document.getElementById('darkModeToggle');
    const currentTheme = localStorage.getItem('theme');

    const applyTheme = (theme) => {
        document.body.classList.toggle('dark-mode', theme === 'dark');
        if (toggleSwitch) toggleSwitch.checked = (theme === 'dark');
    };

    applyTheme(currentTheme);

    if (toggleSwitch) {
        toggleSwitch.addEventListener('change', () => {
            const theme = document.body.classList.contains('dark-mode') ? 'light' : 'dark';
            applyTheme(theme);
            localStorage.setItem('theme', theme);
        });
    }
});
  
