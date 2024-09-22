// dark-mode-toggle.js
document.addEventListener('DOMContentLoaded', function () {
    const toggleSwitch = document.getElementById('darkModeToggle');
    const currentTheme = localStorage.getItem('theme');
  
    if (currentTheme === 'dark') {
      document.body.classList.add('dark-mode');
      if (toggleSwitch) toggleSwitch.checked = true;
    }
  
    if (toggleSwitch) {
      toggleSwitch.addEventListener('change', function () {
        document.body.classList.toggle('dark-mode');
        let theme = 'light';
        if (document.body.classList.contains('dark-mode')) {
          theme = 'dark';
        }
        localStorage.setItem('theme', theme);
      });
    }
  });
  